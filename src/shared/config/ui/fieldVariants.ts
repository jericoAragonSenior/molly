type FieldTheme = 'theme-1' | 'theme-2' | 'theme-3'

export const fieldVariants = {
	base: 'field',
	variants: {
		strokeSize: {
			thin: 'stroke-thin',
			reg: 'stroke-reg'
		},
		theme: {
			['theme-1']: 'theme-1',
			['theme-2']: 'theme-2',
			['theme-3']: 'theme-3'
		} as Record<FieldTheme, string>
	}
}
