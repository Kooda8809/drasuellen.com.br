/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9C5E33', // Terracota rico
          hover: '#854D27',
          dark: '#6E3D1D',
        },
        accent: {
          DEFAULT: '#FCE794', // Amarelo Manteiga
          hover: '#FAD966',
        },
        espresso: {
          DEFAULT: '#3E2312', // Café Escuro
          light: '#59361E',
        },
        cream: {
          DEFAULT: '#F5F2ED', // Off-white / Creme
          dark: '#EBE5DB',
        },
      },
      fontFamily: {
        // Fonte principal para títulos e destaques editoriais (Playfair Display + fallbacks)
        playfair: ['"Playfair Display"', '"Bodoni Moda"', '"Cormorant Garamond"', 'serif'],
        // Fonte secundária para corpo e textos funcionais (Plus Jakarta Sans + Inter + Montserrat)
        montserrat: ['"Plus Jakarta Sans"', 'Inter', 'Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '0.12em',
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}
