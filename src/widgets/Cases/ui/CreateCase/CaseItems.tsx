import CaseItem from "@/entities/CaseItem/ui/CaseItem"

import { caseItems } from "../../model/items"
import clsx from "clsx"
import cls from "../Cases.module.sass"

const CaseItems = () => {


    // Build case item list
    const cases = caseItems.map((item, index) => (
        <CaseItem key={index} title={item.title} content={item.content} price={item.price} picUrl={item.picUrl} type={item.type} name={item.name} percent={item.percent} />
    ))
    return (
        <div className="flex flex-wrap justify-between sm:justify-center gap-2 h-full relative">
            {cases}
        </div>
    )
}

export default CaseItems;