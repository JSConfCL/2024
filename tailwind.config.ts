import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-text': 'gradient-text 5s ease infinite',
        'gradient-svg': 'gradient-svg 5s ease infinite'
      },
      backgroundImage: {
        "noise": "url('/images/background/noise.webp')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "jsconf-yellow": "#F0E040",
        "jsconf-black": "#1E2019",
        "jsconf-red": "#F45B69",
        "mountain-primary": "#9A8025",
        "mountain-secondary": "#EDE060"
      },
      fontFamily: {
        koulen: ['var(--font-koulen)'],
        barlow: ['var(--font-barlow)'],
        inconsolata: ['var(--font-inconsolata)']
      },
      keyframes: {
        "gradient-text": {
          "0%, 100%": {
              "background-size":"200% 200%",
              "background-position": "left center"
          },
          "50%": {
              "background-size":"200% 200%",
              "background-position": "right center"
          }
        },
        "gradient-svg": {
          "0%, 100%": {
            "color": "var(--tw-gradient-from)"
          },
          "50%": {
            "color": "var(--tw-gradient-to)"
          }
        }
      }
    }
  },
  plugins: [],
};
export default config;
