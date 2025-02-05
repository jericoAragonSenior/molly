import clsx from "clsx";
import cls from "./OpenCase.module.sass";

import IconCrown from '@/shared/assets/icons/icon-crown-gradient-grey.svg'
import { useTranslations } from "next-intl";

import { itemsList } from "../model/items";
import { CardLiveFeed } from "@/shared/ui/CardLiveFeed/CardLiveFeed";

const CaseLiveFeed = () => {

    // For translation
    const t = useTranslations();

    // Build live feeds
    const items = itemsList.map(item => (
        <CardLiveFeed
            key={item.id}
            title={item.title}
            pic={item.picUrl}
            theme={item.rarity}
            className={cls.card}
        />
    ))

    return (
        <div className="w-full overflow-hidden">
            <div className="px-5 w-full h-auto relative flex flex-col mt-2 3sm:px-1">
                <div className={clsx(cls.livefeed_logo, "-mb-[2px] z-[1]")}>
                    <div className={clsx(cls.livefeed_logo_inner, "flex justify-center gap-1 pt-2.5")}>
                        <IconCrown className={clsx("w-3 h-3", cls.crown_bg)} />
                        <span className="text-[8px] text-[#D1D9EB] uppercase">{t('open_case.top_drops')}</span>
                    </div>
                </div>
                <div className={clsx(cls.livefeed_container)}>
                    <div className={clsx(cls.livefeed_container_inner, 'overflow-hidden')}>
                        <div className="relative w-full h-full z-20 p-1 flex gap-0.5">
                            {items}
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        
    )
}

export default CaseLiveFeed;