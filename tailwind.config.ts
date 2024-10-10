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
      }
    },
  },
  plugins: [],
};
export default config;
