"use client"
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'

import IconLightning from '@/shared/assets/icons/icon-lightning.svg'
import Backshape from '@/shared/assets/open-case-backshape.svg'
import openCaseBg from '@/shared/assets/open-case-bg.png'
import IconSpeaking from '@/shared/assets/icons/icon-speaking-message.svg'
import { CaseBadge } from '@/shared/ui/CaseCard/CaseBadge'

import clsx from 'clsx'
import cls from './OpenCase.module.sass'
import { useCommonStore } from '@/entities/Common/model/store'
import { useTranslations } from 'next-intl'
import CountCases from './CountCases'

interface OpenCaseProps {
	className?: string
}

export const OpenCase: FC<OpenCaseProps> = ({ className }) => {

	// For translation
	const t = useTranslations();

	const setItemPosition = useCommonStore(state => state.setItemPosition)
	const caseCount = useCommonStore(state => state.caseCount)
	const setCaseCount = useCommonStore(state => state.setCaseCount)


	// For case count
	const [caseCountState, setCaseCountState] = useState<number>(0);

	// Init function
	useEffect(() => {
		setItemPosition("left")
		// eslint-disable-next-line react-hooks/exhaustive-deps
		setCaseCount(0)
	}, [])

	
	// Case count hook
	useEffect(() => {
		setCaseCountState(caseCount);
	}, [caseCount])

	return (
		<div className={clsx(cls.base, className)}>
			

			<div className={cls.container}>
				<div className={cls.type}>{t('open_case.selected_top')}</div>
				<div
					className={cls.inner}
					style={{ backgroundImage: `url(${openCaseBg.src})` }}
				>
					<Backshape className={cls.backshape} />
					<div className={clsx(cls.backshape, '3sm:!left-0 3sm:!transform-none 3sm:!top-0', caseCountState == 0 ? "flex" : "hidden")}>
						<Image
							src={'/images/case/case-full-2.png'}
							alt='case'
							width={320}
							height={320}
						/>
					</div>
					<div className={clsx(cls.grid, 'justify-between w-full 2sm:flex-col flex-row 2sm:justify-center', caseCountState == 0 ? "flex" : "hidden")}>
						<div className={clsx(cls.desc, 'pt-20 pl-20 3sm:pl-0 2sm:pt-2')}>
							<div className={cls.desc_title}>{t('open_case.limited_edition')}</div>
							<div className={cls.desc_text}>{t('open_case.limited_content')}</div>
							<CaseBadge
								label='2455 / 10000'
								icon={IconLightning}
								iconTheme='yellow'
								className={clsx(cls.desc_badge, "!relative !left-0 !transform-none")}
							/>
						</div>
						<div className={clsx('h-full flex justify-end sm:-mr-7')}>
							<div className={clsx('absolute', cls.rotate_180)}>
								<Image
									src={'/images/case/girl-1.png'}
									alt='case'
									width={320}
									height={320}
								/>
							</div>
							<div className={clsx(cls.speaking_body, 'w-[150px] h-[60px] mt-[80px] mr-[200px]')}>
								<div className=' absolute -top-4'>
									<IconSpeaking />
								</div>
								<div className={clsx(cls.speaking_body_inner, 'w-full h-full')}>
									<div className='flex flex-col gap-0.5 h-full justify-center items-center'>
										<span className='text-[12px] font-[500] text-[#D1D9EB]'>There&apos;s something</span>
										<div className='flex gap-0.5'>
											<span className='text-[12px] font-[500] text-[#FDCD24]'>interesting</span>
											<span className='text-[12px] font-[500] text-[#D1D9EB]'>there!</span>
										</div>
									</div>
									
								</div>
							</div>
						</div>

					</div>
					<div className={clsx('w-full h-full z-10 relative py-2 flex justify-center items-center', caseCountState == 0 ? "hidden" : "flex")}>
						<CountCases />
					</div>
					
				</div>
			</div>
			<div className={clsx('relative w-full justify-center flex overflow-hidden')}>
				<div className={clsx(cls.border_bg, 'h-0.5 bg-opacity-10 opacity-90 absolute w-full')}>

				</div>
				<div className={clsx(" border-[2px] w-2/5	 border-dotted")}>

				</div>
			</div>
		</div>
	)
}
