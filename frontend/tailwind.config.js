/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#7F9CF5',  // Light Blue
          DEFAULT: '#1E40AF', // Indigo-800
          dark: '#1E3A8A',    // Indigo-900
        },
        secondary: {
          light: '#FDE68A',  // Light Amber
          DEFAULT: '#F59E0B', // Amber-500
          dark: '#D97706',    // Amber-600
        },
        accent: {
          light: '#FCA5A5',  // Light Red
          DEFAULT: '#EF4444', // Red-500
          dark: '#B91C1C',    // Red-700
        },
      },
    },
  },
  plugins: [],
}

