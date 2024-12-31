'use client'

import { newsList } from '../model/items'
import clsx from 'clsx'
import { FC, useEffect } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useAppResponsive } from '@/shared/lib/useResponsive'
import { MainNewsCard } from '@/shared/ui/MainNewsCard/MainNewsCard'

import cls from './MainNews.module.sass'
import { useCommonStore } from '@/entities/Common/model/store'

interface MainNewsProps {
	className?: string
}

export const MainNews: FC<MainNewsProps> = ({ className }) => {
	const breakpoints = useAppResponsive()
	const setItemPosition = useCommonStore(state => state.setItemPosition)

	useEffect(() => {
		setItemPosition("center")
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])


	const slides = newsList.map(item => (
		<SwiperSlide
			key={item.id}
			className={cls.slide}
		>
			<MainNewsCard
				{...item}
				className='w-full'
			/>
		</SwiperSlide>
	))

	return (
		<div className={clsx(cls.container, className)}>
			<Swiper
				loop
				spaceBetween={12}
				slidesPerView={breakpoints?.['3xl'] ? 3 : breakpoints?.md ? 2 : 1}
				className={cls.slider}
			>
				{slides}
			</Swiper>
		</div>
	)
}
