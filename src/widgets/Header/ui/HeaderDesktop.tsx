import clsx from 'clsx'
import { FC } from 'react'

import { Link } from '@/shared/config/i18n/navigation'

import { HeaderBar } from './HeaderBar'
import { HeaderNav } from './HeaderNav'

interface HeaderDesktopProps {
	className?: string
}

export const HeaderDesktop: FC<HeaderDesktopProps> = ({ className }) => {
	return (
		<header className={clsx(className, 'flex items-center relative justify-center gap-2')}>
			<div className={clsx('absolute left-10')}>
				<HeaderNav />
			</div>
			<Link
				href='/'
				className='shrink-0 self-start w-[386px] h-[92px] 3xl:w-[300px] 3xl:h-[72px]'
				style={{
					backgroundImage: 'url(/images/logo-header.svg)',
					backgroundSize: 'contain',
					backgroundRepeat: 'no-repeat'
				}}
			></Link>
			<div className={clsx('absolute right-10')}>
				<HeaderBar />
			</div>
		</header>
	)
}
