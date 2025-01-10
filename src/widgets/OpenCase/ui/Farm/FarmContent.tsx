"use client"

import CaseItem from "@/entities/CaseItem/ui/CaseItem";
import { useTranslations } from "next-intl";

import { farmItems } from "../../model/items";
import { useCommonStore } from "@/entities/Common/model/store";

const FarmContents = () => {

    // For translation
    const t = useTranslations();
    const openFarm = useCommonStore(state => state.openFarm)
    const setOpenFarm = useCommonStore(state => state.setOpenFarm)

    const hoverContent = (prices: string[], odds: string[], pricesTitle: string[]) => {
        return (
            <div className="flex w-full flex-col gap-[10px] p-3">
                <div className="flex justify-between">
                    <span className="text-[#505C77] text-[8px] uppercase">{t('case_farm.price')}</span>
                    <span className="text-[#505C77] text-[8px] uppercase">{t('case_farm.odds')}</span>
                </div>
                {
                    pricesTitle.map((item, index) => (
                        <div className="flex justify-between w-full" key={index}>
                            <span className="flex gap-0.5">
                                <span className="text-white text-[8px] uppercase">{item}</span>
                                <span className="text-[#24FDBC] text-[8px] uppercase">${prices[index]}</span>
                            </span>
                            <span className="text-white text-[8px] uppercase">{odds[index]}%</span>
                        </div>
                    ))
                }
            </div>
        )
    }


    // Item click function
    const clickHandle = () => {
        setOpenFarm(false);
    }

    // Build case item list
    const cases = farmItems.map((item, index) => (
        <CaseItem key={index} title={item.title} content={item.content} price={item.price} picUrl={item.picUrl} type={item.type} name={item.name} percent={item.percent}
            isHover={true}
            hoverContent={hoverContent(item.prices, item.oods, item.pricesTitle)}
            onClick={() => clickHandle()}
        />
    ))

    return (
        openFarm  == true && <div className="flex flex-col w-full justify-center items-center gap-5 py-3 px-3">
            <span className="text-[#D1D9EB] font-[500] text-[18px]">{t('open_case.case_content')}</span>
            <div className="flex justify-center flex-wrap gap-3">
                {cases}
            </div>
        </div>
    )
}

export default FarmContents; 