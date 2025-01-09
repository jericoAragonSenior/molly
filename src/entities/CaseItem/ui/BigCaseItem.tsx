import Image from "next/image";

import clsx from "clsx";
import cls from "./CaseItem.module.sass";
import { ImageBgType } from "@/widgets/Cases/model/types";

interface BigCaseItemProps {
    className?: string
    title?: string
    picUrl: string
    name?: string
    type: ImageBgType
}

const BigCaseItem = ({ title, picUrl, name, type, className }: BigCaseItemProps) => {

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
        <div className={clsx("w-[194px] h-[190px] rounded-[12px] p-[13px] flex flex-col justify-between relative bg-[#141925]", cls.item_shadow, cls.item, className)}>

            <div className={clsx("flex items-start justify-between")}>
                <span className="text-[#2F374A] font-[700] text-[13px] uppercase">{title}</span>
                <div className="flex items-start gap-2">
                    <div className={clsx("w-[12px] h-[12px] rounded-[2px] mt-1", getMarkBackground(type))}>
                    </div>
                </div>
            </div>
            <div className={clsx(" absolute w-[158px] h-[112px]", cls.center)}>
                <div className={clsx("relative w-full h-full flex justify-center items-center", getBackground(type))}>
                    <Image src={picUrl} height={88} width={119} alt="box" />
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-[#2F374A] text-[10px] font-[500]">{name}</span>
            </div>
        </div>
    )
}

export default BigCaseItem;