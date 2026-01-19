import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Pathways brand colors - warm, editorial palette
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7cfc7',
          300: '#a3b0a3',
          400: '#7d8f7d',
          500: '#627362',
          600: '#4d5b4d',
          700: '#404a40',
          800: '#363d36',
          900: '#2f342f',
        },
        cream: {
          50: '#fefdfb',
          100: '#fcf9f3',
          200: '#f8f2e6',
          300: '#f2e8d5',
          400: '#e8d9bd',
          500: '#dcc9a3',
        },
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Clarendon', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
