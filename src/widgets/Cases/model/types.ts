// Select item to create case interface
export interface IType {
	id: number
	type: string
}

// Select Image interface(To create case)
export interface ISelectImage {
	id: string
	picUrl: string
}

//Image background Type(To create case)
export type ImageBgType = 'yellow' | 'pink' | 'purple' | 'blue' | 'limit_blue'

// Chance interface(To create case)
export interface IChance {
	id: string
	name: string
	content: string
	price: number
	percent: number
	add_price: number
	picUrl: string
	imageType: ImageBgType
}

// Select type interface(To create case)
export interface ICaseType {
	id: number
	type: string
}

// Case type interface (To create case)
export interface ICaseItemType {
	id: string
	title: string
	content: string
	percent: number
	picUrl: string
	name: string
	price: string
	type: ImageBgType
}

// Progress type interface
export interface IProgress {
	id: number
	title: string
	min: number
	max: number
}