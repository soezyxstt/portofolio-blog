import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "typing": {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "blink-caret": {
          from: { borderColor: "transparent" },
          "50%": { borderColor: "theme('colors.teal.500')" },
          to: { borderColor: "transparent" },
        },
        "scroll-watcher": {
          to: {scale: "1 1"}
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        typing: "typing 4s steps(40, end), blink-caret 1s step-end infinite",
        "scroll-watcher": "scroll-watcher linear",
      },
      backgroundImage: {
        oskm: "url('../../public/images/oskm.jpg')",
        flywheel: "url('../../public/images/flywheel.jpg')",
        "pemira-1": "url('../../public/images/pemira-1.png')",
        "pemira-2": "url('../../public/images/pemira-2.png')",
        prd: "url('../../public/images/prd.jpg')",
        krai: "url('../../public/images/krai.jpg')",
        moka: "url('../../public/images/moka.jpg')",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config