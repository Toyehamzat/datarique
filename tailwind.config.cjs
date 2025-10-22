/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ['Geist', 'Inter', 'system-ui']
      },
      colors: {
        'datarique-orange': '#E9790D',
        'datarique-navy': '#002247'
      }
    }
  },
  plugins: []
};
