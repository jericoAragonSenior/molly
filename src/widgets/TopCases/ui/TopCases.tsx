// 'use client'
import { caseList } from '../model/items'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

import { CaseCard } from '@/entities/CaseCard/ui/CaseCard'

import IconCase from '@/shared/assets/icons/icon-case-grey.svg'
import Button from '@/shared/ui/Button/Button'
import { SectionHeader } from '@/shared/ui/SectionHeader/SectionHeader'

import cls from './TopCases.module.sass'

interface TopCasesProps {
	className?: string
}

export const TopCases: FC<TopCasesProps> = ({ className }) => {
	const t = useTranslations()

	const cases = caseList.map(item => (
		<div
			key={item.id}
			className='flex justify-center'
		>
			<CaseCard
				{...item}
				className='max-w-[200px] w-full 3sm:max-w-[175px]'
			/>
		</div>
	))

	return (
		<div className={clsx(className)}>
			<SectionHeader
				title={t('topcases.title')}
				icon={<IconCase />}
				subtitle={t('topcases.subtitle')}
				barElement={
					<Button
						theme='grey-4'
						strokeSize='reg'
						backdrop
						hexagon
						hexagonAxis='x'
						classNames={{
							base: 'h-10',
							content: 'px-6 text-xs'
						}}
					>
						See more
					</Button>
				}
			/>
			<div className={clsx(cls.grid, 'mt-6')}>{cases}</div>
		</div>
	)
}
