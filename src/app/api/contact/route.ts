import { NextRequest, NextResponse } from 'next/server'

type ValidationResult = { ok: true; data: Record<string, unknown> } | { ok: false; message: string }

function validateContactBody(body: unknown): ValidationResult {
  if (!body || typeof body !== 'object') return { ok: false, message: 'Invalid request body.' }
  const o = body as Record<string, unknown>

  const firstName = o.firstName
  if (typeof firstName !== 'string') return { ok: false, message: 'First name is required.' }
  if (firstName.length < 1) return { ok: false, message: 'First name is required.' }
  if (firstName.length > 100) return { ok: false, message: 'First name is too long.' }

  const lastName = o.lastName
  if (typeof lastName !== 'string') return { ok: false, message: 'Last name is required.' }
  if (lastName.length < 1) return { ok: false, message: 'Last name is required.' }
  if (lastName.length > 100) return { ok: false, message: 'Last name is too long.' }

  const email = o.email
  if (typeof email !== 'string') return { ok: false, message: 'Invalid email.' }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) return { ok: false, message: 'Invalid email.' }

  const privacyConsent = o.privacyConsent
  if (privacyConsent !== true) return { ok: false, message: 'You must agree to the privacy policy.' }

  const phone = typeof o.phone === 'string' ? o.phone.slice(0, 20) : undefined
  const interest = typeof o.interest === 'string' ? o.interest.slice(0, 200) : undefined
  const location = typeof o.location === 'string' ? o.location.slice(0, 100) : undefined
  const message = typeof o.message === 'string' ? o.message.slice(0, 2000) : undefined

  return {
    ok: true,
    data: {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: phone?.trim(),
      interest: interest?.trim(),
      location: location?.trim(),
      message: message?.trim(),
      privacyConsent: true,
    },
  }
}

const rateLimit = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW_MS = 60 * 1000
const RATE_LIMIT_MAX = 10

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

  const validated = validateContactBody(body)
  if (!validated.ok) {
    return NextResponse.json(
      { error: { code: 'VALIDATION_ERROR', message: validated.message } },
      { status: 422 }
    )
  }

  // TODO: Send email, store in CRM, etc. For now we acknowledge.
  return NextResponse.json({ data: { ok: true }, meta: { message: 'Thank you. We will be in touch.' } })
}
