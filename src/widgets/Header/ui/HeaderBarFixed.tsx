'use client'

import { FC } from 'react'

import cls from './Header.module.sass'
import { HeaderBarContent } from './HeaderBarContent'

export const HeaderBarFixed: FC = () => {
	return (
		<div className={cls.bar_fixed}>
			<HeaderBarContent />
		</div>
	)
}
