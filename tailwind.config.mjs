/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"lightbase": "#303036",
				"darkbase": "#27272c",
				"darkmode-bg": "#16181D",
				"lightgray": "#A1A1A1",
				"darkmode-maintext": "#E8E8FD",
				"darkmode-auxiliartext": "#C4C9D4"
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
			boxShadow: {
				'baseblured': "0 0 5px -0.5px rgba(0,0,0,0.3)",
				'base': "0 0 2px 1px rgba(0,0,0,0.3)"
			}
		},
	},
	plugins: [],
}
