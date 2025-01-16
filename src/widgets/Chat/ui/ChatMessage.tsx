import { MessageType } from '../model/types'
import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'
import Markdown from 'react-markdown'
import rehypeSanitize from 'rehype-sanitize'

import cls from './ChatMessage.module.sass'

interface ChatMessageProps {
	className?: string
	name: string
	avatarUrl: string
	message?: string
	type?: MessageType
	timestamp: string
	titleClass?: string
	contentClass?: string
}

interface ThemeConfig {
	avatarStartColor: string
	avatarEndColor: string
	tagColor?: string
	tagBgColor?: string
}

const typeToView: Record<MessageType, ThemeConfig> = {
	default: {
		avatarStartColor: '#430B92',
		avatarEndColor: '#35375E'
	},
	my: {
		avatarStartColor: '#FDCD24',
		avatarEndColor: '#FDCD24'
	},
	admin: {
		avatarStartColor: '#FDCD24',
		avatarEndColor: '#FDCD24'
	},
	toadmin: {
		avatarStartColor: '#FDCD24',
		avatarEndColor: '#FDCD24'
	}
}

export const ChatMessage: FC<ChatMessageProps> = ({
	className,
	name,
	avatarUrl,
	message,
	type = 'default',
	timestamp,
	titleClass,
	contentClass
}) => {
	return (
		<div className={clsx(cls.base, className, cls[type])}>
			<div className={cls.inner}>
				<div className={clsx(cls.avatar)}>
					<Image
						width={40}
						height={40}
						alt='avatar'
						className={cls.avatar_pic}
						src={avatarUrl}
					/>
					<svg
						className={cls.avatar_border}
						viewBox='0 0 34 38'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M15.5 2.02073C16.4282 1.48483 17.5718 1.48483 18.5 2.02073L30.9545 9.21132C31.8827 9.74722 32.4545 10.7376 32.4545 11.8094V26.1906C32.4545 27.2624 31.8827 28.2528 30.9545 28.7887L18.5 35.9793C17.5718 36.5152 16.4282 36.5152 15.5 35.9793L3.04552 28.7887C2.11731 28.2528 1.54552 27.2624 1.54552 26.1906V11.8094C1.54552 10.7376 2.11731 9.74722 3.04552 9.21132L15.5 2.02073Z'
							stroke={`url(#chat_avatar_gradient_${type})`}
							strokeWidth='2'
						/>
						<defs>
							<linearGradient
								id={`chat_avatar_gradient_${type}`}
								x1='17'
								y1='0'
								x2='17'
								y2='38'
								gradientUnits='userSpaceOnUse'
							>
								<stop
									offset='0.31841'
									stopColor={typeToView[type].avatarStartColor}
									stopOpacity='0.2'
								/>
								<stop
									offset='1'
									stopColor={typeToView[type].avatarEndColor}
								/>
							</linearGradient>
						</defs>
					</svg>
					<svg
						className={cls.avatar_border_inner}
						viewBox='0 0 26 30'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M11.25 1.58771C12.3329 0.962498 13.6671 0.962498 14.75 1.58771L23.7404 6.77831C24.8233 7.40353 25.4904 8.55897 25.4904 9.8094V20.1906C25.4904 21.441 24.8233 22.5965 23.7404 23.2217L14.75 28.4123C13.6671 29.0375 12.3329 29.0375 11.25 28.4123L2.25962 23.2217C1.17671 22.5965 0.509619 21.441 0.509619 20.1906V9.8094C0.509619 8.55897 1.17671 7.40353 2.25962 6.77831L11.25 1.58771Z'
							stroke='#D1D9EB'
							strokeOpacity='0.15'
						/>
					</svg>
				</div>
				<div className='grow'>
					<div className='flex items-center justify-between gap-2.5'>
						<div className='flex items-center flex-wrap gap-2.5'>
							<div className={clsx(cls.name, titleClass)}>{name}</div>
							{(type === 'admin') && <div className={cls.tag}>Admin</div>}
						</div>
						<div className={cls.time}>{timestamp}</div>
					</div>
					<div className={clsx(cls.message, 'mt-1', contentClass)}>
						<Markdown rehypePlugins={[rehypeSanitize]}>{message}</Markdown>
					</div>
				</div>
			</div>
		</div>
	)
}
