/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			primary: '#003334',
			secondary: '#789494',
			muted: '#4d6e6e', // texto secundário sobre fundo branco (contraste AA)
			soft: '#a9c4c4', // texto secundário sobre fundo primary (contraste AA)
			accent: '#57e3e3',
			white: '#FFFFFF',
			black: '#1f2327',
			transparent: 'transparent',
		},
		extend: {
			fontFamily: {
				regular: ['Regular'],
				bold: ['Bold'],
			},
		},
	},
	plugins: [],
};
