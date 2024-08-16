/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#23BE0A',
        customBlue: '#59C6D2',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

