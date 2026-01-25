import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

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

  // If no data was formatted, add a note
  if (formatted.split('\n').length <= 4) {
    formatted += '\nNote: Form was submitted but no data was provided.\n'
  }

  return formatted
}

async function sendEmail(data: Record<string, unknown>) {
  // Log all environment variables that start with RESEND for debugging
  const resendEnvVars = Object.keys(process.env)
    .filter(key => key.toUpperCase().includes('RESEND'))
    .reduce((acc, key) => {
      acc[key] = process.env[key] ? `${process.env[key]?.substring(0, 10)}... (${process.env[key]?.length} chars)` : 'NOT SET'
      return acc
    }, {} as Record<string, string>)
  
  console.log('Resend-related environment variables:', JSON.stringify(resendEnvVars, null, 2))
  console.log('All env vars with RESEND:', Object.keys(process.env).filter(k => k.toUpperCase().includes('RESEND')))

  // Check for resend in all case variations
  const resendApiKey = process.env.RESEND || process.env.resend || process.env.RESEND_API_KEY || process.env.resend_api_key
  const fromEmail = process.env.RESEND_FROM_EMAIL || process.env.resend_from_email || 'onboarding@resend.dev'
  // Business intake emails go to georgestoff@rocketcreative.net
  const recipientEmail = process.env.BUSINESS_INTAKE_EMAIL || process.env.business_intake_email || 'georgestoff@rocketcreative.net'

  console.log('Resend API key check:', {
    hasRESEND: !!process.env.RESEND,
    hasresend: !!process.env.resend,
    hasRESEND_API_KEY: !!process.env.RESEND_API_KEY,
    hasresend_api_key: !!process.env.resend_api_key,
    resendApiKeyFound: !!resendApiKey,
    resendApiKeyLength: resendApiKey?.length || 0
  })

  if (!resendApiKey) {
    console.error('RESEND not configured. Email will not be sent.')
    console.error('Please set RESEND in your environment variables.')
    console.error('Available env vars:', Object.keys(process.env).filter(k => k.includes('RESEND') || k.includes('resend')))
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
    console.log('Resend API key present:', !!resendApiKey)
    console.log('Resend API key preview:', resendApiKey ? `${resendApiKey.substring(0, 10)}...` : 'NOT SET')

    // Use Resend SDK
    const resend = new Resend(resendApiKey)
    
    // Resend accepts string or array for 'to'
    const emailPayload: {
      from: string
      to: string | string[]
      subject: string
      text: string
    } = {
      from: fromEmail,
      to: recipients.length === 1 ? recipients[0] : recipients,
      subject: 'New Business Intake: Online Presence Inventory',
      text: emailBody,
    }

    console.log('Email payload:', {
      from: emailPayload.from,
      to: emailPayload.to,
      subject: emailPayload.subject,
      textLength: emailPayload.text.length
    })

    const result = await resend.emails.send(emailPayload)

    console.log('Resend result:', JSON.stringify(result, null, 2))

    if (result.error) {
      console.error('Resend SDK error:', JSON.stringify(result.error, null, 2))
      const error = result.error
      const errorMessage = typeof error === 'object' 
        ? JSON.stringify(error) 
        : String(error)
      return { success: false, error: `Failed to send email: ${errorMessage}` }
    }

    if (!result.data) {
      console.error('Resend returned no data and no error:', result)
      return { success: false, error: 'Resend returned no data' }
    }

    console.log('Email sent successfully:', result.data)
    return { success: true, messageId: result.data.id }
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

  const formData = body as Record<string, unknown>
  
  // Log received data for debugging
  console.log('Received form data:', JSON.stringify(formData, null, 2))
  console.log('Number of fields received:', Object.keys(formData).length)

  // Check if we have any data
  if (Object.keys(formData).length === 0) {
    console.error('No form data received')
    return NextResponse.json(
      { error: { code: 'EMPTY_FORM', message: 'No form data provided.' } },
      { status: 400 }
    )
  }

  // Try to send email
  const emailResult = await sendEmail(formData)

  // Log email result for debugging
  console.log('Email send result:', JSON.stringify({
    success: emailResult.success,
    error: emailResult.error,
    messageId: emailResult.messageId
  }, null, 2))

  if (!emailResult.success) {
    console.error('Email sending failed:', emailResult.error)
    console.error('Full error details:', JSON.stringify(emailResult, null, 2))
    
    // Return error details so we can debug
    return NextResponse.json({ 
      data: { ok: true }, 
      meta: { 
        message: 'Form submitted, but email failed to send. Please check server logs.',
        emailSent: false,
        emailError: emailResult.error
      },
      debug: {
        hasRESEND: !!process.env.RESEND,
        hasresend: !!process.env.resend,
        hasRESEND_API_KEY: !!process.env.RESEND_API_KEY,
        hasresend_api_key: !!process.env.resend_api_key,
        resendKeyFound: !!(process.env.RESEND || process.env.resend || process.env.RESEND_API_KEY || process.env.resend_api_key),
        resendKeyLength: (process.env.RESEND || process.env.resend || process.env.RESEND_API_KEY || process.env.resend_api_key)?.length || 0,
        recipientEmail: process.env.BUSINESS_INTAKE_EMAIL || process.env.business_intake_email || 'georgestoff@rocketcreative.net',
        fromEmail: process.env.RESEND_FROM_EMAIL || process.env.resend_from_email || 'onboarding@resend.dev',
        errorDetails: emailResult.error
      }
    }, { status: 200 }) // Still return 200 so form shows success, but include error info
  }

  // Success - email sent
  return NextResponse.json({ 
    data: { ok: true }, 
    meta: { 
      message: 'Thank you. Your inventory has been received and email notification sent.',
      emailSent: true,
      messageId: emailResult.messageId
    } 
  })
}
