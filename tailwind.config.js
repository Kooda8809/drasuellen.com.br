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
          DEFAULT: '#9C5E33', // Terracota escuro rico
          hover: '#854D27',
        },
        accent: {
          DEFAULT: '#FCE794', // Amarelo Manteiga
          hover: '#FAD966',
        },
        espresso: {
          DEFAULT: '#3E2312', // Café Escuro
          light: '#5A3821',
        },
        cream: {
          DEFAULT: '#F5F2ED', // Creme / Off-white
          dark: '#EBE5DC',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
