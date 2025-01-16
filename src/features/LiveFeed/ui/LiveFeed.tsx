"use client"
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

import IconCrown from '@/shared/assets/icons/icon-crown-gradient-grey.svg'
import IconGrid from '@/shared/assets/icons/icon-grid-gradient-grey.svg'
import { useAppResponsive } from '@/shared/lib/useResponsive'
import { CardLiveFeed } from '@/shared/ui/CardLiveFeed/CardLiveFeed'

import { FeedButton } from './Button/Button'
import cls from './LiveFeed.module.sass'
import { LiveFeedItem } from '../model/types'

import { Swiper, SwiperSlide } from 'swiper/react'

interface LiveFeedProps {
	className?: string
	axis?: 'x' | 'y'
	title?: string
	itemsList: LiveFeedItem[]
}

export const LiveFeed: FC<LiveFeedProps> = ({ className, axis = 'y', title, itemsList }) => {
	const t = useTranslations()

	const { lg } = useAppResponsive()

	const items = itemsList.map(item => (
		<SwiperSlide
			key={item.id}
		>
			<CardLiveFeed
				title={item.title}
				pic={item.picUrl}
				theme={item.rarity}
				className={cls.card}
				/>
		</SwiperSlide>
	))

	return (
		<div className={clsx(cls.container, className, cls[`axis-${axis}`])}>
			{title && lg && (
				<div className={cls.title_row}>
					<div className={cls.title_icon}>
						<IconCrown />
					</div>
					<div className={cls.title}>{t(title)}</div>
				</div>
			)}
			<div className={cls.bar}>
				<FeedButton
					label={'livefeed.all'}
					icon={IconGrid}
					theme='green'
					isActive={true}
					className={cls.bar_btn}
				/>
				<FeedButton
					label={'livefeed.top'}
					icon={IconCrown}
					theme='yellow'
					isActive={false}
					className={cls.bar_btn}
				/>
			</div>
			<div className='overflow-hidden relative'>
				<Swiper
				spaceBetween={2}
				slidesPerView={'auto'}
				loop={true}
				wrapperClass={clsx('flex w-full', axis == 'y' ? 'flex-col h-screen' : 'flex-row')}
				className='relative w-full'
				tabIndex={8}
				direction={axis == 'y' ? 'vertical' : 'horizontal'}
				>
					{items}
				</Swiper>
			</div>
		</div>
	)
}
