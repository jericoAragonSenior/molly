import BadgeTitle from "@/shared/ui/BadgeTitle/BadgeTitle";

import { badgeItems, farmItems } from "../../model/items";
import { useTranslations } from "next-intl";
import CaseItem from "@/entities/CaseItem/ui/CaseItem";
import { CaseItemTheme } from "@/shared/const/rarity";

import clsx from "clsx";
import cls from "../OpenCase.module.sass"

import Button from "@/shared/ui/Button/Button";
import IconTryagain from '@/shared/assets/icons/icon-try-again.svg'
import { useCommonStore } from "@/entities/Common/model/store";

const OpenFarm = () => {

    // For translation
    const t = useTranslations();
    const setOpenFarm = useCommonStore(state => state.setOpenFarm)

    // Build case item list
    const farms = farmItems.map((item, index) => (
        <CaseItem key={index} title={item.title} content={item.content} price={item.price} picUrl={item.picUrl} type={item.type} name={item.name} percent={item.percent} isRotate={true}
            isOpen={false} backTheme={CaseItemTheme.GRADIENTGREEN}
        />
    ))

    // Try again function
    const tryAgain = () => {
        setOpenFarm(true)
    }

    return (
        <div className="flex flex-col gap-5 items-center">
            <div className="w-full flex justify-center gap-[45px] flex-wrap">
                {
                    badgeItems.map(item => (
                        <BadgeTitle icon={<item.icon className={item.iconClassName} />} title={item.title} content={item.content} key={item.title} />
                    ))
                }
            </div>
            <div className="w-full flex flex-wrap justify-center gap-2.5">
                {farms}
            </div>
            <div className={clsx('w-[313px] h-[48px]', cls.btn_hexagon_yellow)}>
                <div className={clsx('w-full h-full', cls.btn_hexagon_yellow_inner)}>
                    <Button fullWidth={true} hexagon={true} classNames={{
                        base: "w-full h-full"
                    }}
                        onClick={tryAgain}
                        startContent={<IconTryagain className='w-[22px] h-[20px]' />}
                    >
                        <span className='text-[#000000] text-[15px] font-[900]'>{t('case_farm.try_again')}</span>
                    </Button>
                </div>
            </div>
        </div>

    )
}

export default OpenFarm;