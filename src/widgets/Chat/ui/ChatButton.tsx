'use client'

import { Portal } from '@radix-ui/react-portal'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { FC, useState } from 'react'

import { useCommonStore } from '@/entities/Common/model/store'

import IconChat from '@/shared/assets/icons/icon-chat-grey.svg'
import { useAppResponsive } from '@/shared/lib/useResponsive'
import Button from '@/shared/ui/Button/Button'

import cls from './Chat.module.sass'

const desktopAnimationVariants = {
	active: { translateX: 0 },
	inactive: { translateX: '100%' }
}

const mobileAnimationVariants = {
	active: { opacity: 1 },
	inactive: { opacity: 0 }
}

export const ChatButton: FC = () => {
	const t = useTranslations()

	const breakpoints = useAppResponsive()

	const chatViewHidden = useCommonStore(state => state.chatViewHidden)
	const mobileRightBarState = useCommonStore(state => state.mobileRightBarState)
	const setViewChatHidden = useCommonStore(state => state.setViewChatHidden)
	const [active, setActive] = useState(!chatViewHidden)
	return (
		<Portal className='portal-chatbutton'>
			<motion.div
				key={breakpoints.lg ? 'chatbtn-desktop' : 'chatbtn-mobile'}
				variants={breakpoints.lg ? desktopAnimationVariants : mobileAnimationVariants}
				initial={'inactive'}
				animate={chatViewHidden ? 'active' : 'inactive'}
				onAnimationComplete={variant => {
					variant === 'inactive' && setActive(false)
				}}
				onAnimationStart={variant => {
					variant === 'active' && setActive(true)
				}}
				transition={{ duration: 0.2 }}
				className={clsx(cls.btn_open_wrapper, active && cls.active, mobileRightBarState ? 'hidden' : 'flex')}
			>
				<Button
					theme='gradient-outline-green-2'
					strokeSize='thin'
					backdrop
					hexagon
					hexagonAxis={breakpoints?.lg ? 'x' : 'y'}
					hexagonAngleOffset={breakpoints?.lg ? 10 : 13}
					onClick={() => { setViewChatHidden(false) }}
					classNames={{
						base: cls.btn_open_base,
						content: cls.btn_open_content
					}}
				>
					<IconChat className={cls.btn_open_icon} />
					{!breakpoints?.lg && <span className={cls.btn_open_label}>{t('chat.chat')}</span>}
				</Button>
			</motion.div>
		</Portal>
	)
}
