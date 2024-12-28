'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import { FC, useEffect, useRef, useState } from 'react'

import { HeaderBarFixed } from '@/widgets/Header/ui/HeaderBarFixed'

import { CaseToolbarFixed } from '@/entities/CaseToolbar/ui/CaseToolbarFixed'
import { useCommonStore } from '@/entities/Common/model/store'

import { useAppResponsive } from '@/shared/lib/useResponsive'

interface FixedTopBarProps {
	className?: string
}

const animationVariants = {
	inactive: { translateY: '-150%' },
	active: { translateY: 0 }
}

export const FixedTopBar: FC<FixedTopBarProps> = ({ className }) => {
	const holderRef = useRef<HTMLDivElement>(null)
	const [holderWidth, setHolderWidth] = useState(0)
	const headerBarInView = useCommonStore(state => state.headerBarInView)
	const fixedCaseToolbarInView = useCommonStore(state => state.fixedCaseToolbarInView)

	const breakpoints = useAppResponsive()

	useEffect(() => {
		const current = holderRef.current
		const updateWidth = () => {
			if (current) {
				setHolderWidth(current.clientWidth)
			}
		}

		updateWidth()

		const resizeObserver = new ResizeObserver(updateWidth)
		if (current) {
			resizeObserver.observe(current)
		}

		return () => {
			resizeObserver.disconnect()
		}
	}, [breakpoints.lg])

	if (!breakpoints.lg) return null

	return (
		<div
			ref={holderRef}
			className='w-full h-0'
		>
			<motion.div
				initial='inactive'
				variants={animationVariants}
				animate={headerBarInView ? 'inactive' : 'active'}
				transition={{ type: 'tween' }}
				style={{
					right: window.innerWidth - (holderRef.current?.getBoundingClientRect().right ?? holderWidth),
					maxWidth: holderWidth
				}}
				className={clsx('fixed top-14 z-[100] flex items-start justify-end gap-4', className, {
					['top-[-200px] duration-500']: headerBarInView,
					['w-full']: fixedCaseToolbarInView
				})}
			>
				<CaseToolbarFixed className='grow' />
				<HeaderBarFixed />
			</motion.div>
		</div>
	)
}
