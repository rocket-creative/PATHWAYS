/**
 * Sources & Citations Component
 * Displays authoritative sources for E-E-A-T compliance
 */

import { ExternalLink, BookOpen } from 'lucide-react'

interface Source {
  /** Title of the source */
  title: string
  /** Organization or author */
  organization: string
  /** URL to the source */
  url: string
  /** Year of publication */
  year?: string
}

interface SourcesCitationsProps {
  sources: Source[]
  title?: string
}

export function SourcesCitations({ 
  sources, 
  title = 'Sources and references' 
}: SourcesCitationsProps) {
  if (sources.length === 0) return null

  return (
    <aside className="rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--color-cream))] p-6">
      <div className="mb-4 flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-[rgb(var(--color-green))]" aria-hidden="true" />
        <h3 className="text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{title}</h3>
      </div>
      <ol className="space-y-3">
        {sources.map((source, index) => (
          <li key={index} className="text-sm">
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-start gap-2 text-[rgb(var(--color-text-light))] hover:text-[rgb(var(--color-green))]"
            >
              <span className="flex-shrink-0 text-[rgb(var(--color-green))]">{index + 1}.</span>
              <span>
                <span className="text-[rgb(var(--color-navy))] group-hover:underline">{source.title}</span>
                {' '}
                <span className="text-[rgb(var(--color-text-light))]">
                  {source.organization}
                  {source.year && ` (${source.year})`}
                </span>
              </span>
              <ExternalLink className="mt-0.5 h-3 w-3 flex-shrink-0 opacity-50" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ol>
    </aside>
  )
}

/**
 * Common authoritative sources for mental health content
 */
export const AUTHORITATIVE_SOURCES = {
  apa: {
    title: 'American Psychological Association',
    organization: 'APA',
    url: 'https://www.apa.org',
  },
  nimh: {
    title: 'National Institute of Mental Health',
    organization: 'NIMH',
    url: 'https://www.nimh.nih.gov',
  },
  samhsa: {
    title: 'Substance Abuse and Mental Health Services Administration',
    organization: 'SAMHSA',
    url: 'https://www.samhsa.gov',
  },
  nami: {
    title: 'National Alliance on Mental Illness',
    organization: 'NAMI',
    url: 'https://www.nami.org',
  },
  mayoClinic: {
    title: 'Mayo Clinic',
    organization: 'Mayo Clinic',
    url: 'https://www.mayoclinic.org',
  },
  cdc: {
    title: 'Centers for Disease Control and Prevention',
    organization: 'CDC',
    url: 'https://www.cdc.gov',
  },
}
