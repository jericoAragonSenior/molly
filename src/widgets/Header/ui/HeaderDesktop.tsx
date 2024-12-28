import clsx from 'clsx'
import { FC } from 'react'

import { Link } from '@/shared/config/i18n/navigation'

import { HeaderBar } from './HeaderBar'
import { HeaderNav } from './HeaderNav'
import { useCommonStore } from '@/entities/Common/model/store'

interface HeaderDesktopProps {
	className?: string
}

export const HeaderDesktop: FC<HeaderDesktopProps> = ({ className }) => {

	const headerState = useCommonStore(state => state.headerState)
	const headerBarInView = useCommonStore(state => state.headerBarInView)


	return (
		<header className={clsx(className, 'flex items-center relative justify-center gap-2')}>
			<div className={clsx('absolute left-10')}>
				<HeaderNav />
			</div>
			<Link
				href='/'
				className={clsx('shrink-0 self-start w-[338px] h-[140px] fixed duration-400 z-[200]', headerBarInView ? '-mt-[42.5px]' : '-mt-[400px]')}
				style={{
					backgroundImage: (headerState == 1 ? 'url(/images/logo-header.svg)' : 'url(/images/logo-header-big.svg)'),
					backgroundSize: 'contain',
					backgroundRepeat: 'no-repeat'
				}}
			></Link>
			<div className='h-[92px] 3xl:h-[72px]'></div>
			<div className={clsx('absolute right-10')}>
				<HeaderBar />
			</div>
		</header>
	)
}
