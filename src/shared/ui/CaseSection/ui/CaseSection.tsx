import clsx from "clsx"

import { ICaseItemType } from "../model/types"
import BigCaseItem from "@/entities/CaseItem/ui/BigCaseItem"
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'
import { Autoplay } from 'swiper/modules';
import { Swiper as SwiperInstance } from 'swiper'
import CaseItem from "@/entities/CaseItem/ui/CaseItem"
import { useEffect, useRef, useState } from "react";

interface CaseSectionProps {
    className?: string
    items: ICaseItemType[]
    isBig?: boolean
}

const CaseSection = ({ className, items, isBig = true }: CaseSectionProps) => {


    const swiper = useRef<null | SwiperInstance>(null);

    const [speed, setSpeed] = useState<number>(100);

    const [timeIndex, setTimeIndex] = useState<number>(0);

    const [times, setTimes] = useState([700, 600, 700])

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        // Define the interval
        intervalRef.current = setInterval(() => {
            if (timeIndex < times.length) {
                console.log(timeIndex, times[timeIndex]);
                setSpeed(times[timeIndex]);
                setTimeIndex(prevIndex => prevIndex + 1);
            } else {
                if (swiper.current?.autoplay) {
                    if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                        swiper.current.autoplay.stop();
                    }

                }
            }
        }, 1000);

        // Cleanup function to clear the interval on unmount
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [timeIndex, times]);


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
                tabIndex={8}
                autoplay={{ delay: 0 }}
                speed={speed}
                modules={[Autoplay]}
                onSwiper={(swiperInstance) => {
                    // get instance of this swiper and save in a react ref
                    if (!swiperInstance) return;
                    swiper.current = swiperInstance;
                }}
            >
                {cases}
            </Swiper>
        </div>
    )
}

export default CaseSection