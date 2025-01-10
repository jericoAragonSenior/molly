import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

import IconPg18 from '@/shared/assets/icons/icon-pg18.svg'
import { Link } from '@/shared/config/i18n/navigation'
import { AppRoute } from '@/shared/const/pages'

import cls from './Footer.module.sass'

interface FooterProps {
	className?: string
}

export const Footer: FC<FooterProps> = ({ className }) => {
	const t = useTranslations()
	return (
		<footer className={clsx(cls.base, className)}>
			<div className={clsx(cls.inner, 'p-5')}>
				<div className='flex items-start justify-between gap-4'>
					<div className='text-xs'>© 2024 – Molly csgo open cases</div>
					<Link
						href='/'
						className='shrink-0 block w-[57px] h-[52px]'
						style={{
							backgroundImage: 'url(/images/logo-footer.svg)',
							backgroundSize: 'contain',
							backgroundRepeat: 'no-repeat'
						}}
					/>
				</div>
				<div className='flex flex-wrap items-center justify-between gap-4 mt-1'>
					<div className='flex items-start gap-2 '>
						<IconPg18 className='shrink-0 w-8 h-8' />
						<p className='max-w-[450px] text-[10px] text-[#566488]'>
							MOLLY LTD: Company number 13246765, 16 John Nicholas Crescent, Ellesmere Port, Cheshire, United Kingdom,
							CH65 2DL
						</p>
					</div>
					<nav className='flex flex-wrap items-center justify-end lg:justify-center gap-x-5 gap-y-3'>
						<Link
							href={AppRoute.USER_AGREEMENT}
							className='text-xs'
						>
							{t('pages.userAgreement')}
						</Link>
						<Link
							href={AppRoute.PROVABLY_FAIR}
							className='text-xs'
						>
							{t('pages.provablyFair')}
						</Link>
						<Link
							href={AppRoute.CONTACTS}
							className='text-xs'
						>
							{t('pages.contacts')}
						</Link>
						<Link
							href={AppRoute.PRIVACY_POLICY}
							className='text-xs'
						>
							{t('pages.privacyPolicy')}
						</Link>
						<Link
							href={AppRoute.TERM_OF_SERVICES}
							className='text-xs'
						>
							{t('pages.tos')}
						</Link>
					</nav>
				</div>
			</div>
		</footer>
	)
}
