'use client'

import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

export interface IState {
	menuActive: boolean
}
export interface IActions {
	setMenuActive: (value: boolean) => void
}

export const initialState: IState = {
	menuActive: false
}

export const useMobileStore = create<IState & IActions>()(
	devtools(
		immer(
			persist(
				set => ({
					...initialState,
					setMenuActive: value =>
						set(
							state => {
								state.menuActive = value
							},
							undefined,
							'SET_MENU_ACTIVE'
						)
				}),
				{
					name: 'mobile'
				}
			)
		),
		{
			name: 'COMMON'
		}
	)
)
