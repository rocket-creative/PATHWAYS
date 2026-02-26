'use client'

import Link from 'next/link'
import { ArrowRight, FileText, BookOpen, ExternalLink } from 'lucide-react'

interface Resource {
  title: string
  description: string
  type: 'download' | 'article' | 'external'
  href: string
}

interface ResourcesSectionProps {
  title?: string
  resources?: Resource[]
}

const defaultResources: Resource[] = [
  {
    title: 'Understanding the Intake Process',
    description: 'A guide to what to expect when you first connect with our team.',
    type: 'download',
    href: '/client-intake',
  },
  {
    title: 'The 360° Approach to Holistic Healing',
    description: 'Learn how Pathways Within integrates mental health and wellness care.',
    type: 'article',
    href: '/about',
  },
  {
    title: 'Finding the Right Provider',
    description: 'How to navigate our provider directory and match with the right clinician.',
    type: 'article',
    href: '/providers',
  },
  {
    title: 'Insurance & Coverage Information',
    description: 'Common questions about what our services cover and how to verify benefits.',
    type: 'article',
    href: '/faq',
  },
]

const typeIcon = {
  download: FileText,
  article: BookOpen,
  external: ExternalLink,
}

const typeLabel = {
  download: 'Form',
  article: 'Article',
  external: 'External Link',
}

export function ResourcesSection({
  title = 'Resources',
  resources = defaultResources,
}: ResourcesSectionProps) {
  return (
    <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
      <div className="container-site section">
        <div className="mb-12">
          <p className="eyebrow mb-4">Resources</p>
          <h2 className="text-[rgb(var(--color-navy))]">{title}</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => {
            const Icon = typeIcon[resource.type]
            const isExternal = resource.type === 'external'
            const Component = isExternal ? 'a' : Link

            return (
              <Component
                key={resource.title}
                href={resource.href}
                {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex flex-col bg-white p-6 transition-all hover:shadow-md"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-[rgb(var(--color-green))]/10">
                    <Icon className="h-5 w-5 text-[rgb(var(--color-green))]" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[rgb(var(--color-text-light))]">
                    {typeLabel[resource.type]}
                  </span>
                </div>

                <h3 className="mb-2 text-base font-semibold text-[rgb(var(--color-navy))]" style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif' }}>
                  {resource.title}
                </h3>

                <p className="mb-4 flex-1 text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
                  {resource.description}
                </p>

                <span className="inline-flex items-center gap-1 text-sm font-medium text-[rgb(var(--color-green))]">
                  Read more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Component>
            )
          })}
        </div>
      </div>
    </section>
  )
}
