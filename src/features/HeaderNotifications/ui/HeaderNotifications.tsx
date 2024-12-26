import { config, notificationList } from '../model/items'
import { Popover, PopoverContent, PopoverTrigger, ScrollShadow } from '@nextui-org/react'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

import IconNotifications from '@/shared/assets/icons/icon-notifications.svg'
import { ButtonHexSquare } from '@/shared/ui/ButtonHexSquare/ButtonHexSquare'
import { NotificationCard } from '@/shared/ui/NotificationCard/NotificationCard'

import cls from './HeaderNotifications.module.sass'

interface HeaderNotificationsProps {
	className?: string
}

export const HeaderNotifications: FC<HeaderNotificationsProps> = ({ className }) => {
	const t = useTranslations()

	const notifications = notificationList.map(item => (
		<NotificationCard
			key={item.id}
			title={item.title}
			description={item.description}
			time={item.time}
			icon={config[item.status].icon}
			theme={config[item.status].theme}
		/>
	))

	return (
		<Popover
			showArrow
			placement='bottom'
			offset={15}
			classNames={{
				base: [cls.base, cls['_with-arrow']]
			}}
		>
			<PopoverTrigger>
				<div className={clsx(cls.trigger, className, 'relative z-[1] w-[24px] h-[27px]')}>
					<div className={cls.indicator}></div>
					<ButtonHexSquare className='w-full h-full'>
						<IconNotifications className='w-[14px] h-[14px] text-[#64749B]' />
					</ButtonHexSquare>
				</div>
			</PopoverTrigger>
			<PopoverContent className={cls.content}>
				<div className='flex items-center gap-2'>
					<h1 className='font-primary-bold text-sm text-white'>{t('header.notifications')}</h1>
					<div className={cls.counter}>
						<div className={cls.counter_inner}>4</div>
					</div>
				</div>
				<div className={clsx('mt-2.5')}>
					<ScrollShadow className={cls.track}>{notifications}</ScrollShadow>
				</div>
			</PopoverContent>
		</Popover>
	)
}
