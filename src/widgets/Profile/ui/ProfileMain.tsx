
"use client"
import { useState } from "react";

import clsx from "clsx";
import cls from "./Profile.module.sass";

import IconWallet from '@/shared/assets/icons/icon-profile-wallet.svg'
import IconEye from '@/shared/assets/icons/icon-eye.svg'
import IconPlus from '@/shared/assets/icons/icon-black-plus.svg'
import { useTranslations } from "next-intl";
import Button from "@/shared/ui/Button/Button";

import ListItme from "@/entities/ListItem/ui/ListItem";
import { profileList } from "@/widgets/Profile/model/items";

import { motion } from "framer-motion";
import IconUser from '@/shared/assets/icons/icon-user-avatar.svg'



const mobileAnimationVariants = {
    active: { opacity: 1 },
    inactive: { opacity: 0 }
}


const ProfileMain = () => {

    // For translation
    const t = useTranslations();

    // Selected profile list item
    const [selectedItem, setSelectedItem] = useState<number>(1)

    // Profile list state(mobile)
    const [isOpened, setIsOpened] = useState<boolean>(false)

    // The function for profile list
    const clickListItem = (item: number) => {
        setSelectedItem(item)
    }

    return (
        <div className="w-full h-auto">
            <div className="hidden lg:flex">
                <Button
                    theme='gradient-outline-green-2'
                    strokeSize='thin'
                    backdrop
                    hexagon
                    hexagonAxis={'y'}
                    hexagonAngleOffset={13}
                    onClick={() => { setIsOpened(!isOpened) }}
                    classNames={{
                        base: '!fixed w-[50px] h-[55px] bg-white z-[50] bottom-[170px] right-5 z-[21]',
                        content: cls.btn_open_content
                    }}
                >
                    <IconUser className="w-7 h-7" />
                </Button>
            </div>
            <div className={clsx(cls.profile_main, 'w-[330px] h-auto mx-4 2lg:fixed 2lg:!bg-[#191F2D] 2lg:w-full 2lg:m-0 2lg:h-[calc(100vh-150px)] 2lg:overflow-auto', isOpened == true ? 'top-[80px] z-[20] duration-150' : 'top-full duration-200')}>
                <div className={clsx(cls.profile_main_inner, 'w-full h-full p-5')}>
                    <div className="flex flex-col gap-[14px]">
                        <div className="w-full p-[15px] bg-[#121722] flex flex-col gap-3 rounded-[14px]">
                            <div className="flex justify-between">
                                <div className="flex gap-2.5">
                                    <div>
                                        <IconWallet />
                                    </div>
                                    <span className="flex flex-col justify-between">
                                        <span>{t('profile_main.balance')}</span>
                                        <span>$1740.00</span>
                                    </span>
                                </div>
                                <IconEye className="w-6 h-6 fill-[#2C354A]" />
                            </div>
                            <div className="min-h-[1px] bg-[#1A202D] w-full">
                            </div>
                            <div className={clsx(cls.deposit_btn, 'w-full h-auto')}>
                                <div className={clsx(cls.deposit_btn_inner, 'w-full h-auto flex justify-center items-center')}>
                                    <Button
                                        startContent={<IconPlus className="w-5 h-5" />}
                                        classNames={{
                                            base: "w-full h-full py-[11px] hover:!bg-[#1d9c76]"
                                        }}
                                    >
                                        <span className={clsx("text-[#121722] text-[17px]", cls.deposit_btn_inner_font)}>{t('profile_main.deposit')}</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-0.5 rounded-xl overflow-hidden">
                            {
                                profileList.map((item) => (
                                    <ListItme key={item.title} icon={item.icon} onClick={() => clickListItem(item.id)} isActived={item.id == selectedItem} title={t(item.title)} />
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    )
}

export default ProfileMain;