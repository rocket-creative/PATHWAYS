import { Metadata } from 'next'
import { PageHero, JsonLd, createBreadcrumbSchema } from '@pathways/ui'

export const metadata: Metadata = {
  title: 'Accessibility statement',
  description: 'Pathways Within is committed to ensuring digital accessibility for people with disabilities. Learn about our accessibility efforts.',
}

const siteUrl = process.env.NEXT_PUBLIC_MAIN_URL || 'http://localhost:3000'

export default function AccessibilityPage() {
  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Accessibility', url: '/accessibility' },
  ], siteUrl)

  return (
    <main>
      <JsonLd data={breadcrumbs} />
      
      <PageHero
        eyebrow="Accessibility"
        headline="Accessibility statement"
        body="Our commitment to inclusive design"
        image="/hero-images/freepik__professional-studio-photograph-of-4-diverse-smilin__19260.jpeg"
        site="wisdom"
      />

      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <article className="prose prose-lg mx-auto max-w-3xl">
            <p className="lead">
              Pathways Within is committed to ensuring digital accessibility for people with disabilities. 
              We are continually improving the user experience for everyone and applying the relevant 
              accessibility standards.
            </p>

            <h2>Our standards</h2>
            <p>
              We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. 
              These guidelines explain how to make web content more accessible to people with disabilities, 
              including those who are blind, have low vision, are deaf or hard of hearing, have motor 
              impairments, or have cognitive disabilities.
            </p>

            <h2>Measures we take</h2>
            <p>We take the following measures to ensure accessibility:</p>
            <ul>
              <li>Include accessibility as part of our development process</li>
              <li>Provide accessible alternatives for multimedia content</li>
              <li>Ensure all interactive elements are keyboard accessible</li>
              <li>Use semantic HTML to support assistive technologies</li>
              <li>Maintain sufficient color contrast throughout the site</li>
              <li>Provide clear and consistent navigation</li>
              <li>Test with screen readers and other assistive technologies</li>
            </ul>

            <h2>Technical specifications</h2>
            <p>
              Accessibility of our website relies on the following technologies to work with the 
              combination of web browser and any assistive technologies or plugins installed on your 
              computer:
            </p>
            <ul>
              <li>HTML</li>
              <li>WAI-ARIA</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <p>These technologies are relied upon for conformance with accessibility standards.</p>

            <h2>Known limitations</h2>
            <p>
              Despite our best efforts, some content may not be fully accessible. We are working to 
              identify and address any barriers. Known limitations include:
            </p>
            <ul>
              <li>Some older PDF documents may not be fully accessible</li>
              <li>Third party integrations may have varying levels of accessibility</li>
              <li>Maps and location services rely on third party providers</li>
            </ul>

            <h2>Accommodations</h2>
            <p>
              We want everyone to be able to access our services. If you need accommodations to 
              schedule an appointment or use our services, please let us know. We are happy to 
              provide alternative ways to access information and services.
            </p>

            <h2>Feedback</h2>
            <p>
              We welcome your feedback on the accessibility of our website. If you encounter 
              accessibility barriers or have suggestions for improvement, please contact us:
            </p>
            <ul>
              <li>Email: Welcome@pathwayswithin.com</li>
              <li>Phone: (631) 371 3825</li>
            </ul>
            <p>
              We aim to respond to accessibility feedback within 5 business days and to implement 
              fixes where possible.
            </p>

            <h2>Enforcement</h2>
            <p>
              We are committed to making our website accessible. If you are not satisfied with our 
              response to your accessibility concern, you may file a complaint with the U.S. Department 
              of Health and Human Services Office for Civil Rights.
            </p>

            <p className="text-sm text-[rgb(var(--color-text-light))]">
              This statement was last updated in January 2026.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
