"use client"

import Image from "next/image";

import clsx from "clsx";
import cls from "./CaseItem.module.sass";
import { ImageBgType } from "@/widgets/Cases/model/types";
import { CaseItemTheme } from "@/shared/const/rarity";

import IconLogo from "@/shared/assets/icons/icon-caseitem-back-logo.svg"
import { useTranslations } from "next-intl";
import { useState } from "react";

interface CaseItemProps {
    className?: string
    title?: string
    content?: string
    percent?: number
    picUrl: string
    name?: string
    price?: string
    type: ImageBgType
    isHover?: boolean
    backTheme?: CaseItemTheme
    hoverContent?: React.ReactNode
    isOpen?: boolean
    isRotate?: boolean
    onClick?: () => void
}

const CaseItem = ({ title, content, percent, picUrl, name, price, type, className, isHover = false, isRotate = true, hoverContent, isOpen = true, backTheme, onClick }: CaseItemProps) => {


    // For translation
    const t = useTranslations()

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


    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isRotated, setIsRotated] = useState<boolean>(isRotate);
    const [isOpened, setIsOpened] = useState<boolean>(isOpen)
    const [isRotation, setIsRotation] = useState<boolean>(false)

    const hoverHandle = (value: boolean) => {
        if (isHover == true && isOpened == true) {
            setIsHovered(value);
        }
    }

    // click function
    const clickHandle = () => {
        if (isRotated == true) {
            if (isOpened == false) {
                setIsRotation(true)
                setTimeout(() => {
                    setIsOpened(true)
                }, 150);
            }
            else if (isOpened == true) {
                if (onClick) {
                    onClick();
                }
            }
        }
    }

    return (
        <div className={clsx("w-auto h-auto hover:cursor-pointer", isRotation && cls.open_rotation)}
            onClick={() => clickHandle()}
            onMouseEnter={() => hoverHandle(true)} 
            onMouseLeave={() => hoverHandle(false)}>
            <div className={clsx(cls.item_box, backTheme && cls[backTheme])}>
                {
                    isRotated == true && 
                    <>
                        {
                            isOpened == true &&
                            <div className={clsx("w-[133px] h-[153px] rounded-[12px] p-[13px] flex flex-col justify-between relative overflow-hidden", cls.item_shadow, cls.item, className)}>
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

                                    <div className={clsx("absolute w-full bg-[#1E2536A6] h-full left-0 z-[1] duration-400", cls.hover_blur, isHovered == true ? "top-0" : "top-full")}>
                                    {hoverContent && hoverContent}
                                </div>
                            </div>
                        }
                        {
                            isOpened == false &&
                            <div className={clsx("w-[133px] h-[153px] rounded-[12px] p-[13px] flex flex-col justify-center items-center relative", cls.item_back, backTheme && cls[backTheme])}>
                                <IconLogo />
                            </div>
                        }
                    </>
                    
                }
                {
                    isRotated == false && 
                    <div className={clsx("w-[133px] h-[153px] rounded-[12px] p-[13px] flex flex-col justify-center items-center relative bg-[#141925]", cls.item_back)}>
                            <div className={clsx(cls.item_open_hexagon)}>
                                <div className={clsx(cls.item_open_hexagon_body)}>
                                    <div className={clsx(cls.item_open_hexagon_inner, 'flex justify-center items-center')}>
                                        <span className="text-[#516080] text-12px uppercase font-[700]">{t('open')}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                }
            
            </div>
            
        </div>
        
    )
}

export default CaseItem;