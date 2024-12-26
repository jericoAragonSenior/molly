'use state'

import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

export type Type = 'case' | 'weapon'

export type PriceRange = [number, number]

interface StateWithIndexSignature {
	[key: string]: any
}

interface IState extends StateWithIndexSignature {
	type: Type
	search: string
	weaponType: string
	mode: string
	priceRange: PriceRange
	isEnoughBalance: boolean
}

interface IActions {
	setFilter: (name: string, value: any) => void
	clearFilter: () => void
}

export const initialState: IState = {
	type: 'case',
	search: '',
	weaponType: '',
	mode: '',
	priceRange: [0, 20000],
	isEnoughBalance: false
}

export const useCasesToolbarStore = create<IState & IActions>()(
	devtools(
		persist(
			immer(set => ({
				...initialState,
				setFilter: (name, value) =>
					set(
						state => {
							state[name] = value
						},
						undefined,
						'SET_FILTER'
					),
				clearFilter: () => set({ ...initialState }, undefined, 'CLEAR_FILTER')
			})),
			{
				name: 'cases_toolbar'
			}
		),
		{
			name: 'CASES_TOOLBAR'
		}
	)
)
