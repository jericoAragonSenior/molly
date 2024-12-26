import IconSuccess from '@/shared/assets/icons/icon-check.svg'
import IconError from '@/shared/assets/icons/icon-exclamation.svg'
import IconMessage from '@/shared/assets/icons/icon-letter.svg'
import IconInfo from '@/shared/assets/icons/icon-news.svg'
import IconWarning from '@/shared/assets/icons/icon-timer.svg'

import { AppNotification, NotificationTheme, NotificationView, Status } from './types'

export const config: Record<Status, NotificationView> = {
	[Status.SUCCESS]: {
		icon: IconSuccess,
		theme: NotificationTheme.GREEN
	},
	[Status.WARNING]: {
		icon: IconWarning,
		theme: NotificationTheme.YELLOW
	},
	[Status.ERROR]: {
		icon: IconError,
		theme: NotificationTheme.RED
	},
	[Status.INFO]: {
		icon: IconInfo,
		theme: NotificationTheme.YELLOW
	},
	[Status.MESSAGE]: {
		icon: IconMessage,
		theme: NotificationTheme.GREEN
	}
}

export const notificationList: AppNotification[] = [
	{
		id: '1',
		status: Status.SUCCESS,
		title: 'Balance successfully!',
		description: 'Balance successfully funded for $5000.00, enjoy the game.',
		time: '11:44'
	},
	{
		id: '2',
		status: Status.WARNING,
		title: 'Item for withdrawal',
		description: 'Balance successfully funded for $5000.00, enjoy the game.',
		time: '11:44'
	},
	{
		id: '3',
		status: Status.ERROR,
		title: 'Balance successfully!',
		description: 'Balance successfully funded for $5000.00, enjoy the game.',
		time: '11:44'
	},
	{
		id: '4',
		status: Status.INFO,
		title: 'Top news world',
		description: 'Balance successfully funded for $5000.00, enjoy the game.',
		time: '11:44'
	},
	{
		id: '5',
		status: Status.MESSAGE,
		title: 'You have 1 received a message',
		description: 'Balance successfully funded for $5000.00, enjoy the game.',
		time: '11:44'
	},
	{
		id: '6',
		status: Status.INFO,
		title: 'Top news world',
		description: 'Balance successfully funded for $5000.00, enjoy the game.',
		time: '11:44'
	},
	{
		id: '7',
		status: Status.MESSAGE,
		title: 'You have 1 received a message',
		description: 'Balance successfully funded for $5000.00, enjoy the game.',
		time: '11:44'
	}
]
