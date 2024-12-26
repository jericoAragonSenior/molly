'use client'

import { mediaStyles } from '@/shared/ui/Media/Media'

export const RootHead = () => {
	return (
		<head>
			<style
				key='fresnel-css'
				dangerouslySetInnerHTML={{ __html: mediaStyles }}
				type='text/css'
			/>
		</head>
	)
}
