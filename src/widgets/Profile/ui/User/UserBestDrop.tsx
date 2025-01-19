"use client"
import clsx from "clsx";
import Image from "next/image";

import cls from "./User.module.sass"
import { ImageBgType } from "../../model/types";

import IconCase from '@/shared/assets/icons/icon-case-battle.svg'
import { userBestDropData } from "../../model/items";
import BadgeBarItem from "@/shared/ui/BadgeBarItem/BadgeBarItem";
import { useTranslations } from "next-intl";
import { useAppResponsive } from "@/shared/lib/useResponsive";
import { useCommonStore } from "@/entities/Common/model/store";

interface UserBestDropProps {
    title: string
    type: ImageBgType
    name: string
    imgUrl: string
}

const UserBestDrop = ({ title, type, name, imgUrl }: UserBestDropProps) => {

    // For translation
    const t = useTranslations()

    // For responsive
    const breakpoints = useAppResponsive();

    // To get chatbar state
    const chatViewHidden = useCommonStore(state => state.chatViewHidden)


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
        <div className="w-full app-scrollbar flex mt-7 flex-wrap">
            <div className={clsx("bg-[#E3B718] rounded-xl p-[1px] w-1/4 h-auto min-w-[279px] lg:w-full", !chatViewHidden && "xl:!w-1/2")}>
                <div className="rounded-xl bg-yellow-400 w-full h-full relative">
                    <div className={clsx("rounded-[12px] px-5 bg-[#121722] flex flex-col relative overflow-hidden w-full h-full lg:py-5")}>
                        <div className={clsx("items-start justify-between w-full hidden lg:flex")}>
                            <div className={clsx("flex flex-col justify-end items-end gap-[3px]")}>
                                <span className="text-[#2F374A] font-[500] text-[13px] uppercase">{ title}</span>
                            </div>
                            <div className={clsx("w-[12px] h-[12px] rounded-[3px]", getMarkBackground(type))}>
                            </div>
                        </div>
                        <div className={clsx("w-full flex gap-5 justify-center items-center lg:gap-10 2sm:gap-4")}>
                            <div className={clsx("w-auto flex justify-center pt-3")}>
                                <div className="relative w-[84px] h-[62px] lg:w-[179px] lg:h-[127px] 2sm:w-[100px] 2sm:h-[60px]">
                                    <div className={clsx("relative w-full h-full flex justify-center items-center", getBackground(type))}>
                                        <Image src={imgUrl} height={breakpoints?.lg ? 62 : 127} width={breakpoints?.lg ? 84 : 179} alt="box" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1  pt-6">
                                <span className="text-[#2F374A] text-[12px] lg:text-[14px] font-[500] xs:text-[9px]">{name}</span>
                                <span className="text-[#D1D9EB] text-[14px] lg:text-[16px] font-[500] xs:text-[10px]">$ {'242,02'}</span>
                            </div>
                        </div>

                        <div className="w-auto flex gap-2 justify-center mt-3 absolute bottom-2 right-2">
                            <IconCase className="w-[22px] h-[18px] lg:w-[40px] lg:h-[38px] 2sm:w-[22px] 2sm:h-[22px] fill-[#5A6786]" />
                        </div>
                    </div>
                    <div className="absolute -top-[1px] left-1/2 px-3 py-[2px] lg:py-2 lg:px-6 rounded-br-[4px] rounded-bl-[4px] bg-yellow-400 -translate-x-1/2">
                        <span className="text-[10px] text-[#181E2C] lg:text-[14px]">Best drop</span>
                    </div>
                </div>
            </div>
            {
                userBestDropData.map((item, index) => (
                    <div key={index} className={clsx("py-1 px-2 lg:w-1/3 w-1/4 2sm:w-1/2 2sm:flex-1 sm:mt-8 sm:px-1", !chatViewHidden && "xl:!w-1/2 xl:!px-1")}
                    >
                        <BadgeBarItem key={item.id} isUpperContent={true} title={item.title} content={t(item.content)} icon={item.icon} titleType={item?.titleType} />
                    </div>
                ))
            }
        </div>
    )
}

export default UserBestDrop;