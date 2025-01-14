"use client"
import clsx from 'clsx';
import cls from './IntroBar.module.sass'

import { useTranslations } from 'next-intl';

interface IntroBarProps {
    icon: React.ReactNode
    title: string
    content: string
    buttons: React.ReactNode
}

const IntroBar = ({ icon, title, content, buttons }: IntroBarProps) => {

    const t = useTranslations();


    return (
        <div className={clsx('h-auto w-full flex justify-between items-center px-5 2sm:px-0 py-[14px]', cls.header_gradient)}>
            <div className='flex gap-7 md:gap-3 items-center 2sm:gap-1'>
                <div className='flex items-center gap-5 2sm:gap-1'>
                    <div className='fill-white w-6 h-6 '>
                        {icon}
                    </div>
                    <span className='font-[1000] font-[Gotham Ultra] italic text-[20px] block'>{t(title).toUpperCase()}</span>
                </div>
                <div className='w-[2px] bg-[#1C2232] h-8 rotate-[20deg] md:hidden flex'></div>
                <span className='font-[Gotham Ultra] italic text-[12px] text-[#545778] ,block lg:hidden'>{t(content)}</span>
            </div>
            {buttons}

        </div>
    )
}

export default IntroBar;