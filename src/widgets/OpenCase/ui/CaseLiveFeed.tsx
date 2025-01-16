"use client"
import clsx from "clsx";
import cls from "./OpenCase.module.sass";

import IconCrown from '@/shared/assets/icons/icon-crown-gradient-grey.svg'
import { CardLiveFeed } from "@/shared/ui/CardLiveFeed/CardLiveFeed";

import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from 'swiper/react'

import { itemsList } from "../model/items";

const CaseLiveFeed = () => {

    // For translation
    const t = useTranslations();

    // Build live feeds
    const items = itemsList.map(item => (
        <SwiperSlide
            key={item.id}
        >
            <CardLiveFeed
                title={item.title}
                pic={item.picUrl}
                theme={item.rarity}
                className={cls.card}
            />
        </SwiperSlide>
    ))

    return (
        <div className="w-full overflow-hidden">
            <div className="px-5 w-full h-auto relative flex flex-col mt-2 3sm:px-1">
                <div className={clsx(cls.livefeed_logo, "-mb-[2px] z-[1]")}>
                    <div className={clsx(cls.livefeed_logo_inner, "flex justify-center gap-1 pt-2.5")}>
                        <IconCrown className={clsx("w-3 h-3", cls.crown_bg)} />
                        <span className="text-[8px] text-[#D1D9EB] uppercase">{t('open_case.top_drops')}</span>
                    </div>
                </div>
                <div className={clsx(cls.livefeed_container)}>
                    <div className={clsx(cls.livefeed_container_inner, 'overflow-hidden')}>
                        <div className="relative w-full h-full z-20 p-1 flex gap-0.5">
                            <Swiper
                                spaceBetween={2}
                                slidesPerView={'auto'}
                                loop={true}
                                wrapperClass={clsx('flex w-full',)}
                                className='relative w-full'
                                tabIndex={8}
                                direction={'horizontal'}
                            >
                                {items}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default CaseLiveFeed;