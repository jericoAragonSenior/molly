import { Skeleton } from '@nextui-org/react'
import { FC } from 'react'

import cls from './LiveFeed.module.sass'

export const LiveFeedSkeleton: FC = () => {
	return <Skeleton className={cls.skeleton} />
}
