/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        primary: '#3B82F6',
        secondary: '#06B6D4',
        accent: '#14B8A6',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#3B82F6",
          secondary: "#06B6D4",
          accent: "#14B8A6",
          neutral: "#1F2937",
          "base-100": "#FFFFFF",
          "base-200": "#F3F4F6",
        },
        dark: {
          primary: "#60A5FA",
          secondary: "#22D3EE",
          accent: "#2DD4BF",
          neutral: "#F9FAFB",
          "base-100": "#111827",
          "base-200": "#1F2937",
        },
      },
    ],
  },
}
