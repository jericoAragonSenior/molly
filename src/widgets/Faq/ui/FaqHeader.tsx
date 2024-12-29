"use client"
import clsx from 'clsx';
import cls from './Faq.module.sass'
import { useCommonStore } from '@/entities/Common/model/store';
import { useEffect } from 'react';

import IconFaq from '@/shared/assets/icons/icon-faq-white.svg'
import IconSupportBtn from '@/shared/assets/icons/icon-support-btn.svg'
import IconQuestion from '@/shared/assets/icons/icon-question.svg'
import Button from '@/shared/ui/Button/Button';
import { useTranslations } from 'next-intl';

const FaqHeader = () => {

    const t = useTranslations();

    const setItemPosition = useCommonStore(state => state.setItemPosition)

    useEffect(() => {
        setItemPosition("left")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={clsx('h-[80px] w-full flex justify-between items-center px-5', cls.header_gradient)}>
            <div className='flex gap-7 items-center'>
                <div className='flex items-center gap-5'>
                    <div className='fill-white w-6 h-6'>
                        <IconFaq />
                    </div>
                    <span className='font-[1000] font-[Gotham Ultra] italic text-[20px]'>{t('pages.faq')}</span>
                </div>
                <div className='w-[2px] bg-[#1C2232] h-8 rotate-[20deg]'></div>
                <span className='font-[Gotham Ultra] italic text-[12px] text-[#545778] ,block md:hidden'>Find the question you are interested in and get a quick answer.</span>
            </div>
            <Button classNames={{ base: clsx('w-[140px] h-[45px] flex items-center relative', cls.fnav_item), content: clsx('w-full h-full flex justify-center items-center') }}>
                <div className='w-full h-full top-0 right-0 absolute'>
                    <IconSupportBtn />
                </div>
                <div className='flex gap-3 items-center px-2 justify-center w-full h-full z-[100] '>
                    <div className={clsx('w-full h-[30px]', cls.fnav_item_icon)}>
                        <IconQuestion />
                    </div>
                    <span className={clsx('font-[700]  text-[#D1D9EB] text-[12px] font-[Gotham Medium]')}>{t('pages.support')}</span>
                </div>
            </Button>

        </div>
    )
}

export default FaqHeader;