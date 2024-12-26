'use client'

import { useInViewport } from 'ahooks'
import { FC, useEffect, useRef } from 'react'

import { useCommonStore } from '@/entities/Common/model/store'

import { HeaderBarContent } from './HeaderBarContent'

interface HeaderBarProps {
	className?: string
}

export const HeaderBar: FC<HeaderBarProps> = ({ className }) => {
	const barRef = useRef<HTMLDivElement>(null)
	const [inViewport] = useInViewport(barRef)

	const setHeaderBarInView = useCommonStore(state => state.setHeaderBarInView)

	useEffect(() => {
		if (inViewport !== undefined) {
			setHeaderBarInView(inViewport)
		}
	}, [inViewport])

	return (
		<div ref={barRef}>
			<HeaderBarContent />
		</div>
	)
}
