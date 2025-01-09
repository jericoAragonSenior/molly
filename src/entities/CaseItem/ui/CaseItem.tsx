import Image from "next/image";

import clsx from "clsx";
import cls from "./CaseItem.module.sass";
import { ImageBgType } from "@/widgets/Cases/model/types";

interface CaseItemProps {
    className?: string
    title?: string
    content?: string
    percent?: number
    picUrl: string
    name?: string
    price?: string
    type: ImageBgType
}

const CaseItem = ({ title, content, percent, picUrl, name, price, type, className }: CaseItemProps) => {

    // Get background based on type
    const getBackground = (type: ImageBgType) => {
        switch (type) {
            case "yellow":
                return cls.item_bg_yellow;

            case "pink":
                return cls.item_bg_pink;

            case "purple":
                return cls.item_bg_purple;

            case "blue":
                return cls.item_bg_blue;

            case "limit_blue":
                return cls.item_bg_limit_blue;

            default:
                return cls.item_bg_yellow;
        }
    }

    // Get mark background color
    const getMarkBackground = (type: ImageBgType) => {
        switch (type) {
            case "yellow":
                return cls.item_mark_yellow;

            case "pink":
                return cls.item_mark_pink;

            case "purple":
                return cls.item_mark_purple;

            case "blue":
                return cls.item_mark_blue;

            case "limit_blue":
                return cls.item_mark_limit_blue;

            default:
                return cls.item_mark_yellow;
        }
    }

    return (
        <div className={clsx("w-[133px] h-[153px] rounded-[12px] p-[13px] flex flex-col justify-between relative", cls.item_shadow, cls.item, className)}>

            <div className={clsx("flex items-start justify-between")}>
                <span className="text-[#2F374A] font-[700] text-[10px] uppercase">{title}</span>
                <div className="flex items-start gap-2">
                    <div className={clsx("flex flex-col justify-end items-end gap-[3px]")}>
                        <span className="text-[#2F374A] font-[500] text-[8px] uppercase">{content}</span>
                        <span className="text-[#10AA7C] text-[12px] font-[500]">{percent}%</span>
                    </div>
                    <div className={clsx("w-[8px] h-[8px] rounded-[2px] mt-1", getMarkBackground(type))}>
                    </div>
                </div>
            </div>
            <div className=" absolute w-[107px] h-[76px] top-[29px] left-[13px]">
                <div className={clsx("relative w-full h-full flex justify-center items-center", getBackground(type))}>
                    <Image src={picUrl} height={59} width={80} alt="box" />
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-[#2F374A] text-[10px] font-[500]">{name}</span>
                <span className="text-[#D1D9EB] text-[12px] font-[500]">$ {price}</span>
            </div>
        </div>
    )
}

export default CaseItem;