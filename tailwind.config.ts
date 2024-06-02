import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // shadcn/ui
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        // shadcn/ui
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",

        // jsconf
        'gradient-text': 'gradient-text 5s ease infinite',
        'gradient-svg': 'gradient-svg 5s ease infinite'
      },
      backgroundImage: {
        "noise": "url('/images/background/noise.webp')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // shadcn/ui
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        // shadcn/ui
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // jsconf
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
        // shadcn/ui
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

        // jsconf
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config;