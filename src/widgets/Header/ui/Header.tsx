'use client'

import { FC } from 'react'

import { HeaderDesktop } from './HeaderDesktop'

interface HeaderProps {
	className?: string
}

export const Header: FC<HeaderProps> = ({ className }) => {
	return (
		<>
			<HeaderDesktop className={className} />
		</>
	)
}
