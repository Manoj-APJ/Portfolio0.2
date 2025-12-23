/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#E0F2F1', // Mint/Teal pastel
        surface: '#FFF8E1', // Cream
        dark: '#18181B', // Zinc-900 for text/borders
        primary: '#FF8A80', // Pastel Red/Pink
        secondary: '#A7FFEB', // Pastel Green
        accent: '#FFD180', // Pastel Orange
      },
      borderWidth: {
        '3': '3px',
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px rgba(0,0,0,1)',
        'neo-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
        'neo-lg': '6px 6px 0px 0px rgba(0,0,0,1)',
      },
      borderRadius: {
        'neo': '12px',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
