'use client'

import { FC } from 'react'

import { usePathname } from '@/shared/config/i18n/navigation'
import { AppRoute } from '@/shared/const/pages'
import { useAppResponsive } from '@/shared/lib/useResponsive'

import { MLiveFeed } from './MLiveFeed'

interface MainLiveFeedProps {
    className?: string
}

const MobileLiveFeed: FC<MainLiveFeedProps> = ({ className }) => {
    const pathname = usePathname()

    const breakpoints = useAppResponsive()

    if (pathname !== AppRoute.MAIN || !breakpoints?.lg) {
        return (
            <MLiveFeed
                axis='x'
                title='livefeed.title'
                className={className}
            />
        )
    }

    return null
}

export default MobileLiveFeed
