'use client'

import { useState } from 'react'
import { Phone, MessageCircle, X, ArrowRight } from 'lucide-react'

/**
 * Crisis Banner - Green background with working button colors
 */
export function CrisisBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[rgb(var(--color-green))] px-5 py-2.5 text-sm text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
        aria-label="Show crisis resources"
        style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 600 }}
      >
        <Phone className="h-4 w-4" />
        988
      </button>
    )
  }

  return (
    <div className="relative z-50 bg-[rgb(var(--color-green))]">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-1 flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <span 
            className="text-sm text-white"
            style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
          >
            Need immediate support?
          </span>
          
          <div className="flex flex-wrap items-center gap-3">
            {/* 988 Lifeline */}
            <a
              href="tel:988"
              className="btn-pill btn-pill-white inline-flex items-center gap-2 py-1.5 pl-4 pr-1.5 text-sm"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 600 }}
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="btn-text">988 Crisis Lifeline</span>
              <span className="btn-arrow !h-5 !w-5">
                <ArrowRight className="!h-3 !w-3" />
              </span>
            </a>
            
            {/* Text option */}
            <a
              href="sms:741741&body=HOME"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-transparent px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-[rgb(var(--color-green))]"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>Text HOME to 741741</span>
            </a>
            
            {/* Veterans */}
            <span 
              className="hidden text-sm text-white/80 sm:inline"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif' }}
            >
              Veterans: Press 1
            </span>
          </div>
        </div>
        
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/20 hover:text-white"
          aria-label="Dismiss crisis banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
