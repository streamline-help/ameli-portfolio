/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F9F6F2',
        ink: '#111111',
        'ink-2': '#444444',
        hairline: '#E6E0DC',
        accent: '#7A1E1E',
        accentSecondary: '#B32E2E',
        'accent-ink': '#FFFFFF',
        accentHover: '#B32E2E',
        whiteText: '#FAFAFA',
        muted: '#F6F7F8',
        dark: '#1B1B1B',
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