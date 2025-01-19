
"use client"

import { useAppResponsive } from '@/shared/lib/useResponsive';
import { faqBarItems } from '../model/items';
import FaqBarItem from './FaqBarItem';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'

import 'swiper/css'
import cls from './Faq.module.sass'
import clsx from 'clsx';

import IconSwiper from '@/shared/assets/icons/icon-next-swiper.svg'
import { useEffect, useRef, useState } from 'react';


const FaqBar = () => {

    // Get screen size for responsive
    const breakpoints = useAppResponsive()

    // Ref swiper current index
    const [swiperIndex, setSwiperIndex] = useState<number>(0)
    // Ref swiper
    const swiperRef = useRef<SwiperRef>(null)
    // Next button state for Swiper
    const [isNext, setIsNext] = useState<boolean>(true);

    // Generate swiper elements
    const slides = faqBarItems.map((item, index) => (
        <SwiperSlide
            key={index}
        >
            <FaqBarItem content={item.content} icon={item.icon} key={item.content} />
        </SwiperSlide>
    ))

    // To go next function(for swiper)
    const nextSwiper = () => {
        if (swiperRef.current) {
            swiperRef.current?.swiper.slideNext();
            setSwiperIndex(swiperIndex == faqBarItems.length - 1 ? swiperIndex : swiperIndex + 1)
        }
    }

    // To go previous function(for swiper)
    const prevSwiper = () => {
        if (swiperRef.current) {
            swiperRef.current?.swiper.slidePrev();
            setSwiperIndex(swiperIndex == 0 ? swiperIndex : swiperIndex - 1)
        }
    }


    // Hook function
    useEffect(() => {
        if (breakpoints?.['3xl']) {
            setIsNext((faqBarItems.length - 5) > swiperIndex)
        }
        else if (breakpoints?.md) {
            setIsNext((faqBarItems.length - 3) > swiperIndex)
        }
        else if (breakpoints?.['sm']) {
            setIsNext((faqBarItems.length - 2) > swiperIndex)
        }
        else {
            setIsNext((faqBarItems.length - 1) > swiperIndex)
        }
    }, [swiperIndex])

    return (
        <div className='flex relative px-5 md:px-1'>
            <Swiper
                spaceBetween={12}
                slidesPerView={breakpoints?.['3xl'] ? 5 : breakpoints?.md ? 3 : breakpoints?.['sm'] ? 2 : 1}
                loop={false}
                tabIndex={swiperIndex}
                ref={swiperRef}
                className=' relative'
                onSlideChange={(swiper) => { setSwiperIndex(swiper.activeIndex);}}
            >
                {slides}
            </Swiper>
            {
                isNext && 
                <div className={clsx(cls.item, '!absolute z-[10] right-3 flex justify-center h-full items-center')} >
                    <div className={clsx(cls.swiper_button_next, cls.item_icon, swiperIndex == faqBarItems.length - 1 ? cls.item_disable : '', 'relative')} onClick={nextSwiper}>
                        <IconSwiper />
                    </div>
                </div>
            }
            {
                swiperIndex > 0 && 
                <div className={clsx(cls.item, '!absolute z-[10] left-3 flex justify-center h-full items-center')} >
                    <div className={clsx(cls.swiper_button_next, cls.item_icon, 'rotate-180')} onClick={prevSwiper}>
                        <IconSwiper />
                    </div>
                </div>
            }
           
        </div >
    )
}

export default FaqBar;