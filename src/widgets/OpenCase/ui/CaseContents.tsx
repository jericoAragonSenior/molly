import CaseItem from "@/entities/CaseItem/ui/CaseItem";
import { useTranslations } from "next-intl";

import { caseItems } from "../model/items";

const CaseContents = () => {

    // For translation
    const t = useTranslations();

    // Build case item list
    const cases = caseItems.map((item, index) => (
        <CaseItem key={index} title={item.title} content={item.content} price={item.price} picUrl={item.picUrl} type={item.type} name={item.name} percent={item.percent} />
    ))

    return (
        <div className="flex flex-col w-full justify-center items-center gap-5 py-3 px-3">
            <span className="text-[#D1D9EB] font-[500] text-[18px]">{t('open_case.case_content')}</span>
            <div className="flex justify-center flex-wrap gap-3">
                {cases}
            </div>
        </div>
    )
}

export default CaseContents; 