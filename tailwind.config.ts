import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "card-layout": "url('/images/layout.png')",
        "card-texture": "url('/images/texture-box.png')",
        "magic": "url('/images/magic.png')",
        "power": "url('/images/power.png')",
        "fire": "url('/images/fire.png')",
        "card-header": "url('/images/card-header.png')",
      },
      fontFamily: {
        sans: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
        'exocet-heavy': "var(--font-exocet-heavy)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: Function; }) {
      const newUtilities = {
        '.text-stroke-paint': {
          '-webkit-text-stroke': '6px #000',
          'paint-order': 'stroke fill',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
};
export default config;
