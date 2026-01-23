import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowLeft, Check, Clock, MapPin } from 'lucide-react'
import { PageHero, JsonLd, createBreadcrumbSchema, createServiceSchema } from '@pathways/ui'
import { getHeroImageByIndex } from '@/lib/hero-images'

const siteUrl = process.env.NEXT_PUBLIC_WISDOM_URL || 'http://localhost:3001'
const mainUrl = process.env.NEXT_PUBLIC_MAIN_URL || 'http://localhost:3000'

// Service data - in production this would come from a CMS or content files
const services: Record<string, {
  name: string
  headline: string
  description: string
  metaDescription: string
  benefits: string[]
  whatToExpect: string[]
  duration: string
  relatedServices: string[]
}> = {
  'individual-therapy': {
    name: 'Individual therapy',
    headline: 'Personal growth and healing',
    description: 'Individual therapy provides a safe, confidential space to explore your thoughts, feelings, and experiences with a licensed clinician. Together, we work on personal growth, mental health challenges, and life transitions.',
    metaDescription: 'Individual therapy services at Pathways Within. Work with a licensed therapist on personal growth, anxiety, depression, and life transitions.',
    benefits: [
      'Safe space to explore your thoughts and feelings',
      'Develop coping strategies for life challenges',
      'Improve self awareness and emotional regulation',
      'Work through past experiences at your own pace',
      'Receive personalized treatment tailored to your needs',
    ],
    whatToExpect: [
      'Initial 60 minute intake session to understand your needs',
      'Collaborative treatment planning with your therapist',
      'Weekly or biweekly sessions based on your goals',
      'Evidence based approaches tailored to you',
      'Ongoing progress evaluation and plan adjustments',
    ],
    duration: '60 minutes',
    relatedServices: ['trauma-therapy', 'emdr-therapy', 'somatic-therapy'],
  },
  'trauma-therapy': {
    name: 'Trauma therapy',
    headline: 'Healing from difficult experiences',
    description: 'Trauma therapy helps you process and heal from difficult experiences, whether recent or from the past. Our trauma informed clinicians use gentle, evidence based approaches to help you feel safe again.',
    metaDescription: 'Trauma therapy services at Pathways Within. Heal from PTSD, childhood trauma, and difficult experiences with compassionate, evidence based care.',
    benefits: [
      'Process traumatic memories in a safe environment',
      'Reduce symptoms of PTSD and anxiety',
      'Reclaim your sense of safety and control',
      'Develop healthy coping mechanisms',
      'Restore trust and connection in relationships',
    ],
    whatToExpect: [
      'Thorough intake to understand your experiences',
      'Paced approach that honors your readiness',
      'Multiple modalities including EMDR and somatic work',
      'Collaboration with your care team when appropriate',
      'Focus on building resilience and post traumatic growth',
    ],
    duration: '60 minutes',
    relatedServices: ['emdr-therapy', 'somatic-therapy', 'individual-therapy'],
  },
  'emdr-therapy': {
    name: 'EMDR therapy',
    headline: 'Eye Movement Desensitization and Reprocessing',
    description: 'EMDR is an evidence based therapy that helps your brain process traumatic memories. Using bilateral stimulation, EMDR can reduce the emotional charge of difficult experiences and help you move forward.',
    metaDescription: 'EMDR therapy at Pathways Within. Evidence based treatment for trauma, PTSD, anxiety, and phobias using Eye Movement Desensitization and Reprocessing.',
    benefits: [
      'Scientifically proven effective for trauma',
      'Often works faster than traditional talk therapy',
      'No need to describe trauma in detail',
      'Reduces intrusive memories and flashbacks',
      'Helps reframe negative beliefs about yourself',
    ],
    whatToExpect: [
      'Detailed history taking and treatment planning',
      'Learning about how EMDR works',
      'Identifying target memories for processing',
      'Guided bilateral stimulation sessions',
      'Integration of new, adaptive beliefs',
    ],
    duration: '60 to 90 minutes',
    relatedServices: ['trauma-therapy', 'individual-therapy', 'somatic-therapy'],
  },
  'couples-therapy': {
    name: 'Couples therapy',
    headline: 'Strengthening your connection',
    description: 'Couples therapy helps partners improve communication, resolve conflicts, and deepen their connection. Whether you are navigating a specific challenge or want to strengthen your relationship, we provide a supportive space.',
    metaDescription: 'Couples therapy at Pathways Within. Improve communication, resolve conflicts, and strengthen your relationship with expert guidance.',
    benefits: [
      'Improve communication patterns',
      'Learn healthy conflict resolution skills',
      'Rebuild trust and emotional intimacy',
      'Navigate life transitions together',
      'Strengthen your partnership foundation',
    ],
    whatToExpect: [
      'Joint and individual intake sessions',
      'Identification of relationship patterns',
      'Learning new communication skills',
      'Structured exercises between sessions',
      'Regular progress check ins',
    ],
    duration: '60 minutes',
    relatedServices: ['individual-therapy'],
  },
  'child-therapy': {
    name: 'Child therapy',
    headline: 'Supporting young minds',
    description: 'Child therapy provides specialized support for children navigating big feelings and challenging behaviors. Our therapists use play based and age appropriate techniques to help children express themselves.',
    metaDescription: 'Child therapy services at Pathways Within. Specialized support for children dealing with anxiety, behavioral challenges, and emotional difficulties.',
    benefits: [
      'Age appropriate therapeutic techniques',
      'Safe space for emotional expression',
      'Development of healthy coping skills',
      'Improved behavior and emotional regulation',
      'Parent guidance and involvement',
    ],
    whatToExpect: [
      'Parent consultation and intake',
      'Child friendly therapy environment',
      'Play based and creative approaches',
      'Regular parent updates and guidance',
      'Collaboration with schools when helpful',
    ],
    duration: '45 to 60 minutes',
    relatedServices: ['teen-therapy', 'individual-therapy'],
  },
  'teen-therapy': {
    name: 'Teen therapy',
    headline: 'Support for adolescents',
    description: 'Teen therapy addresses the unique pressures of adolescence, from academic stress to identity formation. Our therapists create a judgment free space where teens can explore their experiences.',
    metaDescription: 'Teen therapy at Pathways Within. Support for adolescents dealing with anxiety, depression, peer pressure, and identity issues.',
    benefits: [
      'Confidential space free from judgment',
      'Support for school and social pressures',
      'Identity and self esteem development',
      'Healthy coping strategies',
      'Family communication improvement',
    ],
    whatToExpect: [
      'Teen led intake with parent involvement',
      'Flexible approach based on teen preferences',
      'Confidentiality with safety limits explained',
      'Optional family sessions',
      'Support through transitions',
    ],
    duration: '60 minutes',
    relatedServices: ['child-therapy', 'individual-therapy'],
  },
  'somatic-therapy': {
    name: 'Somatic therapy',
    headline: 'Healing through the body',
    description: 'Somatic therapy addresses trauma and stress held in the body through mind body techniques. By tuning into physical sensations, you can release tension and restore nervous system balance.',
    metaDescription: 'Somatic therapy at Pathways Within. Address trauma and stress through mind body techniques that restore nervous system balance.',
    benefits: [
      'Release trauma stored in the body',
      'Improve mind body connection',
      'Regulate nervous system responses',
      'Reduce chronic tension and pain',
      'Develop body awareness and grounding skills',
    ],
    whatToExpect: [
      'Assessment of physical and emotional patterns',
      'Gentle body awareness exercises',
      'Breathing and grounding techniques',
      'Integration with talk therapy',
      'Homework practices for daily life',
    ],
    duration: '60 minutes',
    relatedServices: ['trauma-therapy', 'emdr-therapy', 'individual-therapy'],
  },
  'hypnotherapy': {
    name: 'Hypnotherapy',
    headline: 'Access your unconscious mind',
    description: 'Hypnotherapy uses guided relaxation to access the unconscious mind for healing and change. In this calm state, you can work on habits, fears, and beliefs that are difficult to address consciously.',
    metaDescription: 'Hypnotherapy at Pathways Within. Access your unconscious mind to address habits, fears, and limiting beliefs through guided relaxation.',
    benefits: [
      'Access deeper levels of the mind',
      'Change limiting beliefs and habits',
      'Reduce anxiety and phobias',
      'Improve sleep and relaxation',
      'Enhance motivation and focus',
    ],
    whatToExpect: [
      'Discussion of goals and concerns',
      'Education about hypnosis and what to expect',
      'Guided relaxation into hypnotic state',
      'Therapeutic suggestions tailored to goals',
      'Recording for home practice',
    ],
    duration: '60 to 90 minutes',
    relatedServices: ['individual-therapy', 'trauma-therapy'],
  },
  'veterans-first-responders': {
    name: 'Veterans and first responders',
    headline: 'Support for those who serve',
    description: 'We provide specialized therapy for veterans and first responders who face unique stressors. Our clinicians understand the culture and challenges of service and provide culturally competent care.',
    metaDescription: 'Therapy for veterans and first responders at Pathways Within. Culturally competent care for PTSD, trauma, and occupational stress.',
    benefits: [
      'Clinicians who understand service culture',
      'Specialized trauma treatment approaches',
      'Support for occupational stress',
      'Transition assistance for veterans',
      'Peer consultation when desired',
    ],
    whatToExpect: [
      'Confidential intake and assessment',
      'Evidence based trauma treatment',
      'Flexible scheduling for shift workers',
      'VA Community Care benefits accepted',
      'Coordination with other providers',
    ],
    duration: '60 minutes',
    relatedServices: ['trauma-therapy', 'emdr-therapy', 'individual-therapy'],
  },
  'weight-loss-surgery-support': {
    name: 'Weight loss surgery support',
    headline: 'Pre and post operative care',
    description: 'We provide psychological evaluation and support for individuals pursuing bariatric surgery. Our services include pre surgical assessment, ongoing therapy, and support through your transformation journey.',
    metaDescription: 'Weight loss surgery psychological support at Pathways Within. Pre operative evaluation and ongoing therapy for bariatric surgery patients.',
    benefits: [
      'Required pre surgical psychological evaluation',
      'Preparation for lifestyle changes',
      'Support through emotional transitions',
      'Body image and identity work',
      'Long term success strategies',
    ],
    whatToExpect: [
      'Comprehensive psychological evaluation',
      'Report for surgical team',
      'Optional ongoing therapy support',
      'Group support opportunities',
      'Coordination with medical team',
    ],
    duration: '90 minutes for evaluation',
    relatedServices: ['individual-therapy'],
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = services[slug]
  
  if (!service) return { title: 'Service not found' }
  
  return {
    title: service.name,
    description: service.metaDescription,
    openGraph: {
      title: `${service.name} | Pathways Within Wisdom`,
      description: service.metaDescription,
    },
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = services[slug]
  
  if (!service) notFound()

  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.name, url: `/services/${slug}` },
  ], siteUrl)

  const serviceSchema = createServiceSchema({
    name: service.name,
    description: service.metaDescription,
    url: `${siteUrl}/services/${slug}`,
    category: 'therapy',
  }, mainUrl)

  return (
    <main>
      <JsonLd data={[breadcrumbs, serviceSchema]} />
      
      <PageHero
        eyebrow="Therapy services"
        headline={service.name}
        subheadline={service.headline}
        body={service.description}
        site="wisdom"
      />

      {/* Benefits */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="eyebrow mb-4">Benefits</p>
              <h2 className="mb-8">How this service helps</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-[rgb(var(--color-green))]" aria-hidden="true" />
                    <span className="text-[rgb(var(--color-text-light))]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative aspect-[3/2] w-full max-w-2xl overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={getHeroImageByIndex(0)}
                  alt={`${service.name} session`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site section">
          <div className="mb-12">
            <p className="eyebrow mb-4">What to expect</p>
            <h2>Your journey with us</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.whatToExpect.map((step, index) => (
              <div key={step} className="rounded-lg bg-white p-6">
                <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10 text-sm text-[rgb(var(--color-green))]" style={{ fontWeight: 500 }}>
                  {index + 1}
                </span>
                <p className="text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Info */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section-sm">
          <div className="flex flex-col items-center justify-center gap-8 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-[rgb(var(--color-green))]" aria-hidden="true" />
              <div>
                <p className="text-sm text-[rgb(var(--color-text-light))]">Session length</p>
                <p className="text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{service.duration}</p>
              </div>
            </div>
            <div className="hidden h-8 w-px bg-[rgb(var(--border))] sm:block" />
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-[rgb(var(--color-green))]" aria-hidden="true" />
              <div>
                <p className="text-sm text-[rgb(var(--color-text-light))]">Available at</p>
                <p className="text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>All 5 locations + telehealth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {service.relatedServices.length > 0 && (
        <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
          <div className="container-site section">
            <h2 className="mb-8 text-center">Related services</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.relatedServices.map((relatedSlug) => {
                const related = services[relatedSlug]
                if (!related) return null
                return (
                  <Link
                    key={relatedSlug}
                    href={`/services/${relatedSlug}`}
                    className="group rounded-lg bg-white p-6 transition-all hover:shadow-md"
                  >
                    <h3 className="mb-2 text-[rgb(var(--color-navy))] transition-colors group-hover:text-[rgb(var(--color-green))]" style={{ fontWeight: 500 }}>
                      {related.name}
                    </h3>
                    <p className="mb-4 text-sm text-[rgb(var(--color-text-light))]">{related.headline}</p>
                    <span className="inline-flex items-center gap-2 text-sm text-[rgb(var(--color-green))]">
                      Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site section text-center">
          <h2 className="mb-6 text-white">Ready to get started?</h2>
          <p className="mx-auto mb-10 max-w-xl text-white/70" style={{ lineHeight: 1.8 }}>
            Schedule a consultation to learn more about {service.name.toLowerCase()} and whether it is right for you.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href={`${mainUrl}/contact`} className="btn-pill btn-pill-white">
              <span className="btn-text">Schedule consultation</span>
              <span className="btn-arrow"><ArrowRight aria-hidden="true" /></span>
            </a>
            <Link href="/services" className="btn-pill btn-pill-outline">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span className="btn-text">All services</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
