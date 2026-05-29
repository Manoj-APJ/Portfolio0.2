/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FCFBF7', // SaaS warm off-white background
        bgGradientEnd: '#F5F3E9', // SaaS gradient end
        surface: '#FFFFFF', // Clean white card surfaces
        dark: '#121214', // Sleek off-black/zinc-900 text
        primary: '#2B228B', // Deep violet-purple matching Get Started button
        secondary: '#FFC800', // Bright yellow matching Observability tab
        accent: '#10B981', // Clean success green matching FREE tooltip
        borderLight: '#E4E4E7', // Zinc-200 for clean subtle borders
      },
      borderWidth: {
        '3': '3px',
        '1.5': '1.5px',
      },
      boxShadow: {
        'neo': '0 4px 20px -2px rgba(43, 34, 139, 0.08), 0 2px 8px -1px rgba(0, 0, 0, 0.04)', // Smooth soft shadow
        'neo-sm': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'neo-lg': '0 10px 30px -3px rgba(43, 34, 139, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        'neo': '16px', // Modern smooth corners
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
