'use client'

import { Quote } from 'lucide-react'

interface TestimonialSectionProps {
  quote: string
  author: string
  role?: string
}

export function TestimonialSection({
  quote = "Pathways Within helped me find balance in my life. The combination of therapy and wellness services was exactly what I needed.",
  author = "Sarah M.",
  role = "Client since 2022"
}: TestimonialSectionProps) {
  return (
    <section className="bg-hero-gradient">
      <div className="container-site section">
        <div className="animate-on-scroll mx-auto max-w-3xl text-center">
          <Quote className="mx-auto mb-8 h-12 w-12 text-white/30" />
          
          <blockquote 
            className="mb-8 text-2xl text-white lg:text-3xl"
            style={{ lineHeight: 1.4 }}
          >
            "{quote}"
          </blockquote>
          
          <div className="mb-2 h-px w-16 mx-auto bg-white/30" />
          
          <cite className="not-italic">
            <span className="block text-lg text-white">{author}</span>
            {role && (
              <span className="block text-sm text-white/60">{role}</span>
            )}
          </cite>
        </div>
      </div>
    </section>
  )
}
