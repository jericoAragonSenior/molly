import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			'3xl': { max: '1600px' },
			'2xl': { max: '1536px' },
			xl: { max: '1440px' },
			'3lg': { max: '1367px' },
			'2lg': { max: '1280px' },
			lg: { max: '1200px' },
			'3md': { max: '1024px' },
			'2md': { max: '991px' },
			md: { max: '768px' },
			'3sm': { max: '640px' },
			'2sm': { max: '520px' },
			sm: { max: '420px' },
			xs: { max: '360px' },
			zero: { max: '0px' }
		},
		extend: {
			fontFamily: {
				'primary-book': ['Gotham Book', 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif'],
				'primary-med': ['Gotham Medium', 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif'],
				'primary-bold': ['Gotham Bold', 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif'],
				'primary-black': ['Gotham Black', 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif'],
				'primary-heavy-ultra': ['Gotham Ultra', 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif']
			},
			colors: {
				bg: '#121722',
				primary: '#17E2A5',
				'primary-2': '#24FDBC',
				'warning-1': '#FDCD24',
				'text-primary': '#D1D9EB',
				'danger-1': '#CE3C3C'
			}
		}
	},
	plugins: [nextui()]
}
export default config
