import { RarityTheme } from '@/shared/const/rarity'

export interface IGiveawayItem {
	id: string
	picUrl: string
	title: string
	type: string
	price: string
	rarity: RarityTheme
}
