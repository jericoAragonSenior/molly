'use client'

import { FC } from 'react'

import { usePathname } from '@/shared/config/i18n/navigation'
import { AppRoute } from '@/shared/const/pages'
import { useAppResponsive } from '@/shared/lib/useResponsive'
import { headerItemList } from '../model/items'
import { LiveFeed } from './LiveFeed'

interface MainLiveFeedProps {
	className?: string
}

const MainLiveFeed: FC<MainLiveFeedProps> = ({ className }) => {
	const pathname = usePathname()

	const breakpoints = useAppResponsive()

	if (pathname !== AppRoute.MAIN || !breakpoints?.lg) {
		return (
			<LiveFeed
				axis='x'
				title='livefeed.title'
				className={className}
				itemsList={headerItemList}
			/>
		)
	}

	return null
}

export default MainLiveFeed
