/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"darkbase": "#303036",
				"lightbase": "#27272c",
				"lightgray": "#A1A1A1"
			},
			screens: {
				'mb1': "416px",
				'mb2': "480px",
				'mb3': "544px",
				'mb4': "608px",
				'mb5': "672px",
				'mb6': "736px",
				'rg': '896px',
			},
		},
	},
	plugins: [],
}
