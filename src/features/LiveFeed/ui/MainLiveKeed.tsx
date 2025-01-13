'use client'

import { FC } from 'react'

import { usePathname } from '@/shared/config/i18n/navigation'
import { AppRoute } from '@/shared/const/pages'
import { useAppResponsive } from '@/shared/lib/useResponsive'

import { LiveFeed } from './LiveFeed'

interface MainLiveKeedProps {
	className?: string
}

const MainLiveKeed: FC<MainLiveKeedProps> = ({ className }) => {
	const pathname = usePathname()

	const breakpoints = useAppResponsive()

	if (pathname !== AppRoute.MAIN || !breakpoints?.lg) {
		return (
			<LiveFeed
				axis='x'
				title='livefeed.title'
				className={className}
			/>
		)
	}

	return null
}

export default MainLiveKeed
