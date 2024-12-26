'use client'

import { responsiveBreakpoints } from '../config/responsiveBreakpoints'
import { useResponsive } from 'ahooks'
import { configResponsive } from 'ahooks/es/useResponsive'
import { useMemo } from 'react'

configResponsive(responsiveBreakpoints)

export const useAppResponsive = () => {
	const rawBreakpoints = useResponsive()
	const breakpoints = useMemo(() => ({ ...rawBreakpoints }), [rawBreakpoints])
	return breakpoints
}
