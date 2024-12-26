import { createMedia } from '@artsy/fresnel'

import { responsiveBreakpoints } from '@/shared/config/responsiveBreakpoints'

const ExampleAppMedia = createMedia({
	breakpoints: responsiveBreakpoints,
	interactions: {
		hover: '(hover: hover)',
		notHover: '(hover: none)',
		landscape: '(orientation: landscape)',
		portrait: '(orientation: portrait)'
	}
})

export const mediaStyles = ExampleAppMedia.createMediaStyle()
export const { Media, MediaContextProvider } = ExampleAppMedia
