/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
        overlayColor: "rgba(0,0,0,.5)",
      },
      fontSize: {
        // textClampLg: "clamp(23px, 4vw, 40px)",
      },
      boxShadow: {
        full: "0 0 10px 9999999px rgb(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
