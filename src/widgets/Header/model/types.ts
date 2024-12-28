import React from 'react'

import { AppRoute } from '@/shared/const/pages'

export interface IHeaderNavItem {
	src: AppRoute
	label: string
	icon: React.FC<React.SVGProps<SVGSVGElement>>
}

export interface ITopNavItem {
	src: AppRoute,
	label: string,
	icon: React.FC<React.SVGProps<SVGSVGElement>>,
	side: string
}