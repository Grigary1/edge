/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["MyCustomFont", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        prata: ["Prata", "serif"],
        openSans: ["Open Sans", "sans-serif"],
        sofadi: ["Sofadi One", "cursive"],
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      animation: {
        typewriter: 'typewriter 3s steps(30) forwards',
        glow: 'glow 1.5s infinite alternate',
      },
    },
  },
  plugins: [],
}