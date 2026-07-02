/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C38B70', // Rose Peach Accent
          light: '#E5B7A1',
          dark: '#9E644A',
        },
        secondary: {
          DEFAULT: '#FFFFFF', // White canvas bg
          dark: '#16110E', // Espresso dark bg
        },
        accent: {
          DEFAULT: '#C38B70',
        },
        darkBg: {
          DEFAULT: '#16110E',
          card: '#221815',
        },
        peach: {
          bg: '#FFFFFF',
          dark: '#2D231E',
          accent: '#C38B70',
          'bg-dark': '#16110E',
          'dark-dark': '#FFFFFF',
          'accent-dark': '#E5A587',
          
          // Floating cards light mode background
          'card-ml': '#F9EAE1',
          'card-ds': '#EAECE1',
          'card-ai': '#EAE5EF',
          
          // Floating cards light mode icon color
          'icon-ml': '#D45F45',
          'icon-ds': '#6A7B5F',
          'icon-ai': '#8D6AA8',
          
          // Floating cards dark mode background
          'card-ml-dark': '#2A1E1A',
          'card-ds-dark': '#1F241E',
          'card-ai-dark': '#241E2A',
        }
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '24px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spin-reverse 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'spin-reverse': {
          'from': { transform: 'rotate(360deg)' },
          'to': { transform: 'rotate(0deg)' },
        }
      }
    },
  },
  plugins: [],
}
