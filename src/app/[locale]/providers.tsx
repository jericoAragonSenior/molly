import { NextUIProvider } from '@nextui-org/react'
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'
import React from 'react'
import { HydrationProvider } from 'react-hydration-provider'

import { MediaProvider } from './MediaProvider'

interface Props {
	children: React.ReactNode
	messages: AbstractIntlMessages
}

export const Providers = ({ children, messages }: Props) => {
	return (
		<HydrationProvider>
			<NextUIProvider>
				<NextIntlClientProvider messages={messages}>
					<MediaProvider>{children}</MediaProvider>
				</NextIntlClientProvider>
			</NextUIProvider>
		</HydrationProvider>
	)
}
