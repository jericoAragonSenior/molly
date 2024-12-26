import React from 'react'

export interface Social {
	label: string
	src: string
	icon: React.FC<React.SVGProps<SVGSVGElement>>
	hover?: string
}
