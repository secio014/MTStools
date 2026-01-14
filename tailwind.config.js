/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mts: {
          gold: "#C5A065", // Sample gold from logo
          dark: "#1A1A1A",
          gray: "#2C2C2C",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // We'll need to import Inter
      },
    },
  },
  plugins: [],
};
