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
        },
        "timeline-to-l": {
          from: { transform: "translateX(120%) translateY(3rem)" },
          to: { transform: "translateX(0%)" },
        },
        "timeline-to-r": {
          from: { transform: "translateX(-120%) translateY(3rem)" },
          to: { transform: "translateX(0%)" },
        },
        "card-line": {
          from: { height: "0", opacity: "0" },
          to: { height: "20vh", opacity: "1"},
        },
        "card-line-reverse": {
          to: { height: "0", opacity: "0"},
          from: { height: "20vh", opacity: "1"},
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        typing: "typing 4s steps(40, end), blink-caret 1s step-end infinite",
        "scroll-watcher": "scroll-watcher linear",
        "timeline-to-l": "timeline-to-l 0.8s ease-in-out",
        "timeline-to-r": "timeline-to-r 0.8s ease-in-out",
        "card-line": "card-line 0.6s ease-out",
        "card-line-reverse": "card-line-reverse 0.6s ease-out",
      },
      backgroundImage: {
        oskm: "url('../../public/images/oskm.jpg')",
        flywheel: "url('../../public/images/flywheel.jpg')",
        "pemira-1": "url('../../public/images/pemira-1.png')",
        "pemira-2": "url('../../public/images/pemira-2.png')",
        prd: "url('../../public/images/prd.jpg')",
        krai: "url('../../public/images/krai.jpg')",
        moka: "url('../../public/images/moka.jpg')",
        js: "url('../../public/images/js.png')",
        pingpong: "url('../../public/images/pingpong.png')",
        game: "url('../../public/images/game.png')",
        music: "url('../../public/images/music.png')",
        react: "url('../../public/images/react.png')",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config