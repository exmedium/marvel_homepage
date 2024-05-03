import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
			borderRadius: {
				"3xl": "3rem",
			},
			colors: {
				"marvel-red": "#ED1D24",
				"marvel-hover": "#870005",
				"slate-800": "#1F2937",
				"indigo-500": "#667EEA",
				"dark-grey": "#131313",
			},
			fontFamily: {
				sans: ["Roboto", "sans-serif"],
				Rozha: ["Rozha One", "cursive"],
			},
			fontSize: {
				"2xs": ".625rem",
				"3xs": ".5rem",
				"hero-title": "7rem",
			},
			screens: {
				"2xl": "1536px",
			},
    },
  },
  plugins: [],
};
export default config;
