module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        // x: "12.5rem",
        x: "12.5rem",
      },
      maxWidth: {
        51.5: "75rem",
      },
      maxHeight: {
        785: "44rem",
      },
      maxWidth: {
        s: "300px",
      },
      colors: {
        orange: {
          999: "#FFC59E",
        },
        brown: {
          500: "#59443F",
        },
      },
      height: {
        400: "480px",
      },
    },
  },
  plugins: [],
};
