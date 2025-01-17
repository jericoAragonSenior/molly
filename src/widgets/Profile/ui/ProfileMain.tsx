
"use client"
import { useState } from "react";
import { useTranslations } from "next-intl";

import clsx from "clsx";
import cls from "./Profile.module.sass";

import IconWallet from '@/shared/assets/icons/icon-profile-wallet.svg'
import IconEye from '@/shared/assets/icons/icon-eye.svg'
import IconPlus from '@/shared/assets/icons/icon-black-plus.svg'
import Button from "@/shared/ui/Button/Button";
import { useRouter } from "@/shared/config/i18n/navigation";
import { useAppResponsive } from "@/shared/lib/useResponsive";

import ListItme from "@/entities/ListItem/ui/ListItem";

import { mobileProfileList, profileList } from "@/widgets/Profile/model/items";




const ProfileMain = () => {

    // For translation
    const t = useTranslations();

    // Selected profile list item
    const [selectedItem, setSelectedItem] = useState<number>(0)

    // For responsive
    const breakpoints = useAppResponsive()

    // To move the route
    const navigation = useRouter();



    // The function for profile list
    const clickListItem = (item: number, link: string) => {
        setSelectedItem(item)
        navigation.push(link);
    }

    return (
        <div className="w-full h-auto">
            <div className={clsx(cls.profile_main, 'w-[330px] h-auto mx-4 lg:!bg-none lg:!w-full lg:!m-0')}>
                <div className={clsx(cls.profile_main_inner, 'w-full h-full p-5 lg:!bg-none')}>
                    <div className="flex flex-col gap-[14px]">
                        <div className="w-full p-[15px] bg-[#121722] flex flex-col gap-3 rounded-[14px] lg:hidden">
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
                        <div className="flex flex-col gap-0.5 lg:gap-0 lg:justify-center h-full rounded-xl lg:rounded-none lg:flex-row overflow-x-auto 2sm:justify-start">
                            {
                                breakpoints.lg ? profileList.map((item) => (
                                    <div className="w-full h-full" key={item.title} >
                                        <ListItme icon={item.icon} onClick={() => clickListItem(item.id, item.link)} isActived={item.id == selectedItem} title={t(item.title)} />
                                    </div>
                                )) :
                                    mobileProfileList.map((item) => (
                                        <div className="w-full lg:w-1/5 lg:px-2 md:px-1 h-full 2sm:w-1/3 lg:pb-2" key={item.title} >
                                            <ListItme icon={item.icon} onClick={() => clickListItem(item.id, item.link)} isActived={item.id == selectedItem} title={t(item.title)} />
                                        </div>
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