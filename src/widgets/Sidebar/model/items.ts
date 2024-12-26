import { Social } from '@/entities/Socials/model/types'

import IconCaseBattle from '@/shared/assets/icons/icon-case-battle.svg'
import IconCaseOpen from '@/shared/assets/icons/icon-case-open.svg'
import IconContract from '@/shared/assets/icons/icon-contract.svg'
import IconQuestion from '@/shared/assets/icons/icon-question.svg'
import IconDiscord from '@/shared/assets/icons/icon-soc-dc.svg'
import IconFacebook from '@/shared/assets/icons/icon-soc-fb.svg'
import IconTwitter from '@/shared/assets/icons/icon-soc-tw.svg'
import IconUpgrade from '@/shared/assets/icons/icon-upgrade.svg'
import { AppRoute } from '@/shared/const/pages'
import { ISidebarNavItem } from '@/shared/ui/SidebarNav/SidebarNav'

export const navItems: ISidebarNavItem[] = [
	{
		label: 'sidebar.cases_opening',
		src: AppRoute.CASES,
		icon: IconCaseOpen
	},
	{
		label: 'sidebar.cases_battle',
		src: AppRoute.BATTLE_CASES,
		icon: IconCaseBattle
	},
	{
		label: 'sidebar.upgrades',
		src: AppRoute.UPGRADES,
		icon: IconUpgrade
	},
	{
		label: 'sidebar.contracts',
		src: AppRoute.CONTRACTS,
		icon: IconContract
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

export const footerNavItems: ISidebarNavItem[] = [
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
