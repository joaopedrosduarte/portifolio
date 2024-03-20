/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"lightmode-lightbase": "#EDF1FB",
				"lightmode-darkbase": "#E2E8F0",
				"lightmode-bg": "#F9FAFB",
				"lightmode-maintext": "#04052f",
				"lightmode-auxiliartext": "#575f75",
				"lightmode-lightgray": "#C4C9D4",
				"darkmode-lightbase": "#303036",
				"darkmode-darkbase": "#1D2333",
				"darkmode-bg": "#16181D",
				"darkmode-maintext": "#E8E8FD",
				"darkmode-auxiliartext": "#C4C9D4",
				"darkmode-lightgray": "#C4C9D4",
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
				'baseblured': "0px 0px 10px -1px",
				'shinny': "0px 2px 40px -2px",
			},
			animation: {
				"loop-scroll": "loop-scroll 70s linear infinite",
			},
			keyframes: {
				"loop-scroll": {
					"0%": { transform: "translateY(0%)" },
					"50%": { transform: "translateY(50%)" },
					"100%": { transform: "translateY(100%)" },
				}
			}
		},
	},
	plugins: [],
}