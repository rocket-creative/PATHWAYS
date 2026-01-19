import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Heart, Users, Shield, Sparkles } from 'lucide-react'
import { PageHero, JsonLd, createOrganizationSchema, createBreadcrumbSchema } from '@pathways/ui'

export const metadata: Metadata = {
  title: 'About us',
  description: 'Learn about Pathways Within, a Wisdom and Wellness Collaborative offering integrated therapy and wellness services on Long Island since 2018.',
  openGraph: {
    title: 'About Pathways Within | Wisdom and Wellness Collaborative',
    description: 'We take a 360 degree approach to healing, looking at both your mental and physical well being.',
  },
}

const siteUrl = process.env.NEXT_PUBLIC_MAIN_URL || 'http://localhost:3000'

export default function AboutPage() {
  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ], siteUrl)

  return (
    <main>
      <JsonLd data={[createOrganizationSchema(siteUrl), breadcrumbs]} />
      
      <PageHero
        eyebrow="About us"
        headline="Wisdom and Wellness Collaborative"
        subheadline="Where healing honors the whole person"
        body="Since 2018, Pathways Within has offered integrated therapy and wellness services across Long Island. We believe true healing addresses mind, body, and spirit together."
        site="main"
      />

      {/* Our Story */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow mb-4">Our story</p>
              <h2 className="mb-6">A different approach to care</h2>
              <div className="divider mb-8" />
              <div className="space-y-6 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                <p>
                  Pathways Within was founded on a simple belief: healing is most effective when it addresses 
                  the whole person. Too often, mental health care and physical wellness exist in separate silos, 
                  leaving people to navigate fragmented systems on their own.
                </p>
                <p>
                  We created a collaborative environment where licensed therapists and certified wellness 
                  practitioners work together. When you come to us, you enter through one door and receive 
                  care tailored to your unique needs.
                </p>
                <p>
                  Our logo, the labyrinth, represents this philosophy. Like the ancient symbol, there is one 
                  path with many routes. Whatever brings you here, we meet you where you are and create a 
                  journey that honors your whole self.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="img-placeholder aspect-[4/5]" aria-label="Team photo placeholder" />
              <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-[rgb(var(--color-green))] lg:h-48 lg:w-48" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* 360 Approach */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site section">
          <div className="mb-12 text-center">
            <p className="eyebrow mb-4">Our approach</p>
            <h2 className="mb-6">A 360 degree approach to healing</h2>
            <p className="mx-auto max-w-2xl text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              We look at both your mental and physical well being. During your intake, we explore what 
              brings you in, how it affects your sleep, stress, energy, and relationships.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Heart, title: 'Whole person care', desc: 'We address mind, body, and spirit together.' },
              { icon: Users, title: 'Collaborative team', desc: 'Therapists and wellness providers work as one.' },
              { icon: Shield, title: 'Evidence based', desc: 'We use proven, research backed approaches.' },
              { icon: Sparkles, title: 'Personalized path', desc: 'Your journey is tailored to your needs.' },
            ].map((item) => (
              <div key={item.title} className="rounded-lg bg-white p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10">
                  <item.icon className="h-5 w-5 text-[rgb(var(--color-green))]" aria-hidden="true" />
                </div>
                <h3 className="mb-2" style={{ fontWeight: 500 }}>{item.title}</h3>
                <p className="text-sm text-[rgb(var(--color-text-light))]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-4">Our values</p>
              <h2 className="mb-6">What guides us</h2>
              <div className="divider mb-8" />
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                These principles inform every interaction, every treatment plan, and every decision we make.
              </p>
            </div>
            
            <div className="space-y-8 lg:col-span-6 lg:col-start-7">
              {[
                { title: 'Compassion first', desc: 'We meet you where you are, without judgment. Your experiences are valid, and your healing is possible.' },
                { title: 'Collaboration always', desc: 'Your care team works together, sharing insights to provide comprehensive support.' },
                { title: 'Evidence informed', desc: 'We use approaches backed by research while honoring the art of healing.' },
                { title: 'Accessibility matters', desc: 'We accept most insurance plans and offer sliding scale options because everyone deserves care.' },
              ].map((value) => (
                <div key={value.title} className="border-l-2 border-[rgb(var(--color-green))] pl-6">
                  <h3 className="mb-2" style={{ fontWeight: 500 }}>{value.title}</h3>
                  <p className="text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site section text-center">
          <h2 className="mb-6 text-white">Ready to begin your journey?</h2>
          <p className="mx-auto mb-10 max-w-xl text-white/70" style={{ lineHeight: 1.8 }}>
            Whether you are seeking therapy, wellness services, or both, we are here to help you find your path.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/team" className="btn-pill btn-pill-white">
              <span className="btn-text">Meet our team</span>
              <span className="btn-arrow"><ArrowRight aria-hidden="true" /></span>
            </Link>
            <Link href="/contact" className="btn-pill btn-pill-outline">
              <span className="btn-text">Get in touch</span>
              <span className="btn-arrow"><ArrowRight aria-hidden="true" /></span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
