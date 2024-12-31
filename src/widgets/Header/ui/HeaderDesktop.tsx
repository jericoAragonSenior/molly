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
		<header className={clsx(className, 'flex items-center justify-between gap-2')}>
			<HeaderNav />
			<Link
				href='/'
				className='shrink-0 self-start w-[386px] h-[92px] 3xl:w-[300px] 3xl:h-[72px] xl:ml-auto'
				style={{
					backgroundImage: 'url(/images/logo-header.svg)',
					backgroundSize: 'contain',
					backgroundRepeat: 'no-repeat'
				}}
			></Link>
			<HeaderBar />
		</header>
	)
}
