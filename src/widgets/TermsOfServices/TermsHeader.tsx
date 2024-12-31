"use client"

import IntroBar from "@/shared/ui/IntroBar/IntroBar";
import IconQuestion from '@/shared/assets/icons/icon-question.svg'
import Button from "@/shared/ui/Button/Button"
import IconSupportBtn from '@/shared/assets/icons/icon-support-btn.svg'
import IconTermOfService from '@/shared/assets/icons/icon-terms-of-services-2.svg'

import clsx from "clsx";
import cls from "./Terms.module.sass"
import { useTranslations } from "next-intl";


const TermsHeader = () => {

    const t = useTranslations();


    return (
        <IntroBar title={'terms_data.title'} icon={<IconTermOfService />} content={'terms_data.description'}
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

export default TermsHeader;