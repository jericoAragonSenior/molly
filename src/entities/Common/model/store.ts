'use client'

import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

export interface IState {
	chatHidden: boolean
	chatViewHidden: boolean
	headerBarWidth: number
	caseToolbarInView: boolean
	fixedCaseToolbarInView: boolean
	headerBarInView: boolean
	signinState: boolean
}
export interface IActions {
	setChatHidden: (value: boolean) => void
	setViewChatHidden: (value: boolean) => void
	setHeaderBarWidth: (value: number) => void
	setCaseToolbarInView: (value: boolean) => void
	setFixedCaseToolbarInView: (value: boolean) => void
	setHeaderBarInView: (value: boolean) => void
	setSigninState: (value: boolean) => void
}

export const initialState: IState = {
	chatHidden: false,
	chatViewHidden: false,
	headerBarWidth: 0,
	caseToolbarInView: false,
	fixedCaseToolbarInView: false,
	headerBarInView: false,
	signinState: false,
}

export const useCommonStore = create<IState & IActions>()(
	devtools(
		immer(
			persist(
				set => ({
					...initialState,
					setChatHidden: value =>
						set(
							state => {
								state.chatHidden = value
							},
							undefined,
							'SET_CHAT_HIDDEN'
						),
					setViewChatHidden: value =>
						set(
							state => {
								state.chatViewHidden = value
							},
							undefined,
							'SET_VIEW_CHAT_HIDDEN'
						),
					setHeaderBarWidth: value =>
						set(
							state => {
								state.headerBarWidth = value
							},
							undefined,
							'SET_HEADER_BAR_WIDTH'
						),
					setCaseToolbarInView: value =>
						set(
							state => {
								state.caseToolbarInView = value
							},
							undefined,
							'SET_CASE_TOOLBAR_IN_VIEW'
						),
					setFixedCaseToolbarInView: value =>
						set(
							state => {
								state.fixedCaseToolbarInView = value
							},
							undefined,
							'SET_CASE_TOOLBAR_IN_VIEW_COMPLETE'
						),
					setHeaderBarInView: value =>
						set(
							state => {
								state.headerBarInView = value
							},
							undefined,
							'SET_HEADER_BAR_IN_VIEW'
						),
					setSigninState: value =>
						set(
							state => {
								state.signinState = value
							},
							undefined,
							'SET_SIGN_IN_STATE'
						),
				}),
				{
					name: 'common'
				}
			)
		),
		{
			name: 'COMMON'
		}
	)
)
