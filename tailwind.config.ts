import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
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
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        // Brand Colors
        white: '#FDFDFD',
        cream: '#FAF9F7',
        linen: {
          DEFAULT: '#F5F4F2',
          50: '#FAFAF9',
          100: '#F5F4F2',
          200: '#ECEAE6',
          300: '#E0DDD8',
        },
        placeholder: '#DCDAD7',
        breezy: {
          DEFAULT: '#86A8E1',
          100: '#E8EFF9',
          200: '#C5D7F2',
          300: '#A3C0EB',
          400: '#86A8E1',
          500: '#6490D7',
        },
        navy: {
          DEFAULT: '#01153D',
          50: '#E8EBF2',
          100: '#C5CCE0',
          200: '#9EAACB',
          300: '#7788B6',
          400: '#5A6FA6',
          500: '#3D5696',
          600: '#354B87',
          700: '#2B3D73',
          800: '#182952',
          900: '#0D1C3D',
          950: '#010A1F',
        },
        green: {
          DEFAULT: '#72A23B',
          50: '#F4F8EF',
          100: '#E4EED8',
          200: '#C9DDB1',
          300: '#AECC8A',
          400: '#8BBF52',
          500: '#72A23B',
          600: '#5E8A30',
          700: '#4A6E26',
          800: '#3A5422',
          900: '#2E441C',
          950: '#1A2710',
        },
        // Semantic colors
        background: {
          DEFAULT: '#FDFDFD',
          secondary: '#FAF9F7',
        },
        foreground: {
          DEFAULT: '#01153D',
          muted: '#5A6FA6',
        },
        primary: {
          DEFAULT: '#01153D',
          foreground: '#FDFDFD',
        },
        accent: {
          DEFAULT: '#72A23B',
          foreground: '#FDFDFD',
        },
        border: {
          DEFAULT: '#E6E4E1',
        },
      },
      fontFamily: {
        sans: ['var(--font-raleway)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-clarendon)', 'Georgia', 'serif'],
      },
      fontSize: {
        h1: ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.05', fontWeight: '400' }],
        h2: ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.15', fontWeight: '400' }],
        h3: ['clamp(1.375rem, 2.5vw, 1.75rem)', { lineHeight: '1.25', fontWeight: '600' }],
        h4: ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],
        body: ['1.0625rem', { lineHeight: '1.7', fontWeight: '400' }],
        small: ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      maxWidth: {
        site: '1440px',
        content: '65ch',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
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
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-up': 'fade-up 0.6s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
