import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import React, { FC } from 'react'

import cls from './Button.module.sass'

interface ButtonProps {
	className?: string
	icon: React.FC<React.SVGProps<SVGSVGElement>>
	label: string
	theme: string
	isActive: boolean
}

export const FeedButton: FC<ButtonProps> = ({ className, label, icon: Icon, theme, isActive = false }) => {
	const t = useTranslations()
	return (
		<button
			type='button'
			className={clsx(cls.btn, className, cls[theme], { [cls.active]: isActive })}
		>
			<div className={cls.btn_inner}>
				<div className={cls.btn_icon}>
					<Icon />
				</div>
				<div className={cls.btn_label}>{t(label)}</div>
			</div>
		</button>
	)
}
