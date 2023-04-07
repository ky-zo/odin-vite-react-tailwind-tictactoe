/** @type {import('tailwindcss').Config} */
export default {
  purge: {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    enabled: process.env.NODE_ENV === "production",
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
