'use client'

import { newsList } from '../model/items'
import clsx from 'clsx'
import { FC } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useAppResponsive } from '@/shared/lib/useResponsive'
import { MainNewsCard } from '@/shared/ui/MainNewsCard/MainNewsCard'

import cls from './MainNews.module.sass'

interface MainNewsProps {
	className?: string
}

export const MainNews: FC<MainNewsProps> = ({ className }) => {
	const breakpoints = useAppResponsive()
	


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
