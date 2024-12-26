'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import React, { FC } from 'react'

import { Link, usePathname } from '@/shared/config/i18n/navigation'
import { AppRoute } from '@/shared/const/pages'

import cls from './SidebarNav.module.sass'

export interface ISidebarNavItem {
	src: AppRoute
	label: string
	icon: React.FC<React.SVGProps<SVGSVGElement>>
}

interface SidebarNavProps {
	className?: string
	items: ISidebarNavItem[]
}

export const SidebarNav: FC<SidebarNavProps> = ({ className, items }) => {
	const t = useTranslations()
	const pathname = usePathname()

	return (
		<div className={clsx(className, 'grid grid-cols-1 gap-[2px]')}>
			{items.map(item => (
				<Link
					href={item.src}
					key={item.src}
					className={clsx(cls.item, {
						[cls.active]: pathname === item.src
					})}
				>
					<div className={cls.item_icon}>
						<item.icon />
					</div>
					<div className={clsx(cls.item_label)}>{t(item.label)}</div>
				</Link>
			))}
		</div>
	)
}
