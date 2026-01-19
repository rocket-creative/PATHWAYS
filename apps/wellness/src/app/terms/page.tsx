import { Metadata } from 'next'
import { PageHero, JsonLd, createBreadcrumbSchema } from '@pathways/ui'

export const metadata: Metadata = {
  title: 'Terms of service',
  description: 'Pathways Within terms of service. Please read these terms carefully before using our website or services.',
}

const siteUrl = process.env.NEXT_PUBLIC_MAIN_URL || 'http://localhost:3000'

export default function TermsPage() {
  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Terms of Service', url: '/terms' },
  ], siteUrl)

  return (
    <main>
      <JsonLd data={breadcrumbs} />
      
      <PageHero
        eyebrow="Legal"
        headline="Terms of service"
        subheadline="Please read carefully"
        site="main"
      />

      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <article className="prose prose-lg mx-auto max-w-3xl">
            <p className="lead">
              Last updated: January 2026
            </p>
            
            <p>
              Welcome to Pathways Within. By accessing or using our website and services, you agree to 
              be bound by these Terms of Service. If you do not agree to these terms, please do not use 
              our services.
            </p>

            <h2>Services</h2>
            <p>
              Pathways Within provides mental health therapy and wellness services. Our website provides 
              information about our services and allows you to contact us and schedule appointments.
            </p>

            <h2>Not emergency services</h2>
            <p>
              Our website and services are not intended for emergencies. If you are experiencing a 
              mental health crisis, please call 988 (Suicide and Crisis Lifeline) or 911 immediately.
            </p>

            <h2>Appointment policies</h2>
            <h3>Scheduling</h3>
            <p>
              Appointments can be scheduled through our website, by phone, or by email. We will confirm 
              all appointments and provide reminders.
            </p>

            <h3>Cancellation policy</h3>
            <p>
              We require 72 hours advance notice for cancellations. Late cancellations or missed 
              appointments may incur a $75 fee. Please communicate with us if you need to reschedule.
            </p>

            <h2>Payment</h2>
            <p>
              Payment is due at the time of service unless other arrangements have been made with our 
              billing department. We accept cash, credit cards, HSA, and FSA. Insurance billing is 
              available for covered services.
            </p>

            <h2>Website use</h2>
            <h3>Acceptable use</h3>
            <p>You agree to use our website only for lawful purposes and in a way that does not:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe the rights of others</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Attempt to gain unauthorized access to any systems</li>
            </ul>

            <h3>Intellectual property</h3>
            <p>
              All content on this website, including text, graphics, logos, and images, is the property 
              of Pathways Within and is protected by copyright and other intellectual property laws.
            </p>

            <h2>Disclaimer</h2>
            <p>
              The information on this website is for general informational purposes only and is not 
              intended as medical advice. Always consult with a qualified healthcare provider for 
              diagnosis and treatment of any medical condition.
            </p>

            <h2>Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, Pathways Within shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages arising from your use 
              of this website.
            </p>

            <h2>Changes to terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective 
              immediately upon posting to the website. Your continued use of the website constitutes 
              acceptance of any changes.
            </p>

            <h2>Contact</h2>
            <p>
              If you have questions about these Terms of Service, please contact us:
            </p>
            <ul>
              <li>Email: Welcome@pathwayswithin.com</li>
              <li>Phone: (631) 371 3825</li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  )
}
