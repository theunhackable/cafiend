import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xsm: '0.7rem',
        sm: '0.8rem',
        base: '1.375rem',
        xl: '1.5rem',
        '2xl': '2rem',
        '3xl': '3.5rem',
        '4xl': '4rem',
        '5xl': '4.5rem',
        '6xl': '6rem',

      },
      colors: {
        'primary' : '#FFF2E6',
        'black': '#000',
        'dark': '#010101',
        'white': '#FFF'
      },
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'inconsolata': ['Inconsolata', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
