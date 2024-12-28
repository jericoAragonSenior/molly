import { NextUIProvider } from '@nextui-org/react';
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';
import React from 'react';
import { HydrationProvider } from 'react-hydration-provider';
import { MediaProvider } from './MediaProvider';
import { ModalProvider } from '../../shared/context/ModalContext';
import ModalComponent from '@/shared/ui/Modal/ModalComponent';

interface Props {
	children: React.ReactNode;
	messages: AbstractIntlMessages;
}

export const Providers: React.FC<Props> = ({ children, messages }) => {
	return (
		<HydrationProvider>
			<NextUIProvider>
				<NextIntlClientProvider messages={messages}>
					<MediaProvider>
						<ModalProvider>
							<ModalComponent />
							{children}
						</ModalProvider>
					</MediaProvider>
				</NextIntlClientProvider>
			</NextUIProvider>
		</HydrationProvider>
	);
};

