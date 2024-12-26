'use client'

import React from 'react'

import { MediaContextProvider } from '@/shared/ui/Media/Media'

interface Props {
	children: React.ReactNode
}

export const MediaProvider = ({ children }: Props) => {
	return <MediaContextProvider>{children}</MediaContextProvider>
}
