import IconBonuses from '@/shared/assets/icons/icon-bonuses.svg'
import IconLeaderboard from '@/shared/assets/icons/icon-leaderboard.svg'
import IconVipClub from '@/shared/assets/icons/icon-vipclub.svg'
import IconProvableFair from '@/shared/assets/icons/icon-provably-fair.svg';
import IconFAQ from '@/shared/assets/icons/icon-faq.svg'
import IconTermsOfServices from '@/shared/assets/icons/icon-terms-of-services.svg'
import IconTwitter from '@/shared/assets/icons/icon-twitter.svg'
import IconFacebook from '@/shared/assets/icons/icon-facebook.svg'
import IconDiscord from '@/shared/assets/icons/icon-discord.svg'
import { AppRoute } from '@/shared/const/pages'

import { IHeaderNavItem, ITopNavItem } from './types'

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

export const topbarNavItmes: ITopNavItem[] = [
	{
		src: AppRoute.PROVABLY_FAIR,
		label: 'topbar.provably_fair',
		icon: IconProvableFair,
		side: "left"
	},
	{
		src: AppRoute.FAQ,
		label: 'topbar.faq',
		icon: IconFAQ,
		side: "left"
	},
	{
		src: AppRoute.TERM_OF_SERVICES,
		label: 'topbar.term_of_service',
		icon: IconTermsOfServices,
		side: "left"
	},
	{
		src: AppRoute.TEMP,
		label: '',
		icon: IconTwitter,
		side: "right"
	},
	{
		src: AppRoute.TEMP,
		label: '',
		icon: IconFacebook,
		side: "right"
	},
	{
		src: AppRoute.TEMP,
		label: '',
		icon: IconDiscord,
		side: "right"
	}
]