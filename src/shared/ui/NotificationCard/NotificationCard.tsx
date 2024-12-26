import clsx from 'clsx'
import React, { FC } from 'react'

import IconClose from '@/shared/assets/icons/icon-close-circle.svg'

import cls from './NotificationCard.module.sass'

interface NotificationCardProps {
	className?: string
	title: string
	description: string
	time: string
	theme: string
	icon: React.FC<React.SVGProps<SVGSVGElement>>
}

export const NotificationCard: FC<NotificationCardProps> = ({
	className,
	title,
	description,
	time,
	theme,
	icon: Icon
}) => {
	return (
		<div className={clsx(cls.item, className, cls[theme])}>
			<div className={cls.item_backdrop_wrapper}>
				<div className={cls.item_backdrop}></div>
			</div>
			<div className={cls.item_content}>
				<div className={cls.icon_wrapper}>
					<div className={cls.icon}>
						<Icon />
					</div>
				</div>
				<div className={cls.item_info}>
					<div className='font-primary-black text-xs text-white'>{title}</div>
					<div className='mt-1 font-primary-med text-[10px] text-[#99A7C8]'>{description}</div>
				</div>
				<button
					type='button'
					className={cls.item_btn_remove}
				>
					<IconClose />
				</button>
				<div className={clsx(cls.item_time, 'font-primary-med text-[8px] text-[#99A7C8]')}>{time}</div>
			</div>
		</div>
	)
}
