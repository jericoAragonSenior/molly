import clsx from "clsx"

import { ICaseItemType } from "../model/types"
import BigCaseItem from "@/entities/CaseItem/ui/BigCaseItem"
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'
import { Autoplay } from 'swiper/modules';
import { Swiper as SwiperInstance } from 'swiper'
import CaseItem from "@/entities/CaseItem/ui/CaseItem"
import { useEffect, useRef, useState } from "react";
import { useCommonStore } from "@/entities/Common/model/store";

interface CaseSectionProps {
    className?: string
    items: ICaseItemType[]
    isBig?: boolean
    selectedItem: number
}

const CaseSection = ({ className, items, isBig = true, selectedItem }: CaseSectionProps) => {


    const swiper = useRef<null | SwiperInstance>(null);

    const [speed, setSpeed] = useState<number>(100);

    const [time, setTime] = useState<number>(500);

    const [isSelected, setIsSelected] = useState<boolean>(false)


    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const setCurrentCaseNumber = useCommonStore(state => state.setCurrentCaseNumber)
    const currentCaseNumber = useCommonStore(state => state.currentCaseNumber)

    

    useEffect(() => {
        const randomTime = Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
        // Define the interval
        intervalRef.current = setInterval(() => {
                if (swiper.current?.autoplay) {
                    if (intervalRef.current) {
                        setSpeed(time + 150);
                        clearInterval(intervalRef.current);
                        setIsSelected(true)
                    }

            }
        }, randomTime);

        // Cleanup function to clear the interval on unmount
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [time]);


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


    // Handle function
    const handleSlideChange = (newSwiper: any) => {
        if (isSelected == true && selectedItem == newSwiper.realIndex) {
            swiper.current?.autoplay.stop();
            setCurrentCaseNumber(currentCaseNumber + 1);
            setIsSelected(false)
        }
    };

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
                onSlideChange={handleSlideChange}
            >
                {cases}
            </Swiper>
        </div>
    )
}

export default CaseSection