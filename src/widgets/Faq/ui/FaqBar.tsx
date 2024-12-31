
"use client"

import { useAppResponsive } from '@/shared/lib/useResponsive';
import { faqBarItems } from '../model/items';
import FaqBarItem from './FaqBarItem';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'

import 'swiper/css'
import cls from './Faq.module.sass'
import clsx from 'clsx';

import IconSwiper from '@/shared/assets/icons/icon-next-swiper.svg'
import { useRef, useState } from 'react';
import Button from '@/shared/ui/Button/Button';


const FaqBar = () => {

    const breakpoints = useAppResponsive()

    const [swiperIndex, setSwiperIndex] = useState<number>(0)
    const swiperRef = useRef<SwiperRef>(null)

    const slides = faqBarItems.map((item, index) => (
        <SwiperSlide
            key={index}
        >
            <FaqBarItem content={item.content} icon={item.icon} key={item.content} />
        </SwiperSlide>
    ))

    const nextSwiper = () => {
        if (swiperRef.current) {
            swiperRef.current?.swiper.slideNext();
            setSwiperIndex(swiperIndex == faqBarItems.length - 1 ? swiperIndex : swiperIndex + 1)
        }
    }

    const prevSwiper = () => {
        if (swiperRef.current) {
            swiperRef.current?.swiper.slidePrev();
            setSwiperIndex(swiperIndex == 0 ? swiperIndex : swiperIndex - 1)
        }
    }

    return (
        <div className='flex relative'>
            <Swiper
                spaceBetween={12}
                slidesPerView={breakpoints?.['3xl'] ? 5 : breakpoints?.md ? 3 : breakpoints?.['sm'] ? 2 : 1}
                loop={false}
                tabIndex={swiperIndex}
                ref={swiperRef}
                className=' relative'
            >
                {slides}
            </Swiper>
            <div className={clsx(cls.item, '!absolute z-[10] right-3 flex justify-center h-full items-center')} >
                <Button className={clsx(cls.swiper_button_next, cls.item_icon, swiperIndex == faqBarItems.length - 1 ? cls.item_disable : '', 'relative')} onPress={nextSwiper}>
                    <IconSwiper />
                </Button>

            </div>

            <div className={clsx(cls.item, '!absolute z-[10] left-3 flex justify-center h-full items-center')} >
                <Button className={clsx(cls.swiper_button_next, cls.item_icon, 'rotate-180')} onPress={prevSwiper}>
                    <IconSwiper />
                </Button>
            </div>
        </div >
    )
}

export default FaqBar;