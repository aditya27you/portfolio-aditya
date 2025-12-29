import daisyui from "daisyui";

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
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#3B82F6",
          secondary: "#60A5FA",
          accent: "#93C5FD",
          neutral: "#1F2937",
          "base-100": "#F0F4F8",
          "base-200": "#E1E8F0",
          "base-300": "#D1DBE5",
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