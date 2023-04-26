/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      'mm': {'max': '479px'},
      // => @media (max-width: 479px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "primary": "var(--primary)",
        "lightPrimary": "var(--lightPrimary)",
        "secondary": "var(--secondary)",
        "lightSecondary": "var(--lightSecondary)",
        "mediumSecondary":"var(--mediumSecondary)",
        "lightDarkSecondary": "var(--lightDarkSecondary)",
        "darkSecondary": "var(--darkSecondary)",
        "background":"var(--background)",
        "black":"var(--black)"
      },
      minHeight: {
        "60": "60rem",
      },
      maxHeight:{
        "48": "48rem",
      },
      maxWidth: {
        "100max": "120rem",
        "15rem": "15rem",
        "25rem":"25rem",
        "50rem": "50rem",
        "60rem":"60rem"
      },
      boxShadow: {
        "shadowBlack":"rgba(black, 0.25)"
      },
      fontFamily: {
        "Inter": 'Inter'
      },
      flexGrow: {
        "2": '2'
      },
      width: {
        "30rem":"30rem"
      },
    },
  },
  plugins: [],
}
