"use client"
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { FC, useEffect, useState } from 'react'

import { HeaderSettings } from '@/features/HeaderSettings/ui/HeaderSettings'

import IconCheckRounded from '@/shared/assets/icons/icon-check-rounded.svg'
import IconLogout from '@/shared/assets/icons/icon-logout-2.svg'
import IconSignIn from '@/shared/assets/icons/icon-signin.svg'

import cls from './MobileMenu.module.sass'
import { useCommonStore } from '@/entities/Common/model/store'
import { useModal } from '@/shared/context/ModalContext'
import SignInModal from '@/widgets/Auth/SignInModal'
import SignUpModal from '@/widgets/Auth/SignUpModal'
import ForgetPassword from '@/widgets/Auth/ForgetPasswordModal'

import HeaderIcon from '@/shared/assets/icons/icon-auth.svg'
import Button from '@/shared/ui/Button/Button'

interface MobileMenuHeaderProps {
	className?: string
}

export const MobileMenuHeader: FC<MobileMenuHeaderProps> = ({ className }) => {
	const t = useTranslations()
	const signinState = useCommonStore(state => state.signinState)
	const setSigninState = useCommonStore(state => state.setSigninState)

	const [isSignin, setIsSignin] = useState(signinState);

	const { openModal } = useModal();
	const { closeModal } = useModal();

	const signIn = () => {
		setSigninState(true)
		closeModal();
	}


	const logOut = () => {
		setSigninState(false)
	}


	const signInModal = () => {
		openModal(
			<SignInModal onClickForgetPassword={foregetPassword} onClickSignUp={signUpModal} onClickSignIn={signIn} />,
			{},
			<HeaderIcon />,
			t('auth.sigin_btn_text'),
			{
				body: '',
				modal: 'relative w-full lg:h-full h-screen flex lg:items-start justify-center items-center'
			},
			true
		);
	};

	const signUpModal = () => {
		openModal(
			<SignUpModal onClickSignIn={signInModal} />,
			{},
			<HeaderIcon />,
			t('auth.signup_btn_text'),
			{
				body: '',
				modal: 'relative w-full lg:h-full h-screen flex lg:items-start justify-center items-center'
			},
			true
		);
	}

	const foregetPassword = () => {
		openModal(
			<ForgetPassword />,
			{},
			<HeaderIcon />,
			t('auth.password_recovery'),
			{
				body: '',
				modal: 'relative w-full lg:h-full h-screen flex justify-center items-center'
			},
			true
		);
	}


	useEffect(() => {
		setIsSignin(signinState)
	}, [signinState])

	return (
		<div className={clsx(cls.header, className)}>
			{
				isSignin &&
				<div className='flex items-center gap-1'>

					<IconCheckRounded className='shrink-0 w-[16px] h-[16px] fill-primary md:w-[10px] md:h-[10px]' />
					<span className='font-primary-bold text-sm md:text-xs'>Aleksandr</span>
				</div>
			}
			<div className='ml-auto flex items-center gap-4'>
				<HeaderSettings />
				<div className='shrink-0 w-5 h-5 md:w-3 md:h-3 cursor-pointer'>
					{
						isSignin ?

							<Button onPress={logOut}>
								<IconLogout className='shrink-0 w-full h-full fill-[#364055]' />
							</Button>
							:
							<Button onPress={signInModal}>
								<IconSignIn className='shrink-0  fill-[#fff] w-[16px] h-[16px]' />
							</Button>
					}
				</div>
			</div>
		</div>
	)
}
