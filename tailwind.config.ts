import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
	content: ["./src/**/*.{astro,js,ts,tsx,md,mdx}"],
	darkMode: "class",
	plugins: [typography],
	theme: {
		extend: {
			colors: {
				"text-default": "#000000",
			},
		},
	},
};

export default config;
