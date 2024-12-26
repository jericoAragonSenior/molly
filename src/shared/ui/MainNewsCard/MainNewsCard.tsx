import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import Markdown from 'react-markdown'
import rehypeSanitize from 'rehype-sanitize'

import IconArrowRight from '@/shared/assets/icons/icon-arrow-right.svg'
import { useAppResponsive } from '@/shared/lib/useResponsive'

import cls from './MainNewsCard.module.sass'

interface MainNewsCardProps {
	className?: string
	theme: string
	iconUrl: string
	bgUrl: string
	picUrl: string
	title: string
	description: string
}

export const MainNewsCard: FC<MainNewsCardProps> = ({
	className,
	theme,
	iconUrl,
	bgUrl,
	title,
	description,
	picUrl
}) => {
	const breakpoints = useAppResponsive()

	return (
		<div className={clsx(cls.item_wrapper, cls[theme], className)}>
			<div className={clsx(cls.item)}>
				<div className={cls.item_inner}>
					<Image
						src={bgUrl}
						alt={title}
						width={400}
						height={400}
						className={cls.item_backdrop}
					/>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						className={cls.item_pic}
						src={picUrl}
						alt={title}
					/>
					<div className={cls.item_content}>
						{breakpoints?.['2sm'] && (
							<div className={cls.item_icon}>
								<Image
									src={iconUrl}
									alt={title}
									fill
									sizes='100%'
								/>
							</div>
						)}
						<div className={clsx(cls.item_title, 'title-primary')}>{title}</div>
						<div className='mt-5 3xl:mt-3 flex items-start gap-1.5'>
							<div className={cls.item_desc_icon_frame}>
								<div className={cls.item_desc_icon_border}>
									<div className={cls.item_desc_icon}>
										<IconArrowRight />
									</div>
								</div>
							</div>
							<Markdown
								rehypePlugins={[rehypeSanitize]}
								components={{
									a: ({ href, children }) => {
										if (href?.startsWith('/')) {
											return (
												<Link href={href}>
													<a>{children}</a>
												</Link>
											)
										}
										return (
											<a
												href={href}
												target='_blank'
												rel='noopener noreferrer'
											>
												{children}
											</a>
										)
									}
								}}
								className={cls.item_desc}
							>
								{description}
							</Markdown>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
