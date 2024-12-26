import type { Metadata } from 'next'
import { getMessages } from 'next-intl/server'
import React from 'react'

import { RootHead } from './head'
import { Providers } from './providers'

import '../styles/globals.sass'

interface Props {
	children: React.ReactNode
	params: {
		locale: string
	}
}

export default async function LocaleLayout({ children, params }: Props) {
	const messages = await getMessages()
	return (
		<html lang={params.locale}>
			<RootHead />
			<body className='font-primary-med bg-bg text-text-primary app-scrollbar'>
				<Providers messages={messages}>{children}</Providers>
			</body>
		</html>
	)
}

export const metadata: Metadata = {
	title: {
		template: '%s - MollyCS',
		default: 'MollyCS'
	},
	description: 'MollyCS, CS2, Counter Strike 2, case, games',
	icons: {
		icon: '/favicon.png'
	}
}
