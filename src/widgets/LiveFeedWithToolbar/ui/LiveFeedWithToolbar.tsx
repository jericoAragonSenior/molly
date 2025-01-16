'use client'

import clsx from 'clsx'
import { FC } from 'react'

import { LiveFeed } from '@/features/LiveFeed/ui/LiveFeed'

import { CaseToolbar } from '@/entities/CaseToolbar/ui/CaseToolbar'

import { Media } from '@/shared/ui/Media/Media'

import cls from './LiveFeedWithToolbar.module.sass'

import { itemsList } from '@/features/LiveFeed/model/items'

interface LiveFeedWithToolbarProps {
	className?: string
}

export const LiveFeedWithToolbar: FC<LiveFeedWithToolbarProps> = ({ className }) => {
	return (
		<Media greaterThanOrEqual='lg'>
			<div className={clsx(cls.container, className)}>
				<div className={cls.container_inner}>
					<LiveFeed
						title='livefeed.title'
						axis='x'
						itemsList={itemsList}
					/>
					<CaseToolbar
						className='mt-2.5'
						withContainer={false}
					/>
				</div>
			</div>
		</Media>
	)
}
