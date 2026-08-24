import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
	content: ["./src/**/*.{astro,js,ts,tsx,md,mdx}"],
	plugins: [typography],
	theme: {
		extend: {
			colors: {
				"tony": {
					50: "#0B0C10",
					100: "#1F2833",
					200: "#C5C6C7",
					300: "#66FCF1",
					400: "#45A29E",
				},
			},
			typography: {
				DEFAULT: {
					css: {
						color: "#C5C6C7",
						a: {
							color: "#45A29E",
							"&:hover": { color: "#66FCF1" },
						},
						"code::before": { content: "''" },
						"code::after": { content: "''" },
					},
				},
				invert: {
					css: {
						color: "#C5C6C7",
						a: {
							color: "#66FCF1",
							"&:hover": { color: "#45A29E" },
						},
					},
				},
			},
		},
	},
};

export default config;
