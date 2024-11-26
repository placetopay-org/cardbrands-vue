/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
    "node_modules/@placetopay/spartan-vue/dist/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('@placetopay/spartan-vue/plugin')({
    primary: {
      100: '214 240 228',
      300: '139 213 180',
      600: '66 184 131'
    }
  })]
}

