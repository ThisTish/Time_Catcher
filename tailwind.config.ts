import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	daisyui: {
		themes:["retro", "coffee"]
	},
	theme: {
		extend: {
			colors:{
				"light": "#f1f1f1"
			}
			
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/typography"),
		require("daisyui")
	],
}

export default config;
