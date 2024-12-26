import { CaseType } from '../types/case'
import { CaseConfigProps } from '../ui/CaseCard/CaseCardView'

import IconDiscount from '@/shared/assets/icons/icon-discount.svg'
import IconLightning from '@/shared/assets/icons/icon-lightning.svg'
import IconLock from '@/shared/assets/icons/icon-lock.svg'
import IconTimer from '@/shared/assets/icons/icon-timer-3.svg'

interface Props extends CaseConfigProps {}

export const caseTypeToProps: Record<CaseType, Props> = {
	[CaseType.COMMON]: {},
	[CaseType.AVAILABELED_IN]: {
		badgeMode: 'wide',
		icon: IconLock,
		iconTheme: 'yellow',
		iconShadow: true
	},
	[CaseType.DISCOUNTED]: {
		icon: IconDiscount,
		badgeTheme: 'gradient-green',
		iconTheme: 'outline-green',
		iconShadow: true
	},
	[CaseType.EXPIRED_AT]: {
		theme: 'gradient-yellow',
		badgeMode: 'wide',
		icon: IconTimer,
		iconTheme: 'grey',
		iconShadow: true
	},
	[CaseType.LIMITED]: {
		icon: IconLightning,
		iconTheme: 'outline-yellow',
		iconShadow: true
	},
	[CaseType.LOCKED]: {
		icon: IconLock
	}
}
