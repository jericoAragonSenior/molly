import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

import IconSend from '@/shared/assets/icons/icon-send.svg'
import IconSmile from '@/shared/assets/icons/icon-smile.svg'
import Button from '@/shared/ui/Button/Button'

import cls from './Chat.module.sass'

interface ChatBarProps {
	className?: string
}

export const ChatBar: FC<ChatBarProps> = ({ className }) => {
	const t = useTranslations()
	return (
		<div className={clsx(cls.bar, className)}>
			<div className={cls.bar_inner}>
				<textarea
					name='chat-input'
					className={clsx(cls.bar_input, 'app-scrollbar')}
					placeholder={t('chat.placeholder')}
					aria-placeholder={t('chat.placeholder')}
					aria-label='chat input'
				></textarea>
				<Button
					theme='transparent'
					disableRipple
					classNames={{
						base: cls.bar_btn_picker
					}}
				>
					<IconSmile className={cls.bar_btn_picker_icon} />
				</Button>
				<Button
					theme='gradient-outline-green-3'
					strokeSize='reg'
					backdrop
					classNames={{
						base: cls.bar_btn_send,
						content: cls.bar_btn_send_content
					}}
				>
					<IconSend className={cls.bar_btn_send_icon} />
				</Button>
			</div>
		</div>
	)
}
