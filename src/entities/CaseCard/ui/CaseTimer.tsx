'use client'

import { FC } from 'react'
import { useTimer } from 'react-timer-hook'

interface CaseTimerProps {
	className?: string
	expiryTimestamp: string
}

export const CaseTimer: FC<CaseTimerProps> = ({ className, expiryTimestamp }) => {
	const { hours, minutes, seconds } = useTimer({
		expiryTimestamp: new Date(expiryTimestamp)
	})

	return (
		<b className={className}>
			{hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
		</b>
	)
}
