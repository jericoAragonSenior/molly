import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FC } from 'react'

import IconLightning from '@/shared/assets/icons/icon-lightning.svg'
import Backshape from '@/shared/assets/open-case-backshape.svg'
import openCaseBg from '@/shared/assets/open-case-bg.png'
import HeaderBg from '@/shared/assets/section-header-bg-top.svg'
import { CaseBadge } from '@/shared/ui/CaseCard/CaseBadge'

import cls from './OpenCase.module.sass'

interface OpenCaseProps {
	className?: string
}

export const OpenCase: FC<OpenCaseProps> = ({ className }) => {
	const t = useTranslations()
	return (
		<div className={clsx(cls.base, className)}>
			<div className={cls.title}>Beach Season</div>
			<div className={cls.container}>
				<HeaderBg className={cls.border_top} />
				<div className={cls.type}>selected case</div>
				<div
					className={cls.inner}
					style={{ backgroundImage: `url(${openCaseBg.src})` }}
				>
					<Backshape className={cls.backshape} />
					<div className={cls.grid}>
						<div className={cls.desc}>
							<div className={cls.desc_title}>Limited Edition</div>
							<div className={cls.desc_text}>Open the case before the limit expires!</div>
							<CaseBadge
								label='2455 / 10000'
								icon={IconLightning}
								iconTheme='yellow'
								className={cls.desc_badge}
							/>
						</div>
						<div className={cls.pic}>
							<Image
								src={'/images/case/case-full-2.png'}
								alt='case'
								width={320}
								height={320}
							/>
						</div>
						<div></div>
					</div>
				</div>
			</div>
		</div>
	)
}
