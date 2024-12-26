import IconCaseBattle from '@/shared/assets/icons/icon-case-battle.svg'
import IconCaseOpen from '@/shared/assets/icons/icon-case-open.svg'
import IconContract from '@/shared/assets/icons/icon-contract.svg'
import IconUpgrade from '@/shared/assets/icons/icon-upgrade.svg'
import { AppRoute } from '@/shared/const/pages'
import { ISidebarNavItem } from '@/shared/ui/SidebarNav/SidebarNav'

export const navItems: ISidebarNavItem[] = [
	{
		label: 'pages.short.cases_opening',
		src: AppRoute.CASES,
		icon: IconCaseOpen
	},
	{
		label: 'pages.short.battles',
		src: AppRoute.BATTLE_CASES,
		icon: IconCaseBattle
	},
	{
		label: 'pages.short.upgrades',
		src: AppRoute.UPGRADES,
		icon: IconUpgrade
	},
	{
		label: 'pages.short.contracts',
		src: AppRoute.CONTRACTS,
		icon: IconContract
	}
]
