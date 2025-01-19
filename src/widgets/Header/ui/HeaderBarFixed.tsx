'use client'

import { FC } from 'react'

import cls from './Header.module.sass'
import { HeaderBarContent } from './HeaderBarContent'
import clsx from 'clsx'

export const HeaderBarFixed: FC = () => {
	return (
		<div className={clsx(cls.bar_fixed, 'min-w-[270px]')}>
			<HeaderBarContent />
		</div>
	)
}
