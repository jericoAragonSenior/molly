import IconBonuses from '@/shared/assets/icons/icon-bonuses.svg'
import IconLeaderboard from '@/shared/assets/icons/icon-leaderboard.svg'
import IconVipClub from '@/shared/assets/icons/icon-vipclub.svg'
import { AppRoute } from '@/shared/const/pages'

import { IHeaderNavItem } from './types'

export const headerNavItems: IHeaderNavItem[] = [
	{
		src: AppRoute.VIP,
		label: 'header.vip',
		icon: IconVipClub
	},
	{
		src: AppRoute.BONUSES,
		label: 'header.bonuses',
		icon: IconBonuses
	},
	{
		src: AppRoute.LEADERBOARD,
		label: 'header.leaderboard',
		icon: IconLeaderboard
	}
]
