/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        neon: '0 0 10px 3px rgba(128, 0, 255, 0.8)',
      },
    },
  },
  plugins: [],
}
