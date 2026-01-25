import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function GET(req: NextRequest) {
  // Check for resend in all case variations
  const resendApiKey = process.env.RESEND || process.env.resend || process.env.RESEND_API_KEY || process.env.resend_api_key
  const fromEmail = process.env.RESEND_FROM_EMAIL || process.env.resend_from_email || 'onboarding@resend.dev'
  const recipientEmail = process.env.BUSINESS_INTAKE_EMAIL || process.env.business_intake_email || 'georgestoff@rocketcreative.net'

  // Check configuration
  const config = {
    hasRESEND: !!process.env.RESEND,
    hasresend: !!process.env.resend,
    hasRESEND_API_KEY: !!process.env.RESEND_API_KEY,
    hasresend_api_key: !!process.env.resend_api_key,
    resendKeyFound: !!resendApiKey,
    resendKeyLength: resendApiKey ? resendApiKey.length : 0,
    fromEmail,
    recipientEmail,
  }

  if (!resendApiKey) {
    return NextResponse.json({
      success: false,
      error: 'RESEND environment variable not configured',
      config,
      message: 'Please set RESEND in your Vercel environment variables'
    }, { status: 500 })
  }

  // Test sending email
  try {
    const resend = new Resend(resendApiKey)
    
    const testEmailBody = `This is a test email from the Pathways Within business intake form.

Configuration:
- From: ${fromEmail}
- To: ${recipientEmail}
- Resend API Key: ${resendApiKey.substring(0, 10)}... (${resendApiKey.length} chars)
- Timestamp: ${new Date().toISOString()}

If you receive this email, Resend is working correctly! 🎉

---
This is a test message. You can safely ignore it.
    `.trim()

    console.log('Sending test email...')
    console.log('To:', recipientEmail)
    console.log('From:', fromEmail)

    const result = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      subject: 'Test Email - Pathways Within Business Intake',
      text: testEmailBody,
    })

    if (result.error) {
      console.error('Resend error:', result.error)
      return NextResponse.json({
        success: false,
        error: result.error,
        config,
        message: 'Email failed to send. Check the error details above.'
      }, { status: 500 })
    }

    console.log('Test email sent successfully:', result.data)

    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully!',
      messageId: result.data?.id,
      config: {
        ...config,
        resendKeyPreview: `${resendApiKey.substring(0, 10)}...`
      },
      details: {
        from: fromEmail,
        to: recipientEmail,
        timestamp: new Date().toISOString()
      }
    })

  } catch (error) {
    console.error('Error sending test email:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      config,
      message: 'Failed to send test email. Check server logs for details.'
    }, { status: 500 })
  }
}
