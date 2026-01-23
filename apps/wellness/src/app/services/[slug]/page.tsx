import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowLeft, Check, Clock, MapPin } from 'lucide-react'
import { PageHero, JsonLd, createBreadcrumbSchema, createServiceSchema } from '@pathways/ui'
import { getHeroImageByIndex } from '@/lib/hero-images'

const siteUrl = process.env.NEXT_PUBLIC_WELLNESS_URL || 'http://localhost:3002'
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
  'massage': {
    name: 'Massage therapy',
    headline: 'Relaxation and relief',
    description: 'Our licensed massage therapists offer a variety of techniques including Swedish, deep tissue, sports, hot stone, and pregnancy massage to help you relax, relieve pain, and restore balance.',
    metaDescription: 'Professional massage therapy at Pathways Within. Swedish, deep tissue, sports, hot stone, and pregnancy massage on Long Island.',
    benefits: [
      'Reduce muscle tension and pain',
      'Improve circulation and flexibility',
      'Decrease stress and anxiety',
      'Promote better sleep',
      'Support injury recovery',
    ],
    whatToExpect: [
      'Brief intake to discuss your needs',
      'Private treatment room',
      'Customized pressure and technique',
      'Post massage hydration and rest',
      'Home care recommendations',
    ],
    duration: '60 to 90 minutes',
    relatedServices: ['acupuncture', 'cryotherapy', 'pain-management'],
  },
  'acupuncture': {
    name: 'Acupuncture',
    headline: 'Traditional Chinese medicine',
    description: 'Acupuncture uses thin needles at specific points to stimulate healing, reduce pain, and restore balance. Our licensed acupuncturists combine traditional wisdom with modern understanding.',
    metaDescription: 'Acupuncture services at Pathways Within. Traditional Chinese medicine for pain relief, stress reduction, and wellness on Long Island.',
    benefits: [
      'Effective pain management',
      'Stress and anxiety reduction',
      'Improved sleep quality',
      'Enhanced immune function',
      'Support for digestive health',
    ],
    whatToExpect: [
      'Health history and tongue/pulse diagnosis',
      'Discussion of treatment goals',
      'Gentle needle insertion',
      'Rest during treatment (20 to 40 minutes)',
      'Lifestyle recommendations',
    ],
    duration: '60 minutes',
    relatedServices: ['massage', 'energy-work', 'pain-management'],
  },
  'energy-work': {
    name: 'Energy work',
    headline: 'Healing and balance',
    description: 'Our energy healing services include Reiki and Integrative Energy Therapy to promote relaxation, reduce stress, and support emotional healing through gentle, non invasive techniques.',
    metaDescription: 'Energy healing at Pathways Within. Reiki and Integrative Energy Therapy for relaxation, stress relief, and emotional healing.',
    benefits: [
      'Deep relaxation and stress relief',
      'Emotional release and healing',
      'Enhanced sense of well being',
      'Support during life transitions',
      'Complement to other therapies',
    ],
    whatToExpect: [
      'Discussion of your intentions',
      'Fully clothed on massage table',
      'Gentle or no touch techniques',
      'Deep relaxation during session',
      'Integration time after treatment',
    ],
    duration: '60 minutes',
    relatedServices: ['massage', 'acupuncture'],
  },
  'pain-management': {
    name: 'Pain management',
    headline: 'Relief without surgery',
    description: 'Our pain management services include trigger point injections and other non surgical interventions to help you find relief from chronic pain and improve your quality of life.',
    metaDescription: 'Pain management at Pathways Within. Non surgical pain relief including trigger point injections on Long Island.',
    benefits: [
      'Targeted pain relief',
      'Reduced inflammation',
      'Improved mobility',
      'Faster recovery',
      'Alternative to surgery',
    ],
    whatToExpect: [
      'Comprehensive pain assessment',
      'Discussion of treatment options',
      'Minimally invasive procedures',
      'Follow up care plan',
      'Coordination with your team',
    ],
    duration: '30 to 60 minutes',
    relatedServices: ['massage', 'acupuncture', 'cryotherapy'],
  },
  'iv-vitamin-infusion': {
    name: 'IV vitamin infusion',
    headline: 'Nutrients delivered directly',
    description: 'IV vitamin therapy delivers essential nutrients directly to your bloodstream for maximum absorption. Boost energy, support immunity, and enhance recovery with customized formulations.',
    metaDescription: 'IV vitamin infusion therapy at Pathways Within. Boost energy, immunity, and wellness with direct nutrient delivery.',
    benefits: [
      '100% nutrient absorption',
      'Immediate energy boost',
      'Enhanced immune function',
      'Faster recovery from illness',
      'Hydration and wellness support',
    ],
    whatToExpect: [
      'Health screening',
      'Selection of appropriate formula',
      'Comfortable IV placement',
      'Relaxation during infusion',
      'Post treatment monitoring',
    ],
    duration: '30 to 60 minutes',
    relatedServices: ['cryotherapy'],
  },
  'injectables': {
    name: 'Injectables',
    headline: 'Expert aesthetic treatments',
    description: 'Our trained medical professionals provide Botox, dermal fillers, and Kybella treatments to help you achieve natural looking results that enhance your appearance.',
    metaDescription: 'Botox, fillers, and Kybella at Pathways Within. Expert injectable treatments by medical professionals on Long Island.',
    benefits: [
      'Reduce fine lines and wrinkles',
      'Restore facial volume',
      'Contour and define features',
      'Reduce chin fullness',
      'Natural looking results',
    ],
    whatToExpect: [
      'Consultation and facial assessment',
      'Discussion of goals and options',
      'Precise, comfortable injections',
      'Immediate visible results',
      'Follow up care instructions',
    ],
    duration: '15 to 45 minutes',
    relatedServices: ['skincare', 'hydrafacial', 'prp-vampire-facial'],
  },
  'skincare': {
    name: 'Skincare and facials',
    headline: 'Reveal your glow',
    description: 'From European facials to advanced treatments like dermaplaning and microneedling, our medical aestheticians provide customized skincare to address your unique concerns.',
    metaDescription: 'Professional skincare and facials at Pathways Within. Customized treatments including dermaplaning and microneedling.',
    benefits: [
      'Deep cleansing and extraction',
      'Improved skin texture',
      'Reduced signs of aging',
      'Even skin tone',
      'Personalized skincare routine',
    ],
    whatToExpect: [
      'Skin analysis and consultation',
      'Customized treatment selection',
      'Relaxing facial experience',
      'Product recommendations',
      'Follow up care plan',
    ],
    duration: '60 to 90 minutes',
    relatedServices: ['hydrafacial', 'prp-vampire-facial', 'injectables'],
  },
  'hydrafacial': {
    name: 'HydraFacial',
    headline: 'Revolutionary skin rejuvenation',
    description: 'HydraFacial is a multi step treatment that cleanses, exfoliates, extracts, and hydrates your skin with patented technology. Experience immediate, visible results with no downtime.',
    metaDescription: 'HydraFacial treatments at Pathways Within. Advanced skin rejuvenation with immediate results and no downtime.',
    benefits: [
      'Deep cleansing and exfoliation',
      'Painless extractions',
      'Intense hydration',
      'Immediate visible results',
      'No downtime',
    ],
    whatToExpect: [
      'Skin assessment',
      'Cleansing and exfoliation step',
      'Gentle extraction',
      'Hydrating serum infusion',
      'LED light therapy (optional)',
    ],
    duration: '45 to 60 minutes',
    relatedServices: ['skincare', 'prp-vampire-facial', 'injectables'],
  },
  'keralase-hair-restoration': {
    name: 'KeraLase hair restoration',
    headline: 'Advanced hair rejuvenation',
    description: 'KeraLase combines laser technology with growth factors to stimulate hair growth and improve hair density. A non invasive solution for thinning hair.',
    metaDescription: 'KeraLase hair restoration at Pathways Within. Advanced laser treatment for hair regrowth and density improvement.',
    benefits: [
      'Stimulates hair follicles',
      'Improves hair density',
      'Non invasive treatment',
      'No downtime',
      'Natural looking results',
    ],
    whatToExpect: [
      'Hair and scalp assessment',
      'Laser treatment session',
      'Serum application',
      'Series of treatments recommended',
      'Progress monitoring',
    ],
    duration: '30 to 45 minutes',
    relatedServices: ['prp-vampire-facial'],
  },
  'laser-hair-removal': {
    name: 'Laser hair removal',
    headline: 'Permanent hair reduction',
    description: 'Our advanced laser technology provides permanent hair reduction for smooth, hair free skin. Safe and effective for various skin types.',
    metaDescription: 'Laser hair removal at Pathways Within. Permanent hair reduction with advanced technology on Long Island.',
    benefits: [
      'Long lasting hair reduction',
      'Smooth, hair free skin',
      'Faster than shaving or waxing',
      'Reduces ingrown hairs',
      'Safe for various skin types',
    ],
    whatToExpect: [
      'Consultation and skin assessment',
      'Test patch if needed',
      'Protective eyewear',
      'Quick treatment sessions',
      'Post care instructions',
    ],
    duration: '15 to 60 minutes depending on area',
    relatedServices: ['skincare'],
  },
  'prp-vampire-facial': {
    name: 'PRP Vampire Facial',
    headline: 'Your own healing power',
    description: 'The PRP Vampire Facial uses your own platelet rich plasma to stimulate collagen production and skin rejuvenation. Natural, powerful results.',
    metaDescription: 'PRP Vampire Facial at Pathways Within. Natural skin rejuvenation using your own platelet rich plasma.',
    benefits: [
      'Natural collagen stimulation',
      'Improved skin texture',
      'Reduced fine lines',
      'More even skin tone',
      'Uses your own healing factors',
    ],
    whatToExpect: [
      'Blood draw for plasma extraction',
      'Microneedling or injection',
      'PRP application',
      'Mild redness post treatment',
      'Results develop over weeks',
    ],
    duration: '60 to 90 minutes',
    relatedServices: ['hydrafacial', 'skincare', 'injectables'],
  },
  'cryotherapy': {
    name: 'Cryotherapy',
    headline: 'Cold therapy wellness',
    description: 'Cryotherapy exposes your body to extremely cold temperatures to reduce inflammation, boost recovery, and enhance overall wellness.',
    metaDescription: 'Cryotherapy at Pathways Within. Cold therapy for inflammation, recovery, and wellness on Long Island.',
    benefits: [
      'Reduced inflammation',
      'Faster muscle recovery',
      'Increased energy',
      'Enhanced mood',
      'Potential metabolic boost',
    ],
    whatToExpect: [
      'Brief health screening',
      'Protective gear provided',
      'Short session in cryo chamber',
      'Immediate warming period',
      'Energized feeling post treatment',
    ],
    duration: '3 to 5 minutes in chamber',
    relatedServices: ['massage', 'iv-vitamin-infusion'],
  },
  'laser-lipo': {
    name: 'Laser lipo',
    headline: 'Non invasive body sculpting',
    description: 'Laser lipo uses advanced technology to target and reduce fat cells without surgery. Achieve body contouring results with no downtime.',
    metaDescription: 'Laser lipo body sculpting at Pathways Within. Non invasive fat reduction and contouring on Long Island.',
    benefits: [
      'Targeted fat reduction',
      'No surgery or anesthesia',
      'No downtime',
      'Gradual, natural looking results',
      'Body contouring',
    ],
    whatToExpect: [
      'Body assessment and goals',
      'Treatment area marking',
      'Comfortable laser application',
      'Multiple sessions recommended',
      'Healthy lifestyle support',
    ],
    duration: '30 to 45 minutes',
    relatedServices: ['cryotherapy'],
  },
  'teeth-whitening': {
    name: 'Teeth whitening',
    headline: 'Brighten your smile',
    description: 'Professional teeth whitening can brighten your smile by three to twelve shades in a single visit. Safe, effective, and immediately visible results.',
    metaDescription: 'Professional teeth whitening at Pathways Within. Brighten your smile by up to 12 shades in one visit.',
    benefits: [
      'Dramatic whitening results',
      'Quick treatment time',
      'Safe professional grade products',
      'Long lasting results',
      'Boost in confidence',
    ],
    whatToExpect: [
      'Initial shade assessment',
      'Gum protection application',
      'Whitening gel application',
      'Light activation',
      'Aftercare instructions',
    ],
    duration: '60 to 90 minutes',
    relatedServices: ['skincare'],
  },
  'permanent-makeup': {
    name: 'Permanent makeup',
    headline: 'Wake up beautiful',
    description: 'Our permanent makeup services include microblading, lip liner, eyeliner, and other cosmetic enhancements. Wake up looking put together every day.',
    metaDescription: 'Permanent makeup at Pathways Within. Microblading, lip liner, eyeliner, and cosmetic tattooing on Long Island.',
    benefits: [
      'Time saving morning routine',
      'Natural looking enhancement',
      'Long lasting results',
      'Waterproof and smudge proof',
      'Customized to your features',
    ],
    whatToExpect: [
      'Consultation and design',
      'Color matching',
      'Numbing for comfort',
      'Precise application',
      'Touch up appointment included',
    ],
    duration: '2 to 3 hours',
    relatedServices: ['skincare', 'injectables'],
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
      title: `${service.name} | Pathways Within Wellness`,
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
    category: 'wellness',
  }, mainUrl)

  return (
    <main>
      <JsonLd data={[breadcrumbs, serviceSchema]} />
      
      <PageHero
        eyebrow="Wellness services"
        headline={service.name}
        subheadline={service.headline}
        body={service.description}
        site="wellness"
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
                  src={"/placeholder-grey.svg"}
                  alt={`${service.name} treatment`}
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
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
        <div className="container-site section">
          <div className="mb-12">
            <p className="eyebrow mb-4">What to expect</p>
            <h2>Your experience with us</h2>
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
                <p className="text-sm text-[rgb(var(--color-text-light))]">Treatment time</p>
                <p className="text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{service.duration}</p>
              </div>
            </div>
            <div className="hidden h-8 w-px bg-[rgb(var(--border))] sm:block" />
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-[rgb(var(--color-green))]" aria-hidden="true" />
              <div>
                <p className="text-sm text-[rgb(var(--color-text-light))]">Available at</p>
                <p className="text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>Select locations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {service.relatedServices.length > 0 && (
        <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
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
          <h2 className="mb-6 text-white">Ready to book?</h2>
          <p className="mx-auto mb-10 max-w-xl text-white/70" style={{ lineHeight: 1.8 }}>
            Schedule your {service.name.toLowerCase()} appointment today and experience the difference.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href={`${mainUrl}/contact`} className="btn-pill btn-pill-white">
              <span className="btn-text">Book appointment</span>
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
