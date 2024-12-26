'use client'

import clsx from 'clsx'
import { FC } from 'react'

import { useAppResponsive } from '@/shared/lib/useResponsive'

import cls from './SectionHeader.module.sass'

interface ClassNamesConfig {
	base?: string
	title?: string
	titleWrapper?: string
	subtitle?: string
	icon?: string
	bar?: string
}

interface SectionHeaderProps {
	title: string
	subtitle?: string
	icon?: React.ReactNode
	barElement?: React.ReactNode
	classNames?: ClassNamesConfig
}

export const SectionHeader: FC<SectionHeaderProps> = ({ title, subtitle, icon, barElement, classNames }) => {
	const { md } = useAppResponsive()

	return (
		<div className={clsx(cls.h, classNames?.base)}>
			<div className={clsx('flex items-center gap-3', classNames?.titleWrapper)}>
				{icon && <div className={clsx(cls.icon, classNames?.icon)}>{icon}</div>}
				<div className={clsx(cls.title, 'title-primary px-1')}>{title}</div>
			</div>
			{md && <div className={clsx(cls.subtitle, 'ml-6')}>{subtitle}</div>}
			{barElement && <div className={clsx(cls.bar, classNames?.bar)}>{barElement}</div>}
		</div>
	)
}
