"use client"
import { itemsList } from '../model/items'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

import IconCrown from '@/shared/assets/icons/icon-crown-gradient-grey.svg'
import IconGrid from '@/shared/assets/icons/icon-grid-gradient-grey.svg'
import { useAppResponsive } from '@/shared/lib/useResponsive'
import { CardLiveFeed } from '@/shared/ui/CardLiveFeed/CardLiveFeed'

import { FeedButton } from './Button/Button'
import cls from './LiveFeed.module.sass'

interface LiveFeedProps {
	className?: string
	axis?: 'x' | 'y'
	title?: string
}

export const LiveFeed: FC<LiveFeedProps> = ({ className, axis = 'y', title }) => {
	const t = useTranslations()

	const { lg } = useAppResponsive()

	const items = itemsList.map(item => (
		<CardLiveFeed
			key={item.id}
			title={item.title}
			pic={item.picUrl}
			theme={item.rarity}
			className={cls.card}
		/>
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
			<div className={clsx(cls.track)}>{items}</div>
		</div>
	)
}
