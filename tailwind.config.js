/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { leaf:'#78BE3F', brown:'#5A2D1C', cream:'#F7F4ED', sand:'#E9E1D3', ink:'#252525' },
    fontFamily: { heading:['Manrope','sans-serif'], body:['DM Sans','sans-serif'] },
    boxShadow: { soft:'0 18px 55px rgba(55,35,24,.10)' }
  }}, plugins: []
}
