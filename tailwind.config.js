/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF6EF',
        ink: '#111111',
        accent: '#C23A2B',
        muted: '#8D8D8D',
        hairline: '#E8E2D8',
        /* Legacy aliases for backward compatibility */
        bg: '#FAF6EF',
        'muted-ink': '#8D8D8D',
        line: '#E8E2D8',
        surface: '#FFFFFF',
        dark: '#1A1A1A',
        whiteText: '#F5F5F5',
      },
      fontFamily: {
        display: ['Polaroid Script', 'serif'],
        alt: ['Aesthetic Moment', 'serif'],
        sans: ['Helvetica Neue', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      transitionTimingFunction: {
        'refined': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'in-view': 'inView 0.26s ease-out forwards',
      },
      keyframes: {
        inView: {
          '0%': {
            opacity: '0',
            transform: 'translateY(32px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};