"use client"

import clsx from "clsx";
import cls from "./Main.module.sass"
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import { CircularProgress } from "@nextui-org/react";
import { useTranslations } from "next-intl";

import IconEditPicture from '@/shared/assets/icons/icon-edit-picture.svg'
import IconSteam from '@/shared/assets/icons/icon-steam-logo.svg'
import IconLogout from '@/shared/assets/icons/icon-logout.svg'
import IconWallet from '@/shared/assets/icons/icon-profile-wallet.svg'
import IconEye from '@/shared/assets/icons/icon-eye.svg'
import IconPlus from '@/shared/assets/icons/icon-black-plus.svg'
import Iconverified from '@/shared/assets/icons/icon-verified-user.svg'
import Button from "@/shared/ui/Button/Button";
import { useAppResponsive } from "@/shared/lib/useResponsive";

import { useCommonStore } from "@/entities/Common/model/store";




const MainHeader = () => {

    // For translation
    const t = useTranslations();

    // For responsive
    const breakpoints = useAppResponsive();

    // To get chatbar state
    const chatViewHidden = useCommonStore(state => state.chatViewHidden)


    return (
        <div className={clsx("w-full h-auto flex-wrap !p-0 lg:!p-1", !breakpoints.lg && cls.user_main)}>
            <div className={clsx("w-full h-full lg:!p-5 !p-0 3sm:!p-1.5", !breakpoints.lg && cls.user_main_inner)}>
                <div className="w-full max-h-[500px] relative">
                    <div className="w-full h-full rounded-xl overflow-hidden">
                        <Image
                            src={'/images/profile/user-bg.png'}
                            alt="bg"
                            sizes="100%"
                            fill
                            className="!h-auto !w-full !relative min-h-[200px] max-h-[200] object-cover 3sm:hidden"
                        />
                    </div>
                   
                    <div className={clsx('absolute top-0 left-0 w-full h-full rounded-[14px] 3sm:hidden', cls.image_over)}></div>
                    <div className="absolute flex justify-between w-full h-auto top-0 p-4 3sm:relative 3sm:p-0">
                        <div className="p-2 bg-[#4954700D] border-[1px] border-[#49547014] rounded-lg 3sm:p-1 h-auto">
                            <IconEditPicture className="w-[22px] h-[22px] 3sm:w-[12px] 3sm:h-[12px] fill-[#495470]" />
                        </div>
                        <div className="p-2 bg-[#181D2B] border-[1px] border-[#49547014] rounded-lg 3sm:hidden">
                            <IconSteam className="w-[22px] h-[22px] fill-[#60719A]" />
                        </div>
                    </div>
                    <div className={clsx("w-full absolute flex items-center -bottom-8 left-4 gap-3 flex-wrap overflow-hidden 3sm:overflow-visible 3sm:relative 3sm:bottom-0 3sm:left-0 2sm:flex-col 2sm:items-start", chatViewHidden ? "" : "!gap-0 !bottom-0 !left-3")}>
                        <div className="flex gap-3 items-center">
                            <div className={clsx('w-[152px] h-[170px] 3sm:w-auto 3sm:h-auto relative flex justify-center items-center', !chatViewHidden && 'w-auto h-auto')}>
                                <div className={clsx(cls.avatar_wrapper, 'h-[148px] w-[128px] 3sm:w-[66px] 3sm:h-[72px]', !chatViewHidden && "!w-[90px] !h-[100px]")}>
                                    <div className={clsx(cls.avatar_wrapper_inner, '3sm:!p-1')}>
                                        <div className={clsx(cls.avatar_wrapper_inner_img, 'relative')}>
                                            <Image
                                                src={'/images/avatars/1.jpg'}
                                                alt='user avatar'
                                                className={clsx("w-[110px] h-[120px] 3sm:w-[57px] 3sm:h-[57px]", !chatViewHidden && "!w-[70px] !h-[90px]")}
                                                width={chatViewHidden ? 110 : 70}
                                                height={chatViewHidden ? 120 : 90}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={clsx(cls.level_wrapper, 'absolute bottom-4 right-[17px] 3sm:!w-[18px] 3sm:!h-[22px] 3sm:!p-[2px] 3sm:bottom-0.5 3sm:right-2', !chatViewHidden && '!p-[2px] !w-[26px] !h-[30px] !bottom-[2px] !right-0.5')}>
                                    <div className={clsx(cls.level_wrapper_inner_border)}>
                                        <div className={clsx(cls.level_wrapper_inner_body, 'flex justify-center items-center h-full w-full')}>
                                            <span className="text-[#121722] text-[14px] font-[700] 3sm:text-[10px]">2</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-full w-auto flex gap-4 items-center">
                                <div className="flex gap-4 items-center">
                                    <div className="flex flex-col">
                                        <div className="flex relative">
                                            <Iconverified className="absolute -top-1/3 -left-4" />
                                            <span className="text-[#D1D9EB] text-[16px] ml-2">Aleksandr</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <IconLogout className="fill-[#CB3434] w-4 h-4" />
                                            <span className="text-[#CB3434] text-[12px]">{t('profile_page.leave_site')}</span>
                                        </div>
                                        <div className="w-auto hidden 3sm:flex mt-1">
                                            <div className="p-2 bg-[#4954700D] border-[1px] border-[#49547014] rounded-lg 3sm:p-1 h-auto">
                                                <IconSteam className="w-[12px] h-[12px] fill-[#60719A]" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <Popover placement="bottom" showArrow={true}
                                classNames={{
                                    base: clsx(cls.base, cls['_with-arrow'], '-mt-3')
                                }}
                                offset={0}
                            >
                                <PopoverTrigger>
                                    <div className="w-auto h-auto relative">
                                        <CircularProgress
                                            color="success"
                                            size="lg"
                                            value={70}
                                            classNames={{
                                                svg: "w-[60px] h-[60px] rotate-180",
                                                indicator: "stroke-[#10AA7C]",
                                                track: "stroke-[#2C354A]"
                                            }}
                                            strokeWidth={1.5}
                                        >
                                        </CircularProgress>
                                        <span className="flex flex-col absolute w-full h-full top-0 left-0 justify-center items-center">
                                            <span className="text-white text-[18px] font-[700]">2</span>
                                            <span className="text-[#7082B0] uppercase text-[11px]">lvl</span>
                                        </span>
                                    </div>
                                </PopoverTrigger>
                                <PopoverContent className="bg-[#2E354C] p-[1px] !rounded-md">
                                    <div className="py-1 px-2 bg-[#22283A] rounded-md">
                                        <div className="text-[8px] text-white">13941/184924</div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                            <div>
                                <div className="flex gap-0 w-auto h-auto relative">
                                    <Image src={'/images/profile/item.png'} width={breakpoints.lg && chatViewHidden ? 60 : 35} height={breakpoints.lg && chatViewHidden ? 60 : 35} alt="" />
                                    <Image src={'/images/profile/item.png'} width={breakpoints.lg && chatViewHidden ? 60 : 35} height={breakpoints.lg && chatViewHidden ? 60 : 35} alt="" />
                                    <Image src={'/images/profile/item.png'} width={breakpoints.lg && chatViewHidden ? 60 : 35} height={breakpoints.lg && chatViewHidden ? 60 : 35} alt="" />
                                </div>
                            </div>

                        </div>

                        <div className="w-[168px] h-auto p-2 bg-[#121722] flex-col gap-1 rounded-[14px] hidden lg:flex absolute right-10 3sm:right-1 sm:w-[120px] sm:-right-1">
                            <div className="flex justify-between">
                                <div className="flex gap-2.5 xs:w-full">
                                    <div className=" xs:hidden">
                                        <IconWallet />
                                    </div>
                                    <span className="flex flex-col justify-between xs:flex-row xs:w-full xs:items-center">
                                        <span className="text-[8px] text-[#495470]">{t('profile_main.balance')}</span>
                                        <span className="text-[10px] text-[#1CD9A1]">$1740.00</span>
                                    </span>
                                </div>
                                <IconEye className="w-6 h-6 fill-[#2C354A] xs:hidden" />
                            </div>
                            <div className="min-h-[1px] bg-[#1A202D] w-full">
                            </div>
                            <div className={clsx(cls.deposit_btn, 'w-full h-auto xs:!p-0')}>
                                <div className={clsx(cls.deposit_btn_inner, 'w-full h-auto flex justify-center items-center xs:!p-0 overflow-hidden')}>
                                    <Button
                                        startContent={<IconPlus className="w-[10px] h-[10px]" />}
                                        classNames={{
                                            base: "w-full h-full py-[6px] hover:!bg-[#1d9c76]"
                                        }}
                                    >
                                        <span className={clsx("text-[#121722] text-[10px]", cls.deposit_btn_inner_font)}>{t('profile_main.deposit')}</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainHeader;