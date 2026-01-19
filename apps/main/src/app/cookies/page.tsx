import { Metadata } from 'next'
import { PageHero, JsonLd, createBreadcrumbSchema } from '@pathways/ui'

export const metadata: Metadata = {
  title: 'Cookie policy',
  description: 'Learn about how Pathways Within uses cookies and similar technologies on our website.',
}

const siteUrl = process.env.NEXT_PUBLIC_MAIN_URL || 'http://localhost:3000'

export default function CookiesPage() {
  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Cookie Policy', url: '/cookies' },
  ], siteUrl)

  return (
    <main>
      <JsonLd data={breadcrumbs} />
      
      <PageHero
        eyebrow="Legal"
        headline="Cookie policy"
        subheadline="How we use cookies"
        site="main"
      />

      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <article className="prose prose-lg mx-auto max-w-3xl">
            <p className="lead">
              Last updated: January 2026
            </p>
            
            <p>
              This Cookie Policy explains how Pathways Within uses cookies and similar technologies 
              on our website. By using our website, you consent to the use of cookies as described 
              in this policy.
            </p>

            <h2>What are cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device when you visit a website. 
              They help websites remember your preferences, understand how you use the site, and 
              provide personalized experiences.
            </p>

            <h2>How we use cookies</h2>
            <p>We use cookies in the following ways:</p>

            <h3>Necessary cookies (always active)</h3>
            <p>
              These cookies are essential for the website to function properly. They enable basic 
              features like page navigation and access to secure areas. The website cannot function 
              properly without these cookies.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Cookie name</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>pathways-consent</td>
                  <td>Stores your cookie consent preferences</td>
                  <td>1 year</td>
                </tr>
              </tbody>
            </table>

            <h3>Preference cookies (optional)</h3>
            <p>
              These cookies allow the website to remember choices you make and provide enhanced, 
              personalized features. They are only set with your consent.
            </p>

            <h3>Analytics cookies (optional)</h3>
            <p>
              These cookies help us understand how visitors interact with our website by collecting 
              and reporting information anonymously. They are only set with your consent.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Cookie name</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>_ga</td>
                  <td>Google Analytics: Distinguishes users</td>
                  <td>2 years</td>
                </tr>
                <tr>
                  <td>_gid</td>
                  <td>Google Analytics: Distinguishes users</td>
                  <td>24 hours</td>
                </tr>
              </tbody>
            </table>

            <h3>Marketing cookies (optional)</h3>
            <p>
              These cookies track visitors across websites to enable personalized advertising. 
              They are only set with your explicit consent.
            </p>

            <h2>Managing cookies</h2>
            <p>You have several options for managing cookies:</p>
            <ul>
              <li>
                <strong>Cookie consent banner:</strong> When you first visit our website, you can 
                choose which categories of cookies to accept or reject.
              </li>
              <li>
                <strong>Cookie settings:</strong> You can change your preferences at any time by 
                clicking the "Cookie Settings" button at the bottom of any page.
              </li>
              <li>
                <strong>Browser settings:</strong> Most web browsers allow you to control cookies 
                through their settings. You can set your browser to block cookies or alert you when 
                cookies are being sent.
              </li>
            </ul>

            <h2>Global Privacy Control</h2>
            <p>
              We honor the Global Privacy Control (GPC) signal. If your browser sends a GPC signal, 
              we will treat this as a request to opt out of non-essential cookies and tracking.
            </p>

            <h2>Third party cookies</h2>
            <p>
              Some cookies on our website are set by third party services. We use services from:
            </p>
            <ul>
              <li>Google Analytics (analytics)</li>
              <li>Google Fonts (functionality)</li>
            </ul>
            <p>
              These third parties have their own privacy policies governing how they use information 
              collected through cookies.
            </p>

            <h2>Updates to this policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices 
              or for other operational, legal, or regulatory reasons. Please check this page 
              periodically for updates.
            </p>

            <h2>Contact us</h2>
            <p>
              If you have questions about our use of cookies, please contact us:
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
