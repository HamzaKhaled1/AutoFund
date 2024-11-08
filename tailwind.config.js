/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
         Heading: ['Playwrite GB S', 'sans-serif'],
         Home:['Lato', 'sans-serif'],
         Arabic:['Tajawal', 'sans-serif'],
         Custom :['Custom', 'sans-serif'],
      },
     
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

