"use client"
import clsx from 'clsx';
import cls from './IntroBar.module.sass'
import { useCommonStore } from '@/entities/Common/model/store';
import { useEffect } from 'react';

import { useTranslations } from 'next-intl';

interface IntroBarProps {
    icon: React.ReactNode
    title: string
    content: string
    buttons: React.ReactNode
}

const IntroBar = ({ icon, title, content, buttons }: IntroBarProps) => {

    const t = useTranslations();

    const setItemPosition = useCommonStore(state => state.setItemPosition)

    useEffect(() => {
        setItemPosition("left")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={clsx('h-auto w-full flex justify-between items-center px-5', cls.header_gradient)}>
            <div className='flex gap-7 md:gap-3 items-center'>
                <div className='flex items-center gap-5'>
                    <div className='fill-white w-6 h-6 '>
                        {icon}
                    </div>
                    <span className='font-[1000] font-[Gotham Ultra] italic text-[20px] sm:hidden block'>{t(title).toUpperCase()}</span>
                </div>
                <div className='w-[2px] bg-[#1C2232] h-8 rotate-[20deg]'></div>
                <span className='font-[Gotham Ultra] italic text-[12px] text-[#545778] ,block md:hidden'>{t(content)}</span>
            </div>
            {buttons}

        </div>
    )
}

export default IntroBar;