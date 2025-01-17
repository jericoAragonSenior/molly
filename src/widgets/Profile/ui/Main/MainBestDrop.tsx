"use client"
import Image from "next/image";

import clsx from "clsx";
import cls from './Main.module.sass'

import { ImageBgType } from "@/widgets/Cases/model/types";

import IconCase from '@/shared/assets/icons/icon-case-battle.svg'
import BadgeBarItem from "@/shared/ui/BadgeBarItem/BadgeBarItem";
import { bestDropData } from "../../model/items";
import { useTranslations } from "next-intl";
import { useCommonStore } from "@/entities/Common/model/store";


const MainBestDrop = () => {

    // For translation
    const t = useTranslations();

    // To get the chat hidden state(Desktop)
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
        <div className={clsx("w-full mt-[15px] flex gap-5 h-full md:flex-col items-center", !chatViewHidden && "flex-col")}>
            <div className={clsx("bg-[#E3B718] rounded-xl p-[1px] w-[200px] h-[271px] md:w-full md:h-auto", !chatViewHidden && "!w-full !h-auto")}>
                <div className="rounded-xl bg-yellow-400 w-full h-full relative">
                    <div className={clsx("rounded-[12px] p-5 bg-[#121722] flex flex-col relative overflow-hidden w-full h-full")}>
                        <div className={clsx("flex items-start justify-between w-full")}>
                            <div className={clsx("flex flex-col justify-end items-end gap-[3px]")}>
                                <span className="text-[#2F374A] font-[500] text-[13px] uppercase">ft</span>
                            </div>
                            <div className={clsx("w-[12px] h-[12px] rounded-[3px]", getMarkBackground("pink"))}>
                            </div>
                        </div>
                        <div className={clsx("w-full flex md:gap-5 justify-center items-center flex-col md:flex-row", !chatViewHidden && "!flex-row !gap-5")}>
                            <div className="w-full flex justify-center md:w-auto">
                                <div className="relative w-[180px] h-[127px]">
                                    <div className={clsx("relative w-full h-full flex justify-center items-center", getBackground("pink"))}>
                                        <Image src={'/images/case/skin-2.png'} height={127} width={180} alt="box" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <span className="text-[#2F374A] text-[14px] font-[500] xs:text-[9px]">{'AK-47 | Fire Serpent'}</span>
                                <span className="text-[#D1D9EB] text-[16px] font-[500] xs:text-[10px]">$ {'242,02'}</span>
                            </div>
                        </div>

                        <div className="w-full flex gap-2 justify-center mt-3">
                            <IconCase className="w-[22px] h-[18px] fill-[#5A6786]" />
                            <span className="text-[#5A6786] text-[14px]">Case Battles</span>
                        </div>
                    </div>
                    <div className="absolute top-0 left-1/2 px-[14px] py-[6px] rounded-br-lg rounded-bl-lg bg-yellow-400 -translate-x-1/2">
                        <span className="text-[12px] text-[#181E2C]">Best drop</span>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex h-full">
                <div className={clsx("w-full flex h-full flex-wrap sm:mt-3")}>
                    {
                        bestDropData.map(item => (
                            <div className={clsx(item?.icon ? "w-1/2" : "w-1/4", "p-1 sm:!w-1/3",
                                item.id == 2 && "sm:!order-4",
                                item.id == 4 && "sm:!order-2",
                                item.id == 3 && "sm:!order-7",
                                item.id == 7 && "sm:!order-3",
                                item.id == 6 && "sm:!order-8",
                                item.id == 8 && "sm:!order-6"
                            )}
                                style={{ order: item.id }}
                            >
                                <BadgeBarItem key={item.id} title={item.title} content={t(item.content)} icon={item.icon} titleType={item?.titleType} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default MainBestDrop;