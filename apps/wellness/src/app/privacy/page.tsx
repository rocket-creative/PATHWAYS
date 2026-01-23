import { Metadata } from 'next'
import { PageHero, JsonLd, createBreadcrumbSchema } from '@pathways/ui'

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'Pathways Within privacy policy. Learn how we collect, use, and protect your personal information.',
}

const siteUrl = process.env.NEXT_PUBLIC_MAIN_URL || 'http://localhost:3000'

export default function PrivacyPage() {
  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Privacy Policy', url: '/privacy' },
  ], siteUrl)

  return (
    <main>
      <JsonLd data={breadcrumbs} />
      
      <PageHero
        eyebrow="Legal"
        headline="Privacy policy"
        body="How we protect your information"
        image="/hero-images/freepik__professional-studio-photograph-of-4-diverse-smilin__19260.jpeg"
        site="wellness"
      />

      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <article className="prose prose-lg mx-auto max-w-3xl">
            <p className="lead">
              Last updated: January 2026
            </p>
            
            <p>
              Pathways Within Wisdom and Wellness Collaborative ("we," "our," or "us") is committed to 
              protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and 
              safeguard your information when you visit our website or use our services.
            </p>

            <h2>Information we collect</h2>
            
            <h3>Personal information</h3>
            <p>
              We may collect personal information that you provide directly to us, including:
            </p>
            <ul>
              <li>Name, email address, and phone number</li>
              <li>Appointment and scheduling information</li>
              <li>Insurance information for billing purposes</li>
              <li>Information you provide through contact forms</li>
            </ul>

            <h3>Protected health information</h3>
            <p>
              As a healthcare provider, we collect and maintain protected health information (PHI) in 
              accordance with HIPAA regulations. This information is handled separately from website 
              data and is subject to our Notice of Privacy Practices.
            </p>

            <h3>Automatically collected information</h3>
            <p>
              When you visit our website, we may automatically collect certain information, including:
            </p>
            <ul>
              <li>Device and browser information</li>
              <li>IP address and general location</li>
              <li>Pages visited and time spent on site</li>
            </ul>
            <p>
              This information is only collected with your explicit consent through our cookie consent 
              mechanism. You can change your preferences at any time using the Cookie Settings button.
            </p>

            <h2>How we use your information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Schedule appointments and communicate with you</li>
              <li>Process insurance claims and payments</li>
              <li>Send relevant updates about our services (with consent)</li>
              <li>Analyze website usage to improve user experience (with consent)</li>
            </ul>

            <h2>Information sharing</h2>
            <p>
              We do not sell your personal information. We may share your information only in the 
              following circumstances:
            </p>
            <ul>
              <li>With your explicit consent</li>
              <li>With service providers who assist our operations (under confidentiality agreements)</li>
              <li>With insurance companies for billing (as authorized by you)</li>
              <li>As required by law or to protect rights and safety</li>
            </ul>

            <h2>Your rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal requirements)</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>

            <h2>Data security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your 
              information. Our healthcare systems comply with HIPAA security requirements.
            </p>

            <h2>Contact us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            <ul>
              <li>Email: Welcome@pathwayswithin.com</li>
              <li>Phone: (631) 371 3825</li>
              <li>Address: 520 Franklin Ave, Suite L1, Garden City, NY 11530</li>
            </ul>

            <h2>Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
