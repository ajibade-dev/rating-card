/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "orange":"hsl(25, 97%, 53%)",
        "light-grey":"hsl(217, 12%, 63%)",
        "dark-blue":"hsl(213, 19%, 18%)",
        "very-dark-blue":"hsl(216, 12%, 8%)"
      }
    },
  },
  plugins: [],
};
