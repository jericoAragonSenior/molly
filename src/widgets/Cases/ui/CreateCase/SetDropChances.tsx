"use client"
import { useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import { useTranslations } from "next-intl";
import DropChance from "./DropChance";

import { chances } from "../../model/items";
import clsx from "clsx";
import cls from "../Cases.module.sass"

const SetDropChances = () => {

    // For translation
    const t = useTranslations();

    // The values are to reference swiper and swiper index.
    const [swiperIndex, setSwiperIndex] = useState<number>(0)
    const swiperRef = useRef<SwiperRef>(null)


    // For slider(Select Images)
    const slides = chances.map((item) => (
        <SwiperSlide
            key={item.id}
        >
            <DropChance />
        </SwiperSlide>
    ))

    return (
        <div className={clsx("flex flex-col relative")}>
            <div className="flex justify-between">
                <span className="text-[14px] font-[500] text-white">{t('create_case.set_drop_chances')}</span>
                <span className="text-[14px] font-[500] text-[#17E2A5]">100%</span>
            </div>
            <div className={clsx("h-[406px] overflow-hidden")}>
                <Swiper
                    direction="vertical"
                    spaceBetween={1}
                    slidesPerView={3}
                    loop={false}
                    tabIndex={swiperIndex}
                    ref={swiperRef}
                    wrapperClass='flex flex-col h-full gap-1'
                    className='relative h-full'
                >
                    {slides}

                </Swiper>
            </div>
        </div>
    )
}

export default SetDropChances;