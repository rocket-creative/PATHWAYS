'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface Service {
  slug: string
  name: string
  description: string
  image?: string
}

interface ServicesGridProps {
  eyebrow?: string
  headline: string
  services: Service[]
  baseUrl: string
  viewAllText?: string
  viewAllHref?: string
}

export function ServicesGrid({
  eyebrow,
  headline,
  services,
  baseUrl,
  viewAllText = 'View all services',
  viewAllHref
}: ServicesGridProps) {
  return (
    <section className="bg-white">
      <div className="container-site section">
        {/* Header */}
        <div className="animate-on-scroll mb-12 text-center">
          {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
          <h2>{headline}</h2>
        </div>

        {/* Grid */}
        <div className="animate-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`${baseUrl}/${service.slug}`}
              className="group rounded-lg border border-[rgb(var(--border))] bg-white p-6 transition-all hover:border-[rgb(var(--color-green))] hover:shadow-lg"
            >
              {service.image && (
                <div className="relative mb-4 aspect-[16/9] w-full overflow-hidden rounded-md bg-[rgb(var(--color-placeholder))]">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              )}
              
              <h3 className="mb-2 text-lg font-medium text-[rgb(var(--color-navy))]">
                {service.name}
              </h3>
              
              <p className="mb-4 text-sm text-[rgb(var(--color-text-light))]">
                {service.description}
              </p>
              
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[rgb(var(--color-green))]">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        {/* View All */}
        {viewAllHref && (
          <div className="mt-12 text-center">
            <Link href={viewAllHref} className="btn-pill btn-pill-secondary">
              <span className="btn-text">{viewAllText}</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
