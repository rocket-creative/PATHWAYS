import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Pathways brand colors
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
          800: '#213060',
          900: '#142850',
          950: '#01153D',
        },
        green: {
          DEFAULT: '#72A23B',
          50: '#F4F8EF',
          100: '#E4EED8',
          200: '#C9DDB1',
          300: '#AECC8A',
          400: '#93BB63',
          500: '#72A23B',
          600: '#5A822F',
          700: '#486828',
          800: '#3A5422',
          900: '#2E441C',
          950: '#1A2710',
        },
        cream: {
          DEFAULT: '#FAF9F7',
          50: '#FDFDFD',
          100: '#FAF9F7',
          200: '#F5F4F2',
          300: '#E6E4E0',
          400: '#DCDAD5',
        },
        linen: {
          DEFAULT: '#F5F4F2',
          50: '#FAFAF9',
          100: '#F5F4F2',
          200: '#ECEAE6',
          300: '#E0DDD8',
        },
        breezy: {
          DEFAULT: '#86A8E1',
          100: '#E8EFF9',
          200: '#C5D7F2',
          300: '#A3C0EB',
          400: '#86A8E1',
          500: '#6490D7',
        },
      },
      fontFamily: {
        sans: ['Raleway', 'system-ui', 'sans-serif'],
        serif: ['Clarendon', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
