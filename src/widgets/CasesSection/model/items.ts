import IconLockOpen from '@/shared/assets/icons/icon-lock-open.svg'
import IconStar from '@/shared/assets/icons/icon-star.svg'
import { CaseType } from '@/shared/types/case'

import { CaseCategory, CaseSection } from './types'

export const caseSection: Record<CaseCategory, CaseSection> = {
	limited: {
		title: 'Limited Edition',
		icon: IconLockOpen,
		items: [
			{
				id: '1',
				name: 'Cases Magic',
				// picUrl: '/images/case/case-preview-1.png',
				picUrl: '/images/case/case-preview-3d-1.jpg',
				price: '',
				type: CaseType.AVAILABELED_IN,
				availableIn: '2024-10-22'
			},
			{
				id: '2',
				name: 'Cases Magic',
				// picUrl: '/images/case/case-preview-2.png',
				picUrl: '/images/case/case-preview-3d-2.jpg',
				price: '15.50',
				type: CaseType.DISCOUNTED,
				oldPrice: '25.50',
				discount: '25'
			},
			{
				id: '3',
				name: 'Cases Magic',
				// picUrl: '/images/case/case-preview-3.png',
				picUrl: '/images/case/case-preview-3d-3.jpg',
				price: '15.50',
				type: CaseType.EXPIRED_AT,
				expiredAt: '2024-12-12'
			},
			{
				id: '4',
				name: 'Cases Magic',
				// picUrl: '/images/case/case-preview-4.png',
				picUrl: '/images/case/case-preview-3d-4.jpg',
				price: '15.50',
				type: CaseType.LIMITED,
				limit: {
					current: 9415,
					total: 10000
				}
			},
			{
				id: '5',
				name: 'Cases Magic',
				// picUrl: '/images/case/case-preview-1.png',
				picUrl: '/images/case/case-preview-3d-5.jpg',
				price: '',
				type: CaseType.AVAILABELED_IN,
				availableIn: '2024-10-22'
			},
			{
				id: '6',
				name: 'Cases Magic',
				// picUrl: '/images/case/case-preview-2.png',
				picUrl: '/images/case/case-preview-3d-6.jpg',
				price: '15.50',
				type: CaseType.DISCOUNTED,
				oldPrice: '25.50',
				discount: '25'
			},
			{
				id: '7',
				name: 'Cases Magic',
				picUrl: '/images/case/case-preview-3.png',
				price: '15.50',
				type: CaseType.EXPIRED_AT,
				expiredAt: '2024-12-12'
			},
			{
				id: '8',
				name: 'Cases Magic',
				picUrl: '/images/case/case-preview-4.png',
				price: '15.50',
				type: CaseType.LIMITED,
				limit: {
					current: 9415,
					total: 10000
				}
			},
			{
				id: '9',
				name: 'Branded Series',
				picUrl: '/images/case/case-preview-4.png',
				price: '15.50',
				type: CaseType.LIMITED,
				limit: {
					current: 9415,
					total: 10000
				}
			}
		]
	},
	branded: {
		title: 'Branded Series',
		icon: IconStar,
		items: [
			{
				id: '1',
				name: 'Cases Magic',
				picUrl: '/images/case/case-preview-1.png',
				price: '',
				type: CaseType.AVAILABELED_IN,
				availableIn: '2024-10-22'
			},
			{
				id: '2',
				name: 'Cases Magic',
				picUrl: '/images/case/case-preview-2.png',
				price: '15.50',
				type: CaseType.DISCOUNTED,
				oldPrice: '25.50',
				discount: '25'
			},
			{
				id: '3',
				name: 'Cases Magic',
				picUrl: '/images/case/case-preview-3.png',
				price: '15.50',
				type: CaseType.EXPIRED_AT,
				expiredAt: '2024-12-12'
			},
			{
				id: '4',
				name: 'Cases Magic',
				picUrl: '/images/case/case-preview-4.png',
				price: '15.50',
				type: CaseType.LIMITED,
				limit: {
					current: 9415,
					total: 10000
				}
			}
		]
	}
}
