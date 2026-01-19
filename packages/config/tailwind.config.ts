import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '3rem',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      // Pathways Within Brand Colors
      colors: {
        // Primary colors
        white: '#FDFDFD',
        cream: '#FAF9F7',
        linen: '#F5F4F2',
        placeholder: '#DCDAD7',
        breezy: '#86A8E1',
        'bright-days': '#0095E6',
        navy: '#01153D',
        'navy-light': '#142858',
        sage: '#72A23B',
        'sage-dark': '#5A822D',
        // Semantic tokens
        background: {
          DEFAULT: '#FDFDFD',
          secondary: '#EBEAEB',
        },
        foreground: {
          DEFAULT: '#01153D',
          secondary: '#86A8E1',
        },
        primary: {
          DEFAULT: '#0095E6',
          foreground: '#FDFDFD',
        },
        secondary: {
          DEFAULT: '#01153D',
          foreground: '#FDFDFD',
        },
        accent: {
          DEFAULT: '#72A23B',
          foreground: '#FDFDFD',
        },
        muted: {
          DEFAULT: '#EBEAEB',
          foreground: '#01153D',
        },
        border: {
          DEFAULT: '#EBEAEB',
        },
        // Feedback colors
        success: '#72A23B',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#0095E6',
        ring: '#0095E6',
      },
      // Typography
      fontFamily: {
        sans: ['var(--font-raleway)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-clarendon)', 'Georgia', 'serif'],
        display: ['var(--font-forefarmers)', 'cursive'],
      },
      fontSize: {
        'h1': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['clamp(1.5rem, 4vw, 2.5rem)', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['clamp(1.25rem, 3vw, 1.75rem)', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['clamp(1rem, 2vw, 1.125rem)', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
      },
      maxWidth: {
        'site': '1440px',
        'content': '65ch',
      },
      borderRadius: {
        'none': '0',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1)',
      },
      transitionDuration: {
        'micro': '300ms',
        'reveal': '600ms',
        'page': '1000ms',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-up': 'fade-up 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
