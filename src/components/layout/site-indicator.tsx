'use client'

import { usePathname } from 'next/navigation'

/**
 * Site Indicator - Shows which domain a page will belong to in production
 * 
 * This helps the client understand the multi-domain architecture:
 * - pathwayswithin.com (main marketing site)
 * - wisdom.pathwayswithin.com (therapy services)
 * - wellness.pathwayswithin.com (wellness services)
 * - crm.pathwayswithin.com (internal staff dashboard)
 * 
 * Remove this component before going live, or set NEXT_PUBLIC_HIDE_SITE_INDICATOR=true
 */
export function SiteIndicator() {
  const pathname = usePathname()
  
  // Hide in production if env var is set
  if (process.env.NEXT_PUBLIC_HIDE_SITE_INDICATOR === 'true') {
    return null
  }

  // Determine which domain this page belongs to
  let site: { name: string; domain: string; color: string }
  
  if (pathname.startsWith('/wisdom')) {
    site = {
      name: 'WISDOM (Therapy)',
      domain: 'wisdom.pathwayswithin.com',
      color: 'bg-blue-600',
    }
  } else if (pathname.startsWith('/wellness')) {
    site = {
      name: 'WELLNESS',
      domain: 'wellness.pathwayswithin.com', 
      color: 'bg-green-600',
    }
  } else if (pathname.startsWith('/crm')) {
    site = {
      name: 'CRM (Internal)',
      domain: 'crm.pathwayswithin.com',
      color: 'bg-purple-600',
    }
  } else {
    site = {
      name: 'MAIN SITE',
      domain: 'pathwayswithin.com',
      color: 'bg-gray-800',
    }
  }

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${site.color} text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium`}>
      <div className="text-xs opacity-75 uppercase tracking-wide">Domain Preview</div>
      <div className="font-bold">{site.name}</div>
      <div className="text-xs opacity-90">{site.domain}</div>
    </div>
  )
}
