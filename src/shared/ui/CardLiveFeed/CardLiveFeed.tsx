import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

import BackdropRays from '@/shared/assets/radial-rays-grey-2.png'

import cls from './CardLiveFeed.module.sass'

interface CardLiveFeedProps {
	className?: string
	theme: string
	title: string
	pic: string
}

export const CardLiveFeed: FC<CardLiveFeedProps> = ({ className, theme, title, pic }) => {
	return (
		<div className={clsx(cls.item, cls[theme], className)}>
			<div className={clsx(cls.item_body, cls[theme])}>
				<Image
					src={BackdropRays}
					fill
					sizes='100%'
					alt='backdrop'
					className={cls.item_backdrop}
				/>
				<div className={cls.item_inner}>
					<div className={cls.item_pic}>
						<Image
							src={pic}
							width={68}
							height={50}
							alt={title}
						/>
					</div>
					<div className={cls.item_title}>{title}</div>
				</div>
			</div>
		</div>
	)
}
