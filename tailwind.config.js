/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			colors: {
				"lightbase": "#303036",
				"darkbase": "#27272c",
				"darkmode-bg": "#16181D",
				"lightgray": "#C4C9D4",
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
				'baseblured': "0 0 10px -1px",
				'shinny': "0px 2px 40px -2px",
				'base': "0 0 2px 1px rgba(0,0,0,0.3)",
			},
			animation: {
				"loop-scroll": "loop-scroll 50s linear infinite",
			}, 
			keyframes: {
				"loop-scroll": {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(-108%)" },
				}
			}
		},
  },
  plugins: [],
}