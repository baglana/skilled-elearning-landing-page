/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-bg": "#FFF",
        "color-text-primary": "#83869A",
        "color-text-secondary": "#13183F",
        "color-text-white": "#FFF",
        "color-text-gray": "#83869A",
        "color-text-pink": "#F74780",
        "color-text-hover-pink": "#FFA7C3",
        "color-black": "#13183F",
      },
      screens: {
        'md': '48em',
        // => @media (min-width: 768px) { ... }
  
        'lg': '90em',
        // => @media (min-width: 1440px) { ... }
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
    },
  },
  plugins: [],
}

