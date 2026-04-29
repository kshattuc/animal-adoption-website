module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 18px 50px rgba(15, 23, 42, 0.12)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        animalAdopt: {
          primary: "#047857",
          "primary-focus": "#065f46",
          "primary-content": "#ffffff",
          secondary: "#f59e0b",
          accent: "#06b6d4",
          neutral: "#1f2937",
          "base-100": "#f8fafc",
          "base-200": "#e2e8f0",
          "base-300": "#cbd5e1",
          info: "#0ea5e9",
          success: "#16a34a",
          warning: "#f59e0b",
          error: "#ef4444",
        },
      },
      "light",
      "dark",
    ],
  },
};
