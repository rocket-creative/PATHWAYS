import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
// Placeholder images used

export const metadata: Metadata = {
  title: 'Couples Therapy on Long Island | Pathways Within',
  description: 'Strengthen your relationship with couples therapy at Pathways Within. Our Gottman-trained therapists help partners improve communication and resolve conflicts.',
}

const faqs = [
  { q: 'Do both partners need to attend every session?', a: 'While most sessions involve both partners, individual sessions can sometimes be beneficial. Your therapist will recommend what works best for your situation.' },
  { q: 'What if my partner is reluctant to attend?', a: 'It\'s common for one partner to be hesitant. We can start with whoever is willing and work on building engagement. Many reluctant partners become more involved once they see the benefits.' },
  { q: 'How long does couples therapy typically last?', a: 'The duration varies based on your goals and challenges. Some couples see improvement in a few months, while others benefit from longer-term work.' },
  { q: 'What is the Gottman Method?', a: 'The Gottman Method is an evidence-based approach to couples therapy that focuses on building friendship, managing conflict, and creating shared meaning in relationships.' },
]

const relatedServices = [
  { name: 'Individual Therapy', href: '/services/therapy/individual-therapy' },
  { name: 'Trauma Therapy', href: '/services/therapy/trauma-therapy' },
  { name: 'EMDR Therapy', href: '/services/therapy/emdr-therapy' },
]

export default function CouplesTherapyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Therapy Services"
        headline="Couples therapy"
        subheadline="Strengthen your connection"
        body="Strengthen your connection with your partner through improved communication and conflict resolution. We specialize in the Gottman Method to help couples build stronger, healthier relationships."
        variant="offset"
        size="sm"
        image={{ alt: 'Couple in a supportive therapy session', placeholder: true }}
      />

      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>About</p>
              <h2 className="text-[rgb(var(--color-navy))]">Building stronger bonds</h2>
            </div>
            <div className="space-y-6">
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                Every relationship has its challenges. Whether you're navigating communication issues, trust concerns, life transitions, or simply want to strengthen your connection, couples therapy provides a safe space to work together.
              </p>
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                Our therapists help you understand each other's perspectives, develop healthier communication patterns, and build the relationship you both want.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[3/2] w-full overflow-hidden border-8 border-black">
              <Image
                src={"/placeholder-grey.svg"}
                alt="Couples therapy session at Pathways Within"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>Our Approach</p>
              <h2 className="mb-6 text-[rgb(var(--color-navy))]">The Gottman Method</h2>
              <p className="mb-6 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                We specialize in the Gottman Method, an evidence-based approach built on decades of research. This method focuses on:
              </p>
              <ul className="space-y-3 text-[rgb(var(--color-text-light))]">
                <li>• Building and maintaining friendship</li>
                <li>• Managing conflict constructively</li>
                <li>• Creating shared meaning and goals</li>
                <li>• Strengthening emotional connection</li>
                <li>• Supporting each other's dreams</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
        <div className="container-site py-20 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-[rgb(var(--color-navy))]">Frequently asked questions</h2>
            <div className="space-y-0">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group border-b border-[rgb(var(--border))]/50">
                  <summary className="flex cursor-pointer items-center justify-between py-6">
                    <span className="pr-8 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{faq.q}</span>
                    <ChevronDown className="h-5 w-5 flex-shrink-0 text-[rgb(var(--color-green))] transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="pb-6 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <h2 className="mb-12 text-center text-[rgb(var(--color-navy))]">Related services</h2>
          <div className="mx-auto grid max-w-2xl gap-4 md:grid-cols-3">
            {relatedServices.map((service) => (
              <Link key={service.href} href={service.href} className="group rounded-lg border border-[rgb(var(--border))]/50 bg-white p-6 text-center transition-all hover:border-[rgb(var(--color-green))] hover:shadow-md">
                <span className="text-[rgb(var(--color-navy))] transition-colors group-hover:text-[rgb(var(--color-green))]" style={{ fontWeight: 500 }}>{service.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site py-20 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-white">Ready to strengthen your relationship?</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>Contact us to schedule your first couples therapy session.</p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact" className="btn-pill btn-pill-white"><span className="btn-text">Contact us</span><span className="btn-arrow"><ArrowRight /></span></Link>
              <a href="tel:+16313713825" className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}>Or call (631) 371-3825</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
