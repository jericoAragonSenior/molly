"use client"

import { FC } from 'react'
import { LiveFeed } from './LiveFeed'
import { headerItemList } from '../model/items'

interface HeaderLiveFeedProps {
    className?: string
    axis?: 'x' | 'y'
    title?: string
}

export const HeaderLiveFeed: FC<HeaderLiveFeedProps> = ({ className, axis = 'y', title }) => {

    return (
        <LiveFeed
            className={className}
            axis={axis}
            title={title}
            itemsList={headerItemList}
        />
    )
}
