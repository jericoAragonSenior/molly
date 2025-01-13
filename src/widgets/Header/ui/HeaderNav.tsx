'use client'

import { headerNavItems } from '../model/items'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

import { Link, usePathname } from '@/shared/config/i18n/navigation'

import cls from './Header.module.sass'

interface HeaderNavProps {
	className?: string
}

export const HeaderNav: FC<HeaderNavProps> = ({ className }) => {
	const t = useTranslations()
	const pathname = usePathname()
	return (
		<div className={clsx(className, cls.nav, 'py-3 flex flex-wrap items-center gap-x-[30px] xl:gap-x-4 gap-y-3 3sm:bg-[#141924] 3sm:w-full 3sm:justify-center 3sm:py-4')}>
			{headerNavItems.map(item => (
				<Link
					title={t(item.label)}
					href={item.src}
					key={item.src}
					className={clsx(cls.item, {
						[cls.active]: pathname === item.src
					})}
				>
					<div className={clsx(cls.item_icon, 'w-[18px] h-[18px]')}>
						<item.icon />
					</div>
					<div className={cls.item_label}>{t(item.label)}</div>
				</Link>
			))}
		</div>
	)
}
