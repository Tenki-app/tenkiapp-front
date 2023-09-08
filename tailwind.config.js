/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'dark-blue': '#182438',
				'dark-garnet': '#723232',
				'champagne-white': '#F7EFD8',
				'light-blue': '#95F9FF',
				'bluish-gray': '#556270',
				'olive-drab': '#6F7C5E',
				bronze: '#C5A76E',
				'light-gray': '#556270',
				gray: '#666B70',
				'dark-gray': '#4C5052',
				'dark-blue-transparency': 'rgba(24, 36, 56, 0.65)',
			},
			fontFamily: {
				primary: ['Roboto', 'sans-serif'],
			},
		},
		screens: {
			xxs: '320px',
			xs: '425px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
	},
	plugins: [],
};
