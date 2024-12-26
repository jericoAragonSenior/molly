'use client'

import { giveawayItemList } from '../model/items'
import { FC } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss/pagination'

import { useAppResponsive } from '@/shared/lib/useResponsive'
import { GiveawayMiniCard } from '@/shared/ui/GiveawayMiniCard/GiveawayMiniCard'

import cls from './Giveaway.module.sass'

interface GiveawaySliderProps {
	className?: string
}

export const GiveawaySlider: FC<GiveawaySliderProps> = ({ className }) => {
	const { ['3xl']: is3xl, lg, md } = useAppResponsive()

	const items = giveawayItemList.map(item => (
		<SwiperSlide
			key={item.id}
			className={cls.slide}
		>
			<GiveawayMiniCard
				picUrl={item.picUrl}
				title={item.title}
				theme={item.rarity}
				type={item.type}
				price={item.price}
				className='max-w-[232px] w-full 3xl:max-w-full 3sm:mx-4'
			/>
		</SwiperSlide>
	))

	return (
		<div className={className}>
			<Swiper
				modules={[Autoplay, Pagination]}
				loop
				// autoplay={{ delay: 3000 }}
				pagination={{
					clickable: true,
					dynamicBullets: true,
					dynamicMainBullets: 3
				}}
				spaceBetween={is3xl ? 0 : 30}
				slidesPerView={is3xl ? 1 : lg ? 3 : md ? 2 : 1}
				className={cls.slider_inner}
			>
				{items}
			</Swiper>
		</div>
	)
}
