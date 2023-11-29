/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: ['light', 'dark'],
    darkTheme: 'dark',
    logs: true
  }
}

