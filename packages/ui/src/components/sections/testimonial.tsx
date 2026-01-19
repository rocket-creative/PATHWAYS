'use client'

import { useScrollAnimation } from '../../lib/use-scroll-animation'

/**
 * Testimonial Section - Navy background with scroll animation
 */
export function TestimonialSection() {
  const { ref, isVisible } = useScrollAnimation()
  
  return (
    <section className="bg-hero-gradient-radial">
      <div ref={ref} className="container-site section-lg">
        <div 
          className="mx-auto max-w-4xl text-center"
          style={{ 
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)'
          }}
        >
          <div 
            className="mb-6 text-[120px] leading-none text-white/10 lg:text-[180px]"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            &ldquo;
          </div>
          
          <blockquote className="-mt-16 lg:-mt-24">
            <p 
              className="text-xl leading-relaxed text-white md:text-2xl lg:text-3xl" 
              style={{ fontFamily: 'var(--font-clarendon), Georgia, serif', lineHeight: 1.5 }}
            >
              You should always make your decision based on the feeling.
              Pathways helped me reconnect with mine.
            </p>
          </blockquote>
          
          <div className="mx-auto mt-10 h-px w-16 bg-white/30" />
          
          <cite 
            className="mt-6 block text-sm not-italic uppercase tracking-widest text-white/50"
            style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif' }}
          >
            — Former client, Long Island NY
          </cite>
        </div>
      </div>
    </section>
  )
}
