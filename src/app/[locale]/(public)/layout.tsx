"use client"

import React, { Suspense } from 'react'


import { useAppResponsive } from '@/shared/lib/useResponsive'
import DesktopLayout from '@/shared/layout/DesktopLayout'
import MobileLayout from '@/shared/layout/MobileLayout'


const Layout = ({ children }: { children: React.ReactNode }) => {
	const { lg } = useAppResponsive()

	return (
		lg == true ?
			<DesktopLayout>
				{children}
			</DesktopLayout>
			:
			<MobileLayout>
				{children}
			</MobileLayout>
	)
}

export default Layout
