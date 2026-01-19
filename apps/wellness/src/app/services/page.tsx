import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Leaf } from 'lucide-react'
import { PageHero } from '@pathways/ui'

export const metadata: Metadata = {
  title: 'Wellness Services',
  description: 'Explore our comprehensive wellness services including massage, acupuncture, skincare, IV therapy, and more.',
}

const wellnessServices = [
  { name: 'Massage Therapy', slug: 'massage', description: 'Swedish, deep tissue, sports, hot stone, and pregnancy massage for relaxation and pain relief.' },
  { name: 'Acupuncture', slug: 'acupuncture', description: 'Traditional Chinese medicine to relieve pain, reduce stress, and promote well being.' },
  { name: 'Energy Work', slug: 'energy-work', description: 'Reiki and Integrative Energy Therapy for healing, balance, and emotional release.' },
  { name: 'Pain Management', slug: 'pain-management', description: 'Comprehensive pain relief through trigger point injections and therapeutic techniques.' },
  { name: 'IV Vitamin Infusion', slug: 'iv-vitamin-infusion', description: 'Essential nutrients delivered directly to boost energy, immunity, and wellness.' },
  { name: 'Injectables', slug: 'injectables', description: 'Botox, dermal fillers, and Kybella administered by trained medical professionals.' },
  { name: 'Skincare & Facials', slug: 'skincare', description: 'From European facials to advanced treatments like dermaplaning and microneedling.' },
  { name: 'HydraFacial', slug: 'hydrafacial', description: 'Revolutionary skin rejuvenation with cleansing, exfoliation, and hydration.' },
  { name: 'KeraLase Hair Restoration', slug: 'keralase-hair-restoration', description: 'Advanced laser technology combined with growth factors for hair rejuvenation.' },
  { name: 'Laser Hair Removal', slug: 'laser-hair-removal', description: 'Permanent hair reduction using advanced laser technology for smooth skin.' },
  { name: 'PRP Vampire Facial', slug: 'prp-vampire-facial', description: 'Harness your own platelet rich plasma to stimulate collagen and rejuvenate skin.' },
  { name: 'Cryotherapy', slug: 'cryotherapy', description: 'Reduce inflammation, boost recovery, and enhance wellness through cold therapy.' },
  { name: 'Laser Lipo', slug: 'laser-lipo', description: 'Non invasive body sculpting technology for targeted fat reduction with no downtime.' },
  { name: 'Teeth Whitening', slug: 'teeth-whitening', description: 'Professional teeth whitening to brighten your smile by three to twelve shades.' },
  { name: 'Permanent Makeup', slug: 'permanent-makeup', description: 'Microblading, lip liner, eyeliner, and other permanent cosmetic enhancements.' },
]

export default function WellnessServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Wellness Services"
        headline="Treatments for body, beauty, and balance"
        body="Our certified wellness practitioners offer a comprehensive range of services to help you look and feel your best."
        site="wellness"
        layout="trio"
        imageClass="img-placeholder-split"
      />

      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-6 md:grid-cols-2">
            {wellnessServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex gap-4 rounded-lg border border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))] p-6 transition-all hover:border-[rgb(var(--color-green))] hover:bg-white hover:shadow-md"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10">
                  <Leaf className="h-5 w-5 text-[rgb(var(--color-green))]" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-[rgb(var(--color-navy))] transition-colors group-hover:text-[rgb(var(--color-green))]" style={{ fontWeight: 500 }}>
                    {service.name}
                  </h3>
                  <p className="mb-3 text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.6 }}>
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm text-[rgb(var(--color-green))]">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
