"use client"
import { useTranslations } from "next-intl";
import DropChance from "./DropChance";

import { chances } from "../../model/items";
import clsx from "clsx";

const SetDropChances = () => {

    // For translation
    const t = useTranslations();

    // The values are to reference swiper and swiper index.


    // For slider(Select Images)
    const slides = chances.map((item) => (
            <DropChance key={item.id} />
    ))

    return (
        <div className={clsx("flex flex-col relative gap-3")}>
            <div className="flex justify-between">
                <span className="text-[14px] font-[500] text-white">{t('create_case.set_drop_chances')}</span>
                <span className="text-[14px] font-[500] text-[#17E2A5]">100%</span>
            </div>
            <div className="flex flex-col gap-2 overflow-auto app-scrollbar max-h-[406px]">
                {slides}
            </div>
        </div>
    )
}

export default SetDropChances;