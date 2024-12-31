'use client'

import { useInViewport } from 'ahooks'
import { useEffect, useRef } from 'react'

import { useCommonStore } from '@/entities/Common/model/store'

import { HeaderBarContent } from './HeaderBarContent'


export const HeaderBar = () => {
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
