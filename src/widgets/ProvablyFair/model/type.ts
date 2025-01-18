export interface IListItem {
	id: string
	startIcon?: React.ReactNode
	endIcon?: React.ReactNode
	title: string
}

// Body data interface
export interface IBody {
	id: string
	title: string
	contents: string[]
}

export type ClickSide = 'left' | 'right'