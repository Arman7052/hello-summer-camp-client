/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#ef5347",

          "secondary": "#e896c7",

          "accent": "#7f54af",

          "neutral": "#2b2f36",

          "base-100": "#eff3f6",

          "info": "#8bc5f8",

          "success": "#0e5d2c",

          "warning": "#e8ad17",

          "error": "#e9585f",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

