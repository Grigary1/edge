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
        moveBorder: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '50%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      'neon-pink': {
          '0%': { boxShadow: '0 0 10px 2px #ff1493, 0 0 20px 5px #ff1493', transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(100%, 0)' },
          '50%': { transform: 'translate(100%, 100%)' },
          '75%': { transform: 'translate(0, 100%)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      animation: {
        typewriter: 'typewriter 3s steps(30) forwards',
        glow: 'glow 1.5s infinite alternate',
        border: 'moveBorder 2s infinite linear',
        'neon-pink': 'neon-pink 3s linear infinite',
      },
      animationDelay: {
        '1s': '1s',
        '2s': '2s',
        '3s': '3s',
      },
    },
  },
  plugins: [],
}
