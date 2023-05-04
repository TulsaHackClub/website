/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				zoom: {
					'0%, 100%': { 'background-position': 'top'},
					'50%': { 'background-position': 'bottom' }
				  }
			},
			animation: {
				'zoom': 'zoom 3s infinite'
			}
		},
	},
	plugins: [],
}
