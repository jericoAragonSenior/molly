'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { FC, useState } from 'react'

import LineGradientPic from '@/shared/assets/line-green-gradient.svg'
import { Link } from '@/shared/config/i18n/navigation'

import { HeaderBar } from './HeaderBar'
import Button from '@/shared/ui/Button/Button'

import IconItem from '@/shared/assets/icons/icon-item.svg'
import { HeaderLiveKeed } from '@/features/LiveFeed/ui/HeaderLiveKeed'
import { useCommonStore } from '@/entities/Common/model/store'

interface HeaderMobileProps {
	className?: string
}

export const HeaderMobile: FC<HeaderMobileProps> = ({ className }) => {


	const setMobileRightBarState = useCommonStore(state => state.setMobileRightBarState)
	const mobileRightBarState = useCommonStore(state => state.mobileRightBarState)

	const [rightBarState, setRightBarState] = useState<boolean>(mobileRightBarState);

	return (
		<div className='h-[110px]'>
			<header
				className={clsx(
					'fixed top-0 z-[100] w-full h-[80px] flex items-center justify-between gap-4 bg-[#141925]',
					className
				)}
			>
				<HeaderLiveKeed className={clsx('h-[calc(100vh-150px)] w-[100px] mt-[80px] absolute top-0 bg-[#10151E] duration-200', rightBarState ? 'right-0 ' : '-right-[150px]')} />

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
				<Button
					disableAnimation
					onPress={() => { setMobileRightBarState(!rightBarState); setRightBarState(!rightBarState) }}
					className={clsx('w-[30px] h-[30px] transition-transform animate-pulse duration-500 ease-in-out rotate-0 transform', rightBarState ? "rotate-180" : "rotate-0")}>
					<IconItem />
				</Button>
			</header>
		</div>
	)
}
