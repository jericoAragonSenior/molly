'use client'

import { FC } from 'react'

import { Media } from '@/shared/ui/Media/Media'

import { HeaderDesktop } from './HeaderDesktop'
import { HeaderMobile } from './HeaderMobile'

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
			</Media>
		</>
	)
}
