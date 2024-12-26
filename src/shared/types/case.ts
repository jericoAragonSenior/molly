/* eslint-disable no-unused-vars */
export enum CaseType {
	COMMON = 'common',
	LOCKED = 'locked',
	LIMITED = 'limit',
	DISCOUNTED = 'discount',
	AVAILABELED_IN = 'available_in',
	EXPIRED_AT = 'expired_at'
}

export interface ICase {
	id: string
	name: string
	picUrl: string
	price: string
	oldPrice?: string
	type: CaseType
	limit?: {
		current: number
		total: number
	}
	discount?: string
	availableIn?: string
	expiredAt?: string
}
