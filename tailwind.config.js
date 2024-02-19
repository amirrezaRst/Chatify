/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px"
      },
      fontFamily: {
        "sans-light": ["var(--sans-light)"],
        "sans-regular": ["var(--sans-regular)"],
        "sans-medium": ["var(--sans-medium)"],
        "sans-bold": ["var(--sans-bold)"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: ".55rem",
          sm: ".65rem",
          lg: "1rem",
          xl: "1.5rem",
          "2xl": "3rem",
          "3xl": "4.5rem",
        },
      },
      fontSize: {
        "super-xs": "0.815rem",
        "super-sm": "0.925rem",
        "2.5xl": "1.7rem",
        "4.5xl": "2.7rem",
        "5.5xl": "3.4rem",
        "6.5xl": "4.1rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem"
      }
    },
  },
  plugins: [],
};
