/**
 * Medical Disclaimer Component
 * Required for YMYL/E-E-A-T compliance on healthcare pages
 */

interface MedicalDisclaimerProps {
  variant?: 'inline' | 'footer' | 'prominent'
}

export function MedicalDisclaimer({ variant = 'inline' }: MedicalDisclaimerProps) {
  const baseClass = 'text-[rgb(var(--color-text-light))]'
  
  if (variant === 'prominent') {
    return (
      <aside 
        className="rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--color-linen))] p-4"
        aria-label="Medical disclaimer"
      >
        <p className={`${baseClass} text-sm`} style={{ lineHeight: 1.6 }}>
          <strong className="text-[rgb(var(--color-navy))]">Important:</strong>{' '}
          The information provided on this website is for educational purposes only and is not 
          intended to be a substitute for professional medical advice, diagnosis, or treatment. 
          Always seek the advice of your physician, mental health provider, or other qualified 
          health provider with any questions you may have regarding a medical or mental health condition.
        </p>
      </aside>
    )
  }
  
  if (variant === 'footer') {
    return (
      <p className={`${baseClass} text-xs`} style={{ lineHeight: 1.5 }}>
        This content is for informational purposes only and does not constitute medical advice. 
        If you are experiencing a mental health crisis, please call 988 or go to your nearest emergency room.
      </p>
    )
  }
  
  // inline variant
  return (
    <p className={`${baseClass} text-sm italic`} style={{ lineHeight: 1.5 }}>
      This information is for educational purposes and is not a substitute for professional 
      medical or mental health treatment.
    </p>
  )
}
