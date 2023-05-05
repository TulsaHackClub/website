/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Metropolis"],
			  },
			colors: {
				brandgreen: {
					50: "#e1f4ef",
					100: "#b4e3d7",
					200: "#84d1be",
					300: "#53bea4",
					400: "#2faf91",
					500: "#11a07f",
					600: "#0e9273",
					700: "#088263",
					800: "#007256",
					900: "#00563a",
				},
				brandblue: {
					50: "#d1f2ff",
					100: "#acdaf1",
					200: "#8bbdd9",
					300: "#67a1bf",
					400: "#4b8cac",
					500: "#29789a",
					600: "#186988",
					700: "#005672",
					800: "#00435c",
					900: "#002e45",
				}
			}
		},
	},
	plugins: [],
}
