import clsx from 'clsx'
import React, { FC } from 'react'

import IconStar from '@/shared/assets/icons/icon-star.svg'

import { CaseBadge } from './CaseBadge'
import cls from './CaseCardView.module.sass'

export interface CaseConfigProps {
	theme?: string
	badgeTheme?: string
	badgeMode?: string
	icon?: React.FC<React.SVGProps<SVGSVGElement>>
	iconTheme?: string
	iconShadow?: boolean
}

export interface CaseCardViewProps {
	className?: string
	picUrl: string
	title: string
	price: string
	oldPrice?: string
	isFree?: boolean
	isFavorite?: boolean
	onSetFavorite?: () => void
	label: React.ReactNode
	config: CaseConfigProps
}

export const CaseCardView: FC<CaseCardViewProps> = ({
	className,
	picUrl,
	title,
	price,
	oldPrice,
	isFree,
	label,
	isFavorite,
	onSetFavorite,
	config
}) => {
	const onFavoriteClick = (e: React.MouseEvent) => {
		e.preventDefault()
		onSetFavorite && onSetFavorite()
	}

	return (
		<div className={clsx(cls.card, cls[config.theme || 'default'], className)}>
			<div className={cls.card_inner}>
				{label && (
					<CaseBadge
						label={label}
						badgeMode={config.badgeMode}
						badgeTheme={config.badgeTheme}
						icon={config.icon}
						iconShadow={config.iconShadow}
						iconTheme={config.iconTheme}
					/>
				)}

				<div className={cls.overlay}>
					<div
						className={clsx(cls.checkbox_favorite, isFavorite && cls.active)}
						onClick={onFavoriteClick}
					>
						<div className={cls.checkbox_favorite_icon}>
							<IconStar />
						</div>
					</div>
				</div>

				<div
					className={cls.pic}
					style={{ backgroundImage: `url(${picUrl})` }}
				></div>
				<div className={cls.title}>{title}</div>
				<div className={cls.price_wrapper}>
					{oldPrice && <div className={cls.price_old}>{oldPrice}</div>}
					<div className={clsx(cls.price, { [cls.free]: isFree })}>
						<div className={cls.price_inner}>{price}</div>
					</div>
				</div>
			</div>
		</div>
	)
}
