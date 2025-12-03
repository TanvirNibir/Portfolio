/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        dark: {
          50: '#1a1a1a',
          100: '#0f0f0f',
          200: '#1f1f1f',
          300: '#2a2a2a',
          400: '#3a3a3a',
        },
      },
      backgroundColor: {
        'dark-50': '#1a1a1a',
        'dark-100': '#0f0f0f',
        'dark-200': '#1f1f1f',
        'dark-300': '#2a2a2a',
        'dark-400': '#3a3a3a',
      },
      borderColor: {
        'dark-50': '#1a1a1a',
        'dark-100': '#0f0f0f',
        'dark-200': '#1f1f1f',
        'dark-300': '#2a2a2a',
        'dark-400': '#3a3a3a',
      },
      textColor: {
        'dark-50': '#1a1a1a',
        'dark-100': '#0f0f0f',
        'dark-200': '#1f1f1f',
        'dark-300': '#2a2a2a',
        'dark-400': '#3a3a3a',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

