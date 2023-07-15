/*const { addImplicitTags } = require("next/dist/server/lib/patch-fetch");*/
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        skill: '#F7F7FB',
        yellow: {
          '50': '#fbffe7',
          '100': '#f4ffc1',
          '200': '#eeff86',
          '300': '#ecff41',
          '400': '#f2ff0d',
          '500': '#ffff00',
          '600': '#d1bf00',
          '700': '#a68b02',
          '800': '#896c0a',
          '900': '#74580f',
          '950': '#443004',
        },
      },
      FontFamily: {
        sans: ["Source Sans Pro", "ui-sans-serif", "system-ui"],
        mono: ["IBM Plex Mono", "ui-monospace"],
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities}) {
      const utilities = {
        ".bg-hero": {
          "background-image" : "url(/hero.png)",
          "bakcground-size" : "cover",
          "background-position" : "bottom",
          "background-repeat" : "no-repeat",
        },
        ".shadow-skill": {
          "box-shadow": "0px 15px 30px rgba(0, 0, 0, 0.1)"
        },
      };

      addUtilities(utilities);
    }) 
  ],
}

