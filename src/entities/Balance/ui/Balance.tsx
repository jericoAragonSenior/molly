import clsx from 'clsx'
import { FC } from 'react'

import IconBalanceAdd from '@/shared/assets/icons/icon-balance-add.svg'
import IconPoint from '@/shared/assets/icons/icon-balance-point.svg'

import cls from './Balance.module.sass'

interface BalanceProps {
	className?: string
}

export const Balance: FC<BalanceProps> = ({ className }) => {
	return (
		<div className={clsx(cls.container, className)}>
			<button className={cls.item_btn_add}>
				<IconBalanceAdd className={cls.item_btn_add_icon} />
			</button>
			<div className={clsx(cls.item_wrapper, cls._green, 'z-[2]')}>
				<div className={clsx(cls.item, 'pl-9 pr-3')}>
					<div className={clsx(cls.label, 'ml-auto')}>$ 1.740</div>
				</div>
			</div>
			<div className={clsx(cls.item_wrapper, cls._yellow, 'relative z-[1] -translate-x-3 3lg:transform-none')}>
				<div className={clsx(cls.item, 'pl-[25px] pr-3 gap-1.5 lg:gap-1')}>
					<div className={clsx(cls.icon)}>
						<IconPoint className='w-4 h-4 2md:w-3 2md:h-3' />
					</div>
					<div className={cls.label}>5.500</div>
				</div>
			</div>
		</div>
	)
}
