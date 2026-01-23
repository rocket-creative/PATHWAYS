import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Format the form data into a readable email
    const formatField = (key: string, value: any): string => {
      if (value === null || value === undefined || value === '' || value === false) {
        return ''
      }
      const label = key
        .replace(/_/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase())
      return `${label}: ${value}\n`
    }

    let emailBody = 'CLIENT INTAKE FORM SUBMISSION\n'
    emailBody += '================================\n\n'
    emailBody += `Submitted: ${new Date().toLocaleString()}\n\n`

    // Contact information first
    emailBody += 'CONTACT INFORMATION\n'
    emailBody += '-------------------\n'
    if (formData.contact_name) emailBody += `Name: ${formData.contact_name}\n`
    if (formData.contact_email) emailBody += `Email: ${formData.contact_email}\n`
    if (formData.contact_phone) emailBody += `Phone: ${formData.contact_phone}\n`
    if (formData.contact_company) emailBody += `Company: ${formData.contact_company}\n`
    emailBody += '\n'

    // Group fields by section
    const sections: Record<string, string[]> = {
      'SOCIAL MEDIA ACCOUNTS': [
        'facebook_page_name', 'facebook_url', 'facebook_email', 'facebook_admin', 'facebook_notes',
        'instagram_username', 'instagram_url', 'instagram_email', 'instagram_admin', 'instagram_notes',
        'linkedin_url', 'linkedin_admin', 'linkedin_email', 'linkedin_notes',
        'twitter_username', 'twitter_url', 'twitter_email',
        'youtube_channel', 'youtube_url', 'youtube_email',
        'tiktok_username', 'tiktok_url', 'tiktok_email',
        'pinterest_username', 'pinterest_url', 'pinterest_email',
        'other_social_platform', 'other_social_url', 'other_social_username', 'other_social_email', 'other_social_notes',
      ],
      'GOOGLE SERVICES': [
        'gbp_name', 'gbp_url', 'gbp_email', 'gbp_locations', 'gbp_verified', 'gbp_unverified', 'gbp_pending', 'gbp_notes',
        'ads_account_id', 'ads_email', 'ads_billing', 'ads_budget', 'ads_campaigns',
        'analytics_email', 'analytics_property_id', 'analytics_url',
        'search_console_email', 'search_console_url',
        'gtm_email', 'gtm_container_id',
        'workspace_email', 'workspace_domain', 'workspace_users',
      ],
      'WEBSITES AND DOMAINS': [
        'primary_domain', 'domain_registrar', 'registrar_email',
        'hosting_provider', 'hosting_email',
        'cms_platform', 'cms_email',
        'ssl_active', 'ssl_expired', 'website_notes',
        'additional_domain', 'additional_domain_purpose', 'additional_domain_registrar', 'additional_domain_email',
        'subdomain', 'subdomain_purpose',
      ],
      'HEALTHCARE DIRECTORIES': [
        'psychology_today_exists', 'psychology_today_url', 'psychology_today_email', 'psychology_today_notes',
        'therapyden_exists', 'therapyden_url', 'therapyden_email', 'therapyden_notes',
        'goodtherapy_exists', 'goodtherapy_url', 'goodtherapy_email', 'goodtherapy_notes',
        'zocdoc_exists', 'zocdoc_url', 'zocdoc_email', 'zocdoc_notes',
        'healthgrades_exists', 'healthgrades_url', 'healthgrades_email', 'healthgrades_notes',
        'vitals_exists', 'vitals_url', 'vitals_email', 'vitals_notes',
        'webmd_exists', 'webmd_url', 'webmd_email', 'webmd_notes',
        'ratemds_exists', 'ratemds_url', 'ratemds_email', 'ratemds_notes',
        'other_healthcare_directory', 'other_healthcare_url', 'other_healthcare_email', 'other_healthcare_notes',
      ],
      'BUSINESS DIRECTORIES': [
        'yelp_exists', 'yelp_url', 'yelp_email', 'yelp_reviews', 'yelp_notes',
        'yellow_pages_exists', 'yellow_pages_url', 'yellow_pages_email', 'yellow_pages_notes',
        'better_business_bureau_exists', 'better_business_bureau_url', 'better_business_bureau_email', 'better_business_bureau_notes',
        'angi_exists', 'angi_url', 'angi_email', 'angi_notes',
        'thumbtack_exists', 'thumbtack_url', 'thumbtack_email', 'thumbtack_notes',
        'nextdoor_exists', 'nextdoor_url', 'nextdoor_email', 'nextdoor_notes',
        'chamber_org', 'chamber_contact', 'chamber_notes',
      ],
      'WELLNESS DIRECTORIES': [
        'spafinder_exists', 'spafinder_url', 'spafinder_email', 'spafinder_notes',
        'wellnesscom_exists', 'wellnesscom_url', 'wellnesscom_email', 'wellnesscom_notes',
        'mindbody_exists', 'mindbody_url', 'mindbody_email', 'mindbody_notes',
        'classpass_exists', 'classpass_url', 'classpass_email', 'classpass_notes',
      ],
      'REVIEW PLATFORMS': [
        'google_reviews_count', 'google_reviews_rating', 'google_reviews_access',
        'facebook_reviews_count', 'facebook_reviews_rating', 'facebook_reviews_access',
        'yelp_reviews_count', 'yelp_reviews_rating', 'yelp_reviews_access',
      ],
      'EMAIL MARKETING AND CRM': [
        'mailchimp_exists', 'mailchimp_email', 'mailchimp_list_size', 'mailchimp_notes',
        'constant_contact_exists', 'constant_contact_email', 'constant_contact_list_size', 'constant_contact_notes',
        'sendgrid_exists', 'sendgrid_email', 'sendgrid_notes',
        'hubspot_exists', 'hubspot_email', 'hubspot_plan', 'hubspot_notes',
        'salesforce_exists', 'salesforce_email', 'salesforce_plan', 'salesforce_notes',
      ],
      'BOOKING SYSTEMS': [
        'jane_app_exists', 'jane_app_email', 'jane_app_type', 'jane_app_notes',
        'simplepractice_exists', 'simplepractice_email', 'simplepractice_notes',
        'acuity_scheduling_exists', 'acuity_scheduling_email', 'acuity_scheduling_notes',
        'calendly_exists', 'calendly_email', 'calendly_notes',
      ],
      'PAYMENT PROCESSORS': [
        'stripe_exists', 'stripe_email', 'stripe_notes',
        'square_exists', 'square_email', 'square_notes',
        'paypal_business_exists', 'paypal_business_email', 'paypal_business_notes',
        'ivypay_exists', 'ivypay_email', 'ivypay_notes',
        'cherry_financing_exists', 'cherry_financing_email', 'cherry_financing_notes',
      ],
      'ADVERTISING PLATFORMS': [
        'facebook_ads_exists', 'facebook_ads_email', 'facebook_ads_account_id', 'facebook_ads_budget', 'facebook_ads_notes',
        'instagram_ads_exists', 'instagram_ads_email', 'instagram_ads_notes',
        'linkedin_ads_exists', 'linkedin_ads_email', 'linkedin_ads_notes',
        'microsoft_advertising_exists', 'microsoft_advertising_email', 'microsoft_advertising_notes',
      ],
      'ADDITIONAL INFORMATION': [
        'known_issues', 'accounts_to_create', 'priority_accounts', 'additional_notes',
      ],
    }

    // Build text email body with sections
    for (const [sectionTitle, fields] of Object.entries(sections)) {
      const sectionData: string[] = []
      for (const field of fields) {
        if (formData[field]) {
          const value = formData[field]
          if (value === true) {
            sectionData.push(`${field.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}: Yes`)
          } else if (value !== false && value !== '') {
            sectionData.push(formatField(field, value))
          }
        }
      }
      
      if (sectionData.length > 0) {
        emailBody += `${sectionTitle}\n`
        emailBody += '-'.repeat(sectionTitle.length) + '\n'
        emailBody += sectionData.join('')
        emailBody += '\n'
      }
    }
    
    // Build HTML email body
    const formatHtmlSection = (sectionTitle: string, sectionData: string[]): string => {
      if (sectionData.length === 0) return ''
      
      let html = `<h2 style="color: #72A23B; border-bottom: 2px solid #72A23B; padding-bottom: 5px; margin-top: 30px;">${sectionTitle}</h2>`
      
      for (const line of sectionData) {
        if (line.includes(':')) {
          const [label, ...valueParts] = line.split(':')
          const value = valueParts.join(':').trim()
          html += `
            <div class="field" style="margin: 10px 0; padding: 8px 0; border-bottom: 1px solid #eee;">
              <span class="label" style="font-weight: bold; color: #01153D; display: inline-block; min-width: 200px;">${label.trim()}:</span>
              <span class="value" style="color: #666;">${value || '(empty)'}</span>
            </div>
          `
        } else if (line.trim()) {
          html += `<p style="margin: 10px 0; font-weight: bold; font-size: 1.1em; color: #01153D;">${line.trim()}</p>`
        }
      }
      
      return html
    }
    
    // Build HTML email body
    let htmlBody = '<h1 style="color: #01153D; margin-top: 0;">Client Intake Form Submission</h1>'
    htmlBody += `<p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>`
    
    // Contact information first
    htmlBody += '<h2 style="color: #72A23B; border-bottom: 2px solid #72A23B; padding-bottom: 5px; margin-top: 30px;">Contact Information</h2>'
    if (formData.contact_name) htmlBody += `<div class="field" style="margin: 10px 0; padding: 8px 0; border-bottom: 1px solid #eee;"><span class="label" style="font-weight: bold; color: #01153D; display: inline-block; min-width: 200px;">Name:</span><span class="value" style="color: #666;">${formData.contact_name}</span></div>`
    if (formData.contact_email) htmlBody += `<div class="field" style="margin: 10px 0; padding: 8px 0; border-bottom: 1px solid #eee;"><span class="label" style="font-weight: bold; color: #01153D; display: inline-block; min-width: 200px;">Email:</span><span class="value" style="color: #666;">${formData.contact_email}</span></div>`
    if (formData.contact_phone) htmlBody += `<div class="field" style="margin: 10px 0; padding: 8px 0; border-bottom: 1px solid #eee;"><span class="label" style="font-weight: bold; color: #01153D; display: inline-block; min-width: 200px;">Phone:</span><span class="value" style="color: #666;">${formData.contact_phone}</span></div>`
    if (formData.contact_company) htmlBody += `<div class="field" style="margin: 10px 0; padding: 8px 0; border-bottom: 1px solid #eee;"><span class="label" style="font-weight: bold; color: #01153D; display: inline-block; min-width: 200px;">Company:</span><span class="value" style="color: #666;">${formData.contact_company}</span></div>`
    
    // Add sections to HTML
    for (const [sectionTitle, fields] of Object.entries(sections)) {
      const sectionData: string[] = []
      for (const field of fields) {
        if (formData[field]) {
          const value = formData[field]
          if (value === true) {
            sectionData.push(`${field.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}: Yes`)
          } else if (value !== false && value !== '') {
            sectionData.push(formatField(field, value))
          }
        }
      }
      
      if (sectionData.length > 0) {
        htmlBody += formatHtmlSection(sectionTitle, sectionData)
      }
    }

    // Email recipients from environment or default
    const recipientsEnv = process.env.CLIENT_INTAKE_EMAIL_RECIPIENTS
    const recipients = recipientsEnv 
      ? recipientsEnv.split(',').map(email => email.trim())
      : [
          'jenni@pathwayswithin.com',
          'georgestoff@rocketcreative.net',
        ]


    // Try to send emails using configured service
    let emailSent = false
    const errors: string[] = []

    // Option 1: Resend (recommended for Next.js)
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend')
        const resend = new Resend(process.env.RESEND_API_KEY)
        
        // Send to all recipients
        const emailPromises = recipients.map(recipient =>
          resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev', // Update this to your verified domain
            to: recipient,
            subject: 'New Client Intake Form Submission - Pathways Within',
            text: emailBody,
            html: `
              <!DOCTYPE html>
              <html>
                <head>
                  <meta charset="utf-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f5f5f5; margin: 0; padding: 20px; }
                    .container { max-width: 800px; margin: 0 auto; padding: 30px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
                    h1 { color: #01153D; margin-top: 0; }
                    h2 { color: #72A23B; border-bottom: 2px solid #72A23B; padding-bottom: 5px; margin-top: 30px; }
                    .field { margin: 10px 0; padding: 8px 0; border-bottom: 1px solid #eee; }
                    .label { font-weight: bold; color: #01153D; display: inline-block; min-width: 200px; }
                    .value { color: #666; }
                    p { margin: 5px 0; }
                  </style>
                </head>
                <body>
                  <div class="container">
                    ${htmlBody}
                  </div>
                </body>
              </html>
            `,
          })
        )
        
        await Promise.all(emailPromises)
        emailSent = true
      } catch (error: any) {
        console.error('Resend email error:', error)
        errors.push(`Resend error: ${error.message || 'Unknown error'}`)
      }
    }

    // Option 2: SendGrid
    if (!emailSent && process.env.SENDGRID_API_KEY) {
      try {
        const sgMail = await import('@sendgrid/mail').catch(() => null)
        if (sgMail) {
          sgMail.default.setApiKey(process.env.SENDGRID_API_KEY)
          
          for (const recipient of recipients) {
            await sgMail.default.send({
              to: recipient,
              from: process.env.SENDGRID_FROM_EMAIL || 'noreply@pathwayswithin.com',
              subject: 'New Client Intake Form Submission - Pathways Within',
              text: emailBody,
              html: `
                <!DOCTYPE html>
                <html>
                  <head>
                    <meta charset="utf-8">
                    <style>
                      body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                      .container { max-width: 800px; margin: 0 auto; padding: 20px; }
                      h1 { color: #01153D; }
                      h2 { color: #72A23B; border-bottom: 2px solid #72A23B; padding-bottom: 5px; }
                    </style>
                  </head>
                  <body>
                    <div class="container">
                      ${htmlBody}
                    </div>
                  </body>
                </html>
              `,
            })
          }
          emailSent = true
        }
      } catch (error: any) {
        errors.push(`SendGrid error: ${error.message}`)
      }
    }

    // Log for development/debugging
    if (!emailSent) {
      console.log('=== CLIENT INTAKE FORM SUBMISSION ===')
      console.log('Recipients:', recipients)
      console.log(emailBody)
      console.log('=====================================')
      console.log('NOTE: No email service configured. Configure RESEND_API_KEY or SENDGRID_API_KEY in .env.local')
      if (errors.length > 0) {
        console.error('Email errors:', errors)
      }
    }

    return NextResponse.json(
      { 
        success: true,
        message: emailSent 
          ? 'Form submitted successfully. Emails have been sent.'
          : 'Form submitted successfully. Email service not configured - check server logs.',
        emailSent,
        recipients,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing form submission:', error)
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    )
  }
}
