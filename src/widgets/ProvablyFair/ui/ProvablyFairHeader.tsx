"use client"

import Button from "@/shared/ui/Button/Button";
import IntroBar from "@/shared/ui/IntroBar/IntroBar";
import clsx from "clsx";

import IconSupportBtn from '@/shared/assets/icons/icon-support-btn.svg'
import IconProvableFair from '@/shared/assets/icons/icon-provably-header.svg';
import IconQuestion from '@/shared/assets/icons/icon-question.svg'
import cls from "./ProvavlyFair.module.sass";
import { useTranslations } from "next-intl";

const ProvablyFairHeader = () => {

    const t = useTranslations();

    return (
        <IntroBar title={'provably_fair_header.title'} content={'provably_fair_header.description'}
            icon={<IconProvableFair className="fill-[linear-gradient(0deg, #12131A, #D1D9EB, rgba(28, 34, 48, 0) -0.71%, rgba(28, 34, 48, 0.35) 100.71%)]" />}
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

export default ProvablyFairHeader;