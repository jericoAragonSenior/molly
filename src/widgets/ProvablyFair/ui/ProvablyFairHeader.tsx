"use client"

import Button from "@/shared/ui/Button/Button";
import IntroBar from "@/shared/ui/IntroBar/IntroBar";
import clsx from "clsx";

import IconProvableFair from '@/shared/assets/icons/icon-provably-header.svg';
import IconQuestion from '@/shared/assets/icons/icon-question.svg'
import cls from "./ProvavlyFair.module.sass";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const ProvablyFairHeader = () => {

    const t = useTranslations();

    // For router
    const router = useRouter();

    // Go support function

    const goSupport = () => {
        router.push('/support');
    }

    return (
        <IntroBar title={'provably_fair_header.title'} content={'provably_fair_header.description'}
            icon={<IconProvableFair className="fill-[linear-gradient(0deg, #12131A, #D1D9EB, rgba(28, 34, 48, 0) -0.71%, rgba(28, 34, 48, 0.35) 100.71%)]" />}
            buttons={
                <div className={cls.button_bar}>
                    <div className={cls.button_bar_inner}>
                        <Button onPress={goSupport} classNames={{ base: clsx('w-[140px] h-[45px] flex items-center relative', cls.fnav_item), content: clsx('w-full h-full flex justify-center items-center') }}>
                            <div className='flex gap-3 items-center px-2 justify-center w-full h-full z-[40] '>
                                <div className={clsx('w-full h-[30px]', cls.fnav_item_icon)}>
                                    <IconQuestion />
                                </div>
                                <span className={clsx('font-[700]  text-[#D1D9EB] text-[12px] font-[Gotham Medium]')}>{t('pages.support')}</span>
                            </div>
                        </Button>
                    </div>
                </div>
            }
        />
    )
}

export default ProvablyFairHeader;