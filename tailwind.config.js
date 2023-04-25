/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
      maxWidth: {
        "100max": "120rem",
        "15rem": "15rem"
      },
      boxShadow: {
        "shadowBlack":"rgba(black, 0.25)"
      },
      fontFamily: {
        "Inter": 'Inter'
      }
    },
  },
  plugins: [],
}
