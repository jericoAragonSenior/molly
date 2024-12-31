"use client"
import clsx from 'clsx';
import cls from './Faq.module.sass'
import { useCommonStore } from '@/entities/Common/model/store';
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

import IconFaq from '@/shared/assets/icons/icon-faq-white.svg'
import IconSupportBtn from '@/shared/assets/icons/icon-support-btn.svg'
import IconQuestion from '@/shared/assets/icons/icon-question.svg'
import Button from '@/shared/ui/Button/Button';
import IntroBar from '@/shared/ui/IntroBar/IntroBar';

const FaqHeader = () => {

    const t = useTranslations();

    const setItemPosition = useCommonStore(state => state.setItemPosition)

    useEffect(() => {
        setItemPosition("left")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <IntroBar title={'sidebar.faq'} content={'faq_bar.title'}
            icon={<IconFaq />}
            buttons={
                <Button disableAnimation classNames={{ base: clsx('w-[140px] h-[45px] flex items-center relative', cls.fnav_item), content: clsx('w-full h-full flex justify-center items-center') }}>
                    <div className='w-full h-full top-0 right-0 absolute'>
                        <IconSupportBtn />
                    </div>
                    <div className='flex gap-3 items-center px-2 justify-center w-full h-full z-[40] '>
                        <div className={clsx('w-full h-[30px]', cls.fnav_item_icon)}>
                            <IconQuestion />
                        </div>
                        <span className={clsx('font-[700]  text-[#D1D9EB] text-[12px] font-[Gotham Medium]')}>{t('pages.support')}</span>
                    </div>
                </Button>
            }
        />
    )
}

export default FaqHeader;