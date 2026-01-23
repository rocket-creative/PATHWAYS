'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
          <h1>Something went wrong</h1>
          <p>We encountered an error. Please try again.</p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              background: '#01153D',
              color: 'white',
              border: 'none',
              borderRadius: '9999px',
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
