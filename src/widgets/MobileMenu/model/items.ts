import { Social } from '@/entities/Socials/model/types'

import IconBonuses from '@/shared/assets/icons/icon-bonuses.svg'
import IconCaseBattle from '@/shared/assets/icons/icon-case-battle.svg'
import IconCaseOpen from '@/shared/assets/icons/icon-case-open.svg'
import IconContract from '@/shared/assets/icons/icon-contract.svg'
import IconLeaderboard from '@/shared/assets/icons/icon-leaderboard.svg'
import IconQuestion from '@/shared/assets/icons/icon-question.svg'
import IconDiscord from '@/shared/assets/icons/icon-soc-dc.svg'
import IconFacebook from '@/shared/assets/icons/icon-soc-fb.svg'
import IconTwitter from '@/shared/assets/icons/icon-soc-tw.svg'
import IconUpgrade from '@/shared/assets/icons/icon-upgrade.svg'
import IconVipClub from '@/shared/assets/icons/icon-vipclub.svg'
import { AppRoute } from '@/shared/const/pages'
import { ISidebarNavItem } from '@/shared/ui/SidebarNav/SidebarNav'

export const mainNavItems: ISidebarNavItem[] = [
	{
		label: 'pages.cases_opening',
		src: AppRoute.CASES,
		icon: IconCaseOpen
	},
	{
		label: 'pages.battles',
		src: AppRoute.BATTLE_CASES,
		icon: IconCaseBattle
	},
	{
		label: 'pages.upgrades',
		src: AppRoute.UPGRADES,
		icon: IconUpgrade
	},
	{
		label: 'pages.contracts',
		src: AppRoute.CONTRACTS,
		icon: IconContract
	},
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

export const extraNavItems: ISidebarNavItem[] = [
	{
		label: 'sidebar.faq',
		src: AppRoute.FAQ,
		icon: IconQuestion
	},
	{
		label: 'sidebar.support',
		src: AppRoute.SUPPORT,
		icon: IconQuestion
	}
]

export const socialsitems: Social[] = [
	{
		label: 'twitter',
		src: '#',
		icon: IconTwitter,
		hover: 'hover:text-[#3EAEF3]'
	},
	{
		label: 'facebook',
		src: '#',
		icon: IconFacebook,
		hover: 'hover:text-[#4267B2]'
	},
	{
		label: 'discord',
		src: '#',
		icon: IconDiscord,
		hover: 'hover:text-[#5865F2]'
	}
]
