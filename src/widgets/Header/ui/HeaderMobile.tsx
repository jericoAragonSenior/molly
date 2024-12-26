'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

import LineGradientPic from '@/shared/assets/line-green-gradient.svg'
import { Link } from '@/shared/config/i18n/navigation'

import { HeaderBar } from './HeaderBar'

interface HeaderMobileProps {
	className?: string
}

export const HeaderMobile: FC<HeaderMobileProps> = ({ className }) => {
	return (
		<div className='h-[110px]'>
			<header
				className={clsx(
					'fixed top-0 z-[100] w-full h-[80px] flex items-center justify-between gap-4 bg-[#141925]',
					className
				)}
			>
				<LineGradientPic className='absolute z-[1] left-0 bottom-0 translate-y-1/2 w-[40%]' />
				<div className='relative z-[1] max-w-[115px] w-full h-[70px]'>
					<Image
						src={'/images/back-sparks.png'}
						alt='sparks'
						width={176}
						height={97}
						className='absolute z-[1] top-[-10px] right-[-20px] scale-150'
					/>
					<Link
						href='/'
						className='relative z-[2] block w-full h-full'
						style={{
							backgroundImage: 'url(/images/logo-header-mobile.svg)',
							backgroundSize: 'contain',
							backgroundRepeat: 'no-repeat'
						}}
					/>
				</div>
				<HeaderBar />
			</header>
		</div>
	)
}
