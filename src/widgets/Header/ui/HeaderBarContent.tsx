import clsx from 'clsx'
import Image from 'next/image'
import { FC, useState } from 'react'

import { HeaderNotifications } from '@/features/HeaderNotifications/ui/HeaderNotifications'
import { HeaderSettings } from '@/features/HeaderSettings/ui/HeaderSettings'
import { SignIn } from './SingIn'

import { Balance } from '@/entities/Balance/ui/Balance'

import IconLevelFrame from '@/shared/assets/icons/icon-level-frame-header.svg'
import IconAvatarFrame from '@/shared/assets/icons/icon-user-avatar-frame.svg'
import AvatarExample from '@/shared/assets/user-avatar-example.png'
import { Media } from '@/shared/ui/Media/Media'

import cls from './Header.module.sass'

import { useCommonStore } from '@/entities/Common/model/store'
import { useTranslations } from 'next-intl'


interface HeaderBarContentProps {
	className?: string
}

export const HeaderBarContent: FC<HeaderBarContentProps> = ({ className }) => {

	const t = useTranslations()

	const signinState = useCommonStore(state => state.signinState)

	const [isSignin, setIsSignin] = useState(signinState);


	return (
		isSignin == true ?
			<div className={clsx(className, 'flex items-center', cls.bar)}>
				{/* <HeaderLangSwitcher className='mr-3' /> */}
				<div className={cls.balance}>
					<Balance />
				</div>
				<div
					className={clsx(
						cls.avatar_wrapper,
						'ml-2 relative z-[1] shrink-0 w-[58px] h-[58px] flex items-center justify-center cursor-pointer'
					)}
				>
					<IconAvatarFrame
						className={clsx(
							cls.avatar_frame,
							'absolute z-[2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full'
						)}
					/>
					<div className={clsx(cls.avatar_pic, 'relative z-[1]')}>
						<Image
							width={50}
							height={50}
							src={AvatarExample}
							alt='user avatar'
						/>
					</div>
					<div className={cls.level}>
						<IconLevelFrame className={cls.level_frame} />
						<div className={cls.level_count}>99</div>
					</div>
				</div>
				<Media greaterThanOrEqual='lg'>
					<div className={cls.settings}>
						<HeaderSettings className='ml-3' />
					</div>
				</Media>
				<div className={cls.notif}>
					<HeaderNotifications className='ml-2 lg:ml-0' />
				</div>
			</div>
			:
			<Media greaterThanOrEqual='lg'>
				<div className={clsx(cls.settings)}>
					<SignIn />
				</div>
			</Media>
	)
}
