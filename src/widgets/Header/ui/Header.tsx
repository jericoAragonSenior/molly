'use client'

import { FC } from 'react'

import { Media } from '@/shared/ui/Media/Media'

import { HeaderDesktop } from './HeaderDesktop'
import { HeaderMobile } from './HeaderMobile'
import MobileLiveFeed from '@/features/LiveFeed/ui/MobileLiveFeed'

interface HeaderProps {
	className?: string
}

export const Header: FC<HeaderProps> = ({ className }) => {
	return (
		<>
			<Media greaterThanOrEqual='lg'>
				<HeaderDesktop className={className} />
			</Media>
			<Media lessThan='lg'>
				<HeaderMobile className={className} />
				<MobileLiveFeed className='mt-3 pl-[40px] lg:pl-5 md:pl-3' />
			</Media>
		</>
	)
}
