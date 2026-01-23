import Link from 'next/link'
import { ArrowRight, Leaf, Sparkles, Heart, Sun } from 'lucide-react'
import { PageHero, CTASection, TestimonialSection, InsuranceSection } from '@pathways/ui'

const wellnessServices = [
  { name: 'Massage Therapy', slug: 'massage', description: 'Swedish, deep tissue, sports, hot stone, and pregnancy massage.' },
  { name: 'Acupuncture', slug: 'acupuncture', description: 'Traditional Chinese medicine to relieve pain and promote well being.' },
  { name: 'Energy Work', slug: 'energy-work', description: 'Reiki and Integrative Energy Therapy for healing and balance.' },
  { name: 'Pain Management', slug: 'pain-management', description: 'Comprehensive pain relief through trigger point injections.' },
  { name: 'IV Vitamin Infusion', slug: 'iv-vitamin-infusion', description: 'Essential nutrients delivered directly for energy and immunity.' },
  { name: 'Injectables', slug: 'injectables', description: 'Botox, dermal fillers, and Kybella by medical professionals.' },
  { name: 'Skincare & Facials', slug: 'skincare', description: 'European facials to advanced treatments like dermaplaning.' },
  { name: 'HydraFacial', slug: 'hydrafacial', description: 'Revolutionary skin rejuvenation with immediate results.' },
  { name: 'KeraLase Hair Restoration', slug: 'keralase-hair-restoration', description: 'Advanced laser technology for hair rejuvenation.' },
  { name: 'Laser Hair Removal', slug: 'laser-hair-removal', description: 'Permanent hair reduction using advanced laser technology.' },
  { name: 'PRP Vampire Facial', slug: 'prp-vampire-facial', description: 'Harness your own blood to stimulate collagen.' },
  { name: 'Cryotherapy', slug: 'cryotherapy', description: 'Reduce inflammation and boost wellness through cold therapy.' },
  { name: 'Laser Lipo', slug: 'laser-lipo', description: 'Non invasive body sculpting with no downtime.' },
  { name: 'Teeth Whitening', slug: 'teeth-whitening', description: 'Brighten your smile by three to twelve shades.' },
  { name: 'Permanent Makeup', slug: 'permanent-makeup', description: 'Microblading, lip liner, and permanent cosmetic services.' },
]

export default function WellnessHomePage() {
  return (
    <>
      <PageHero
        eyebrow="Wellness Services"
        headline="Body care & beauty"
        body="Our wellness team brings expertise in massage, skincare, and restorative treatments. We help you look and feel your best from the outside in."
        image="/hero-images/freepik__professional-studio-photograph-of-subject-descript__19259.jpeg"
        site="wellness"
      />

      {/* Services Grid */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="mb-12 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-4">Our Services</p>
              <h2>Wellness services for every need</h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-7">
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                From relaxation to rejuvenation, our range of services helps you feel balanced, beautiful, and energized.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {wellnessServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-lg border border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))] p-6 transition-all hover:border-[rgb(var(--color-green))] hover:bg-white hover:shadow-md"
              >
                <h3 className="mb-2 text-[rgb(var(--color-navy))] transition-colors group-hover:text-[rgb(var(--color-green))]" style={{ fontWeight: 500 }}>
                  {service.name}
                </h3>
                <p className="mb-4 text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.6 }}>
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-[rgb(var(--color-green))]">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="mb-12 text-center">
            <p className="eyebrow mb-4">Why Pathways Within</p>
            <h2>Professional wellness care</h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Leaf, title: 'Holistic approach', desc: 'We treat the whole person, not just symptoms.' },
              { icon: Sparkles, title: 'Advanced technology', desc: 'State of the art equipment and techniques.' },
              { icon: Heart, title: 'Certified practitioners', desc: 'Licensed professionals with extensive training.' },
              { icon: Sun, title: 'Relaxing environment', desc: 'A calm, welcoming space for your care.' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(var(--color-green))]">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <h4 className="mb-2">{item.title}</h4>
                <p className="text-sm text-[rgb(var(--color-text-light))]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InsuranceSection />
      <TestimonialSection />
      <CTASection site="wellness" />
    </>
  )
}
