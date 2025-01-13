import clsx from 'clsx'
import cls from "./Header.module.sass"
import { FC } from 'react'

import { Link } from '@/shared/config/i18n/navigation'

import { HeaderBar } from './HeaderBar'
import { HeaderNav } from './HeaderNav'

interface HeaderDesktopProps {
	className?: string
}

export const HeaderDesktop: FC<HeaderDesktopProps> = ({ className }) => {
	return (
		<header className={clsx(className, 'flex items-center justify-between gap-2 relative')}>
			<div className={clsx('absolute left-1/2 md:!top-0', cls.logo_center)}>
				<Link
					href='/'
					className='w-[386px] h-[92px] 3xl:w-[300px] 3xl:h-[72px] flex justify-center items-center'
					style={{
						backgroundImage: 'url(/images/logo-header.svg)',
						backgroundSize: 'contain',
						backgroundRepeat: 'no-repeat'
					}}
				></Link>
			</div>
			<div className='flex justify-between w-full md:mt-[92px] 3sm:flex-col-reverse 3sm:justify-center 3sm:items-center 3sm:gap-3 3sm:mb-0.5'>
				<HeaderNav />
				<HeaderBar />
			</div>
		</header>
	)
}
