"use client"
import { useState } from "react"
import clsx from "clsx"
import cls from "./Main.module.sass"
import { investoryItems } from "../../model/items"

import IconGun from '@/shared/assets/icons/icon-gun.svg'
import Button from "@/shared/ui/Button/Button"
import IconCheck from "@/shared/assets/icons/icon-check.svg"
import IconUpgrade from "@/shared/assets/icons/icon-upgrade.svg"
import IconShopping from "@/shared/assets/icons/icon-shopping.svg"
import { useCommonStore } from "@/entities/Common/model/store"
import ProfileInventory from "../ProfileInventory"


const MainInventory = () => {

    // To get the chat hidden state(Desktop)
    const chatViewHidden = useCommonStore(state => state.chatViewHidden)



    return (
        <div className={clsx("w-full", cls.user_main)}>
            <div className={clsx("w-full p-5 gap-2 3sm:!p-1.5 flex flex-col", cls.user_main_inner)}>
                <div className="bg-[#111620] flex justify-between p-[14px] rounded-xl items-center h-full">
                    <div className="flex gap-2 items-center">
                        <IconGun className="w-7 h-7 fill-none" />
                        <div className="flex flex-col">
                            <span className="text-white text-[16px]">Inventory</span>
                            <span className="text-[#5A6786] text-[12px]">all your items</span>
                        </div>
                    </div>
                    <div className="flex gap-2">

                        <Button
                            disableAnimation
                            startContent={
                                <div className="w-5 h-5 rounded-sm flex justify-center items-center bg-[#60719A]">
                                    <IconCheck className="w-[14px] h-auto fill-black" />
                                </div>
                            }
                            classNames={{
                                base: "bg-[#1E2536] p-[1px] rounded-lg",
                                content: "bg-[#1A202E] p-3 rounded-lg"
                            }}
                        >
                            <span className="text-[12px] flex gap-1">
                                <span className="text-[#60719A]">Selected:</span>
                                <span className="text-white">{'3'}</span>
                            </span>
                        </Button>

                        <Button
                            startContent={
                                <IconUpgrade className="w-5 h-5 fill-[#121722]" />
                            }
                            classNames={{
                                base: [cls.upgrade_btn, !chatViewHidden ? "!hidden" : "md:hidden"],
                                content: [cls.upgrade_btn_inner, 'p-3']
                            }}
                        ></Button>
                        <Button
                            startContent={
                                <IconShopping className="w-5 h-5 fill-[#121722]" />
                            }
                            classNames={{
                                base: [cls.shopping_btn, !chatViewHidden ? "!hidden" : "md:hidden"],
                                content: [cls.shopping_btn_inner, 'p-3']
                            }}
                        >
                            <span className="text-[#121722] text-[14px]">Sell ($456.05)</span>
                        </Button>
                    </div>
                </div>
                <div className={clsx("gap-2 justify-between w-full md:flex", !chatViewHidden ? "flex" : "hidden")}>
                    <Button
                        startContent={
                            <IconUpgrade className="w-5 h-5 fill-[#121722]" />
                        }
                        classNames={{
                            base: [cls.upgrade_btn, "w-1/2"],
                            content: [cls.upgrade_btn_inner, 'p-3  flex justify-center items-center']
                        }}
                    >
                        <span className="text-[#121722] text-[14px] xs:hidden">Upgrade</span>
                    </Button>
                    <Button
                        startContent={
                            <IconShopping className="w-5 h-5 fill-[#121722]" />
                        }
                        classNames={{
                            base: [cls.shopping_btn, "w-1/2"],
                            content: [cls.shopping_btn_inner, 'p-3 flex justify-center items-center']
                        }}
                    >
                        <span className="text-[#121722] text-[14px] xs:hidden">Sell ($456.05)</span>
                    </Button>
                </div>
                <div className="w-full flex flex-wrap justify-between gap-0.5 mt-2">
                    <ProfileInventory items={investoryItems} />
                </div>
            </div>
        </div>
    )
}

export default MainInventory