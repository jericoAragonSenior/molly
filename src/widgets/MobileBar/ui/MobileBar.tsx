'use client'

import { navItems } from '../model/items'
import { Portal } from '@radix-ui/react-portal'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

import { useCommonStore } from '@/entities/Common/model/store'
import { useMobileStore } from '@/entities/Mobile/model/store'

import { Link, usePathname } from '@/shared/config/i18n/navigation'
import Button from '@/shared/ui/Button/Button'
import { Media } from '@/shared/ui/Media/Media'

import cls from './MobileBar.module.sass'

interface MobileBarProps {
	className?: string
}

export const MobileBar: FC<MobileBarProps> = ({ className }) => {
	const t = useTranslations()
	const pathname = usePathname()
	const menuActive = useMobileStore(state => state.menuActive)
	const setMenuActive = useMobileStore(state => state.setMenuActive)
	const setViewChatHidden = useCommonStore(state => state.setViewChatHidden)

	return (
		<Media lessThan='lg'>
			<Portal className={clsx(cls.base, className)}>
				<div className={cls.container}>
					<div className='grow flex justify-center'>
						<div className={clsx(cls.nav)}>
							{navItems.map(item => (
								<Link
									href={item.src}
									key={item.src}
									className={clsx(cls.item, {
										[cls.active]: pathname === item.src
									})}
								>
									<div className={cls.item_icon}>
										<item.icon />
									</div>
									<div className={clsx(cls.item_label)}>{t(item.label)}</div>
								</Link>
							))}
						</div>
					</div>
					<Button
						theme='grey-5'
						strokeSize='reg'
						classNames={{
							base: [clsx(cls.menu_btn, { [cls.active]: menuActive })],
							content: cls.menu_btn_content
						}}
						onClick={() => {
							setMenuActive(!menuActive)
							setViewChatHidden(true)
						}}
					>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</Button>
				</div>
			</Portal>
		</Media>
	)
}
