/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        '7.5': '1.875rem',
      },
      colors: {
        'white': "#ffffff",
        'black': "#000000",
        'primary': "#27C499",
        'secondary': "#FF7C57",
        'ternary': "#FAFFFE",
        'warn': "#FFB802",
        'wait': "#5900CC",
        'dark': "#211B3D",
        'light': "#5B5575",
      },
    },
  },
  plugins: [],
};
