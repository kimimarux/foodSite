/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		daisyui: {
			themes: ['corporate', 'night', 'cmyk']
		},
		extend: {}
	},

	plugins: [require('daisyui')]
};

module.exports = config;
