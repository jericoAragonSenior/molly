/* eslint-disable no-unused-vars */
import React from 'react'

export enum Status {
	SUCCESS = 'success',
	WARNING = 'warning',
	ERROR = 'error',
	INFO = 'info',
	MESSAGE = 'message'
}

export enum NotificationTheme {
	GREEN = 'green',
	RED = 'red',
	YELLOW = 'yellow'
}

export interface NotificationView {
	icon: React.FC<React.SVGProps<SVGSVGElement>>
	theme: NotificationTheme
}

export interface AppNotification {
	id: string
	title: string
	description: string
	time: string
	status: Status
}
