const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			xss: '320px',
			xs: '475px',
			...defaultTheme.screens,
		},
		fontFamily: {
			poppins: ['Poppins'],
			openSans: ['Open Sans'],
		},
		extend: {
			width: {
				portfolioWidth: '450px',
			},
			colors: {
				mainBg: '#121212',
				primaryBg: '#9DEDF8',
				secondaryBg: '#9DEDF8',
				pBg: '#A1AEC1',
				bgCard: '#252525',
			},
		},
	},
	variants: {
		extend: {
			transitionTimingFunction: ['hover', 'focus'],
			transitionDuration: ['hover', 'focus'],
			textColor: ['responsive', 'hover', 'focus', 'group-hover'],
			borderWidth: ['hover'],
			transform: ['hover'],
			scale: ['hover'],
			fontSize: ['hover', 'focus'],
			transitionProperty: ['hover', 'focus'],
		},
	},
	plugins: [],
}
