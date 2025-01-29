import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['var(--font-playfair)', 'serif'],
        'press-start': ['var(--font-press-start)', 'monospace'],
        'caveat': ['var(--font-caveat)', 'cursive'],
        'quicksand': ['var(--font-quicksand)', 'sans-serif'],
        'dancing-script': ['var(--font-dancing-script)', 'cursive'],
        'orbitron': ['var(--font-orbitron)', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark", "retro", "forest", "aqua", "valentine", "cyberpunk"],
  },
};

export default config;
