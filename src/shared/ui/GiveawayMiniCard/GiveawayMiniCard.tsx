import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

import IconCoin from '@/shared/assets/icons/icon-coin-grey.svg'

import cls from './GiveawayMiniCard.module.sass'

interface GiveawayMiniCardProps {
	className?: string
	picUrl: string
	type: string
	title: string
	price: string
	theme: string
}

export const GiveawayMiniCard: FC<GiveawayMiniCardProps> = ({ className, picUrl, type, title, price, theme }) => {
	return (
		<div className={clsx(cls.card, cls[theme], className)}>
			<div className={cls.card_inner}>
				<div className={cls.card_pic}>
					<Image
						src={picUrl}
						alt={title}
						width={64}
						height={64}
					/>
				</div>
				<div>
					<div className={cls.card_type}>{type}</div>
					<div className={cls.card_title}>{title}</div>
					<div className={cls.card_price}>
						<IconCoin className={cls.card_price_icon} />
						<div className={cls.card_price_value}>{price} ($)</div>
					</div>
				</div>
			</div>
		</div>
	)
}
