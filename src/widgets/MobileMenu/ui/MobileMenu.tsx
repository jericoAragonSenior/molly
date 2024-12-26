'use client'

import { extraNavItems, mainNavItems, socialsitems } from '../model/items'
import { Portal } from '@radix-ui/react-portal'
import { useClickAway } from 'ahooks'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { FC, useEffect, useRef, useState } from 'react'

import { useMobileStore } from '@/entities/Mobile/model/store'

import { Link, usePathname } from '@/shared/config/i18n/navigation'
import { AppRoute } from '@/shared/const/pages'
import { Media } from '@/shared/ui/Media/Media'

import cls from './MobileMenu.module.sass'
import { MobileMenuHeader } from './MobileMenuHeader'

interface MobileMenuProps {
	className?: string
}

const animationVariants = {
	inactive: { opacity: 0, translateY: '5%' },
	active: { opacity: 1, translateY: 0 }
}

export const MobileMenu: FC<MobileMenuProps> = ({ className }) => {
	const t = useTranslations()

	const pathname = usePathname()

	const [active, setActive] = useState(false)
	const menuActive = useMobileStore(state => state.menuActive)
	const setMenuActive = useMobileStore(state => state.setMenuActive)
	const ref = useRef<HTMLDivElement>(null)

	useClickAway(() => setMenuActive(false), ref)

	useEffect(() => {
		if (menuActive) {
			document.body.classList.add('overflow-hidden')
		} else {
			document.body.classList.remove('overflow-hidden')
		}
	}, [menuActive])

	const mainNav = mainNavItems.map(item => (
		<Link
			href={item.src}
			key={item.src}
			className={clsx(cls.nav_main_item, {
				[cls.active]: pathname === item.src
			})}
			onClick={() => setMenuActive(false)}
		>
			<div className={cls.nav_main_item_icon}>
				<item.icon />
			</div>
			<div className={clsx(cls.nav_main_item_label)}>{t(item.label)}</div>
		</Link>
	))

	return (
		<Media lessThan='lg'>
			<Portal className='portal-mobilemenu'>
				<motion.div
					ref={ref}
					initial='inactive'
					animate={menuActive ? 'active' : 'inactive'}
					variants={animationVariants}
					transition={{ duration: 0.2, ease: 'easeOut' }}
					onAnimationStart={variant => {
						variant === 'active' && setActive(true)
					}}
					onAnimationComplete={variant => {
						variant === 'inactive' && setActive(false)
					}}
					className={clsx(cls.base, active && cls.active, 'app-scrollbar', className)}
				>
					<MobileMenuHeader />
					<div className={cls.nav}>
						<div className={cls.nav_main}>{mainNav}</div>
						<div>
							<div className={cls.nav_extra}>
								{extraNavItems.map(item => (
									<Link
										href={item.src}
										key={item.src}
										className={clsx(cls.nav_extra_item, {
											[cls.active]: pathname === item.src
										})}
									>
										<div className={cls.nav_extra_item_inner}>
											<div className={cls.nav_extra_item_icon}>
												<item.icon />
											</div>
											<div className={clsx(cls.nav_extra_item_label)}>{t(item.label)}</div>
										</div>
									</Link>
								))}
							</div>
							<div className={cls.social_list}>
								{socialsitems.map(item => (
									<Link
										key={item.label}
										href={item.src}
										target='_blank'
										rel='noreferrer'
										className={clsx(cls.social, item.hover)}
									>
										<item.icon className={cls.social_icon} />
									</Link>
								))}
							</div>
						</div>
					</div>
					<div className={cls.f}>
						<div className={cls.f_nav}>
							<Link href={AppRoute.USER_AGREEMENT}>{t('pages.userAgreement')}</Link>
							<Link href={AppRoute.PROVABLY_FAIR}>{t('pages.provablyFair')}</Link>
							<Link href={AppRoute.CONTACTS}>{t('pages.contacts')}</Link>
							<Link href={AppRoute.PRIVACY_POLICY}>{t('pages.privacyPolicy')}</Link>
						</div>
						<div className={cls.f_copyright}>© 2024 – Molly csgo open cases</div>
					</div>
				</motion.div>
			</Portal>
		</Media>
	)
}
