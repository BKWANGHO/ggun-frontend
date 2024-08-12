import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /translate-x-./, 
    },
  ],
  theme: {
    extend: {
      backgroundImage: {
          benner_img : "url('/imgs/stockBenner.jpg')",
          search_img : "url('/imgs/searchIcon.png')",
          coin_img : "url('/bg/bg_coin.png')",
          ggun_logo : "url('/imgs/ggun_logo.png')",
      },
      colors: {
        pebble: {
          100: "#433E49",
          200: "#928490",
          300: "#DBC1AD",
          400: "#F3E8EB",
          500: "#872642",
          600: "#9F4298",
          // 700 : @apply 'from-pebble-200 to-pebble-400 via-pebble-300',
          //amver-400  rgb(251 191 36)
          //blue-400 rgb(96 165 250) #60a5fa.
          //red- 400 rgb(248 113 113) #F87171
        },
        ggun:{
          100: "#f87171",
          200: "#fcd34d",
          300: "#c084fc",
          400: "#60a5fa",
          500: "#4ade80",
        }
      },
      keyframes: {
        slider: {
          "0%": { transform: "translateX(40px)" },
          "100%": { transform: "translateX(-1100px)" },
         },
        },
       animation: {
        slider: "slider 25s linear infinite",
       }
    },
  },
  plugins: [],
};
export default config;
