/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gradient-start': '#FF00FF',
        'gradient-end': '#00FFFF',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #FF00FF 0%, #00FFFF 100%)',
      },
    },
  },
  plugins: [],
}
