import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

import { HeaderSettings } from '@/features/HeaderSettings/ui/HeaderSettings'

import IconCheckRounded from '@/shared/assets/icons/icon-check-rounded.svg'
import IconLogout from '@/shared/assets/icons/icon-logout-2.svg'

import cls from './MobileMenu.module.sass'

interface MobileMenuHeaderProps {
	className?: string
}

export const MobileMenuHeader: FC<MobileMenuHeaderProps> = ({ className }) => {
	const t = useTranslations()
	return (
		<div className={clsx(cls.header, className)}>
			<div className='flex items-center gap-1'>
				<IconCheckRounded className='shrink-0 w-[16px] h-[16px] fill-primary md:w-[10px] md:h-[10px]' />
				<span className='font-primary-bold text-sm md:text-xs'>Aleksandr</span>
			</div>
			<div className='ml-auto flex items-center gap-2'>
				<HeaderSettings />
				<div className='shrink-0 w-5 h-5 md:w-3 md:h-3 cursor-pointer'>
					<IconLogout className='shrink-0 w-full h-full fill-[#364055]' />
				</div>
			</div>
		</div>
	)
}
