import { RarityTheme } from '@/shared/const/rarity'

export interface LiveFeedItem {
	id: string
	title: string
	rarity: RarityTheme
	picUrl: string
}
