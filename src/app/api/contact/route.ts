import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(100),
  lastName: z.string().min(1, 'Last name is required').max(100),
  email: z.string().email('Invalid email'),
  phone: z.string().max(20).optional(),
  interest: z.string().max(200).optional(),
  location: z.string().max(100).optional(),
  message: z.string().max(2000).optional(),
  privacyConsent: z.literal(true, { errorMap: () => ({ message: 'You must agree to the privacy policy' }) }),
})

// Simple in-memory rate limit: IP -> { count, resetAt }
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

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    const first = parsed.error.flatten().fieldErrors
    const msg = Object.values(first)[0]?.[0] ?? 'Validation failed'
    return NextResponse.json(
      { error: { code: 'VALIDATION_ERROR', message: msg, details: first } },
      { status: 422 }
    )
  }

  // TODO: Send email, store in CRM, etc. For now we acknowledge.
  return NextResponse.json({ data: { ok: true }, meta: { message: 'Thank you. We will be in touch.' } })
}
