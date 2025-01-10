import clsx from "clsx"
import cls from "./CaseSection.module.sass"

import { ICaseItemType } from "../model/types"
import BigCaseItem from "@/entities/CaseItem/ui/BigCaseItem"
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'
import CaseItem from "@/entities/CaseItem/ui/CaseItem"

interface CaseSectionProps {
    className?: string
    items: ICaseItemType[]
    isBig?: boolean
}

const CaseSection = ({ className, items, isBig = true }: CaseSectionProps) => {
    

    // Build case item list
    const cases = items.map((item, index) => (
        <SwiperSlide
            key={index}
        >
            {
                isBig == true &&
                    <BigCaseItem className="min-w-[194px]" key={index} title={item.title} picUrl={item.picUrl} type={item.type} name={item.name} />
            }
            {
                isBig == false &&
                    <CaseItem key={index} title={item.title} content={item.content} price={item.price} picUrl={item.picUrl} type={item.type} name={item.name} percent={item.percent} />
            }
        </SwiperSlide>
    ))

    return (
        <div className={clsx(className, 'overflow-hidden min-w-[990px] max-w-[990px]')}>
            <Swiper
                spaceBetween={20}
                slidesPerView={isBig == true ? 5 : 7}
                loop={true}
                wrapperClass='flex w-full'
                className='relative w-full'
                centeredSlides={true}
                centeredSlidesBounds={true}
                centerInsufficientSlides={true}
            >
                {cases}
            </Swiper>
        </div>
    )
}

export default CaseSection