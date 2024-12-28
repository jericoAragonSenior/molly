'use client'

import { useInViewport } from 'ahooks'
import clsx from 'clsx'
import { FC, useEffect, useRef } from 'react'

import { useCommonStore } from '@/entities/Common/model/store'

import cls from './CaseToolbar.module.sass'
import { CaseToolbarContent } from './CaseToolbarContent'

interface CaseToolbarProps {
	className?: string
	withContainer?: boolean
}

export const CaseToolbar: FC<CaseToolbarProps> = ({ className, withContainer = true }) => {
	const baseRef = useRef<HTMLDivElement>(null)

	const [inViewport] = useInViewport(baseRef)

	const setCaseToolbarInView = useCommonStore(state => state.setCaseToolbarInView)
	const setItemPosition = useCommonStore(state => state.setItemPosition)

	useEffect(() => {
		setItemPosition("left")
	}, [])

	useEffect(() => {
		if (inViewport !== undefined) {
			setCaseToolbarInView(inViewport)
		}
	}, [inViewport])

	return (
		<div
			ref={baseRef}
			className={clsx(cls.base, className, { [cls.with_container]: withContainer })}
		>
			<div className={cls.wrapper}>
				<div className={cls.inner}>
					<CaseToolbarContent />
				</div>
			</div>
		</div>
	)
}
