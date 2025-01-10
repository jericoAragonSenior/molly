import { CaseType, ICase } from '@/shared/types/case'

export const caseList: ICase[] = [
	{
		id: 'case/1',
		name: 'Cases Magic',
		picUrl: '/images/case/case-preview-1.png',
		price: '',
		type: CaseType.AVAILABELED_IN,
		availableIn: '2024-10-22'
	},
	{
		id: 'case/2',
		name: 'Cases Magic',
		picUrl: '/images/case/case-preview-2.png',
		price: '15.50',
		type: CaseType.DISCOUNTED,
		oldPrice: '25.50',
		discount: '25'
	},
	{
		id: 'case/3',
		name: 'Cases Magic',
		picUrl: '/images/case/case-preview-3.png',
		price: '15.50',
		type: CaseType.EXPIRED_AT,
		expiredAt: '2024-12-12'
	},
	{
		id: 'case/4',
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
