/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        stratos: ["stratos, sans-serif"],
        plexSans: ["IBM Plex Sans", "sans-serif"],
      },
      colors: {
        violet: "#440063",
        black: "#2e3333",
        green: "#00ccbc",
      },
      fontSize: {
        // textClampLg: "clamp(23px, 4vw, 40px)",
      },
    },
  },
  plugins: [],
};
