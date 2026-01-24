import { NextRequest, NextResponse } from 'next/server'

const rateLimit = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW_MS = 60 * 1000
const RATE_LIMIT_MAX = 5

function getClientId(req: NextRequest): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || req.headers.get('x-real-ip') || 'unknown'
}

function checkRateLimit(id: string): { ok: boolean; retryAfter?: number } {
  const now = Date.now()
  const entry = rateLimit.get(id)
  if (!entry) {
    rateLimit.set(id, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return { ok: true }
  }
  if (now > entry.resetAt) {
    rateLimit.set(id, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return { ok: true }
  }
  entry.count += 1
  if (entry.count > RATE_LIMIT_MAX) {
    return { ok: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) }
  }
  return { ok: true }
}

function unflatten(data: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = {}
  
  for (const [key, value] of Object.entries(data)) {
    if (key.includes('.')) {
      const keys = key.split('.')
      let current: Record<string, unknown> = result
      
      for (let i = 0; i < keys.length - 1; i++) {
        const k = keys[i]
        if (!current[k] || typeof current[k] !== 'object') {
          current[k] = {}
        }
        current = current[k] as Record<string, unknown>
      }
      
      const lastKey = keys[keys.length - 1]
      if (Array.isArray(current[lastKey])) {
        (current[lastKey] as unknown[]).push(value)
      } else if (current[lastKey]) {
        current[lastKey] = [current[lastKey], value]
      } else {
        current[lastKey] = value
      }
    } else {
      result[key] = value
    }
  }
  
  return result
}

function formatFormData(data: Record<string, unknown>): string {
  let formatted = 'ONLINE PRESENCE & ACCOUNT INVENTORY\n'
  formatted += '=====================================\n\n'
  formatted += `Submitted: ${new Date().toLocaleString()}\n\n`

  // Unflatten nested data
  const unflattened = unflatten(data)

  // Helper to format nested object
  const formatNested = (obj: Record<string, unknown>, indent = 0): void => {
    const prefix = '  '.repeat(indent)
    for (const [key, value] of Object.entries(obj)) {
      if (value === null || value === undefined || value === '' || value === false) {
        continue
      }
      
      if (typeof value === 'object' && !Array.isArray(value)) {
        const label = key.replace(/([A-Z])/g, ' $1').replace(/[-_]/g, ' ').replace(/^./, str => str.toUpperCase())
        formatted += `${prefix}${label}:\n`
        formatNested(value as Record<string, unknown>, indent + 1)
      } else if (Array.isArray(value)) {
        const label = key.replace(/([A-Z])/g, ' $1').replace(/[-_]/g, ' ').replace(/^./, str => str.toUpperCase())
        formatted += `${prefix}${label}: ${value.join(', ')}\n`
      } else {
        const label = key.replace(/([A-Z])/g, ' $1').replace(/[-_]/g, ' ').replace(/^./, str => str.toUpperCase())
        formatted += `${prefix}${label}: ${value}\n`
      }
    }
  }

  // Format all data
  formatNested(unflattened)

  return formatted
}

async function sendEmail(data: Record<string, unknown>) {
  const resendApiKey = process.env.RESEND || process.env.RESEND_API_KEY
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'
  // Business intake emails go to georgestoff@rocketcreative.net
  const recipientEmail = process.env.BUSINESS_INTAKE_EMAIL || 'georgestoff@rocketcreative.net'

  if (!resendApiKey) {
    console.error('RESEND not configured. Email will not be sent.')
    console.error('Please set RESEND in your environment variables.')
    return { success: false, error: 'Email service not configured' }
  }

  try {
    const formattedData = formatFormData(data)
    
    const emailBody = `
A new Online Presence & Account Inventory has been submitted.

${formattedData}

---
This is an automated message from the Pathways Within business intake form.
    `.trim()

    // Support multiple recipients (comma-separated)
    const recipients = recipientEmail.split(',').map((e: string) => e.trim())

    console.log('Attempting to send email to:', recipients)
    console.log('From:', fromEmail)

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: recipients,
        subject: 'New Business Intake: Online Presence Inventory',
        text: emailBody,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Resend API error:', response.status, errorText)
      try {
        const errorJson = JSON.parse(errorText)
        console.error('Resend error details:', errorJson)
      } catch {
        // Not JSON, that's fine
      }
      return { success: false, error: `Failed to send email: ${response.status}` }
    }

    const result = await response.json()
    console.log('Email sent successfully:', result)
    return { success: true, messageId: result.id }
  } catch (error) {
    console.error('Error sending email:', error)
    if (error instanceof Error) {
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
    }
    return { success: false, error: `Failed to send email: ${error instanceof Error ? error.message : 'Unknown error'}` }
  }
}

export async function POST(req: NextRequest) {
  const rl = checkRateLimit(getClientId(req))
  if (!rl.ok) {
    return NextResponse.json(
      { error: { code: 'RATE_LIMITED', message: 'Too many requests. Please try again later.' } },
      { status: 429, headers: { 'Retry-After': String(rl.retryAfter ?? 60) } }
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json(
      { error: { code: 'INVALID_JSON', message: 'Invalid request body.' } },
      { status: 400 }
    )
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json(
      { error: { code: 'INVALID_BODY', message: 'Invalid request body.' } },
      { status: 400 }
    )
  }

  // Try to send email
  const emailResult = await sendEmail(body as Record<string, unknown>)

  // Log email result for debugging
  if (!emailResult.success) {
    console.error('Email sending failed:', emailResult.error)
  }

  // Always return success to user (even if email fails, we log it)
  return NextResponse.json({ 
    data: { ok: true }, 
    meta: { 
      message: 'Thank you. Your inventory has been received.',
      emailSent: emailResult.success,
      emailError: emailResult.error || undefined
    } 
  })
}
