export interface IListItem {
	id: string
	startIcon?: React.ReactNode
	endIcon?: React.ReactNode
	title: string
}

export type ClickSide = 'left' | 'right'