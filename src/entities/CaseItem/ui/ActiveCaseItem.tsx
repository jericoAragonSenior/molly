"use client"

import Image from "next/image";
import { useState } from "react";

import clsx from "clsx";
import cls from "./CaseItem.module.sass";

import { ImageBgType } from "@/widgets/Cases/model/types";
import Button from "@/shared/ui/Button/Button";

interface ActiveCaseItemProps {
    title: string
    theme: ImageBgType
    name: string
    price: string
    picUrl: string
}

const ActiveCaseItem = ({ title, theme, name, price, picUrl }: ActiveCaseItemProps) => {
    
    // Active state
    const [isActive, setIsActive] = useState<boolean>(false);

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

    // Active click function
    const active = () => {
        setIsActive(!isActive);
    }

    return (
        <div className={clsx("w-[133px] h-[200px] rounded-[12px] relative p-0.5 hover:cursor-pointer", isActive == true ? '!bg-[#10AA7C]' : cls.item_shadow, cls.item)} onClick={active}>
            <div className="w-full h-full  flex flex-col justify-between relative rounded-[12px] overflow-hidden p-[13px] bg-black">
                <div className={clsx("flex items-start justify-between")}>
                    <span className="text-[#2F374A] font-[700] text-[10px] uppercase">{title}</span>
                    <div className="flex items-start gap-2">
                        <div className={clsx("w-[8px] h-[8px] rounded-[2px] mt-1", getMarkBackground(theme))}>
                        </div>
                    </div>
                </div>
                <div className="w-[107px] h-[76px] top-[29px] left-[13px]">
                    <div className={clsx("relative w-full h-full flex justify-center items-center", getBackground(theme))}>
                        <Image src={picUrl} height={59} width={80} alt="box" />
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-[#2F374A] text-[10px] font-[500]">{name}</span>
                    <span className="text-[#D1D9EB] text-[12px] font-[500]">$ {price}</span>
                </div>
                <div className={clsx(cls.item_sell_btn)}>
                    <div className={clsx(cls.item_sell_btn_inner, 'w-full h-full')}>
                        <Button classNames={{
                            base: "w-full h-full px-2 py-[10px] "
                        }}>
                            <span className="text-[#121722] text-[12px] uppercase">SELL ${price}</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActiveCaseItem; 