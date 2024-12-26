import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FC } from 'react'
import Markdown from 'react-markdown'
import rehypeSanitize from 'rehype-sanitize'

import IconParticipant from '@/shared/assets/icons/icon-participant-grey.svg'
import IconTimer from '@/shared/assets/icons/icon-timer-2.svg'

import cls from './Giveaway.module.sass'
import { GiveawaySlider } from './GiveawaySlider'

interface GiveawayProps {
	className?: string
}

export const Giveaway: FC<GiveawayProps> = ({ className }) => {
	const t = useTranslations()

	return (
		<div className={clsx(cls.container, className)}>
			<div className={cls.container_inner}>
				<div className={cls.content}>
					<div className={cls.timer}>
						<div className={cls.timer_inner}>
							<IconTimer className={cls.timer_icon} />
							<div className={cls.timer_text}>2d 11:00:06</div>
						</div>
					</div>
					<div className={cls.part}>
						<div>
							<div className={cls.part_label}>{t('giveaway.label')}</div>
							<div className={cls.part_value}>1.758</div>
						</div>
						<IconParticipant className={cls.part_icon} />
					</div>
					<div className={cls.preview}>
						<Image
							src='/images/giveaways-widget-preview.png'
							alt='preview'
							width={450}
							height={450}
						/>
					</div>
					<div className={clsx(cls.title, 'title-primary')}>Daily giveaways</div>
					<Markdown
						rehypePlugins={[rehypeSanitize]}
						className={cls.desc}
					>
						Play games, open cases, win in Upgrader and [get prizes](#) weekly!
					</Markdown>
				</div>
				<GiveawaySlider className={clsx(cls.slider)} />
			</div>
		</div>
	)
}
