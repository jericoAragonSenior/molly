"use client"

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'


import CaseImageItem from "./CaseImageItem";

import { selectImages } from '../../model/items';
import { useTranslations } from 'next-intl';
import { useAppResponsive } from '@/shared/lib/useResponsive';


const SelectCaseImage = () => {

    // For Translation
    const t = useTranslations()

    // The values are to reference swiper and swiper index.
    const [swiperIndex, setSwiperIndex] = useState<number>(0)
    const swiperRef = useRef<SwiperRef>(null)

    // responsive
    const breakpoints = useAppResponsive()

    // For slider(Select Images)
    const slides = selectImages.map((item) => (
        <SwiperSlide
            key={item.id}
        >
            <CaseImageItem picUrl={item.picUrl} />
        </SwiperSlide>
    ))

    return (
        <div className='flex flex-col gap-1 w-full overflow-hidden'>
            <span className='text-[10px] text-[#49526D] uppercase'>{t('create_case.select_case_image')}</span>
            <div className='flex relative w-full'>
                <Swiper
                    spaceBetween={breakpoints.lg ? 0 : 0}
                    slidesPerView={breakpoints?.['2sm'] ? 7 : 5}
                    loop={false}
                    tabIndex={swiperIndex}
                    ref={swiperRef}
                    wrapperClass='flex w-full'
                    className='relative w-full'
                >
                    {slides}
                </Swiper>
            </div>

        </div>
    )
}

export default SelectCaseImage;