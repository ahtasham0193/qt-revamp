/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        '1/5': '20%',
      },
      colors: {
        'primary-color': '#FF6C0E',
        'light-primary-color': 'rgba(255, 108, 14,.08)',
        'light-gray-color': '#F1F1F1',
      },
    },

    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '800px',
        xl: '800px',
        '2xl': '1400px',
      },
    },
  },
  plugins: [],
}