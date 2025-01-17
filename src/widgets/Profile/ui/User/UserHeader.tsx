
"use client"

import clsx from "clsx"
import cls from "./User.module.sass"
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import { CircularProgress } from "@nextui-org/react";

import { useAppResponsive } from "@/shared/lib/useResponsive";


const UserHeader = () => {

    // For responsive
    const breakpoints = useAppResponsive();
    

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
                        className="!h-full !w-full !relative min-h-[200px] max-h-[200px] 3sm:hidden object-cover"
                        />
                    </div>
                    <div className={clsx('absolute top-0 left-0 w-full h-full rounded-[14px] 3sm:hidden', cls.image_over)}></div>
                    <div className="w-full absolute flex items-center -bottom-8 left-4 gap-3 flex-wrap overflow-hidden 3sm:overflow-visible 3sm:relative 3sm:bottom-0 3sm:left-0 3sm:gap-1 3sm:justify-center">
                        <div className="flex gap-3 items-center 3sm:gap-1">
                            <div className={clsx('w-[152px] h-[170px] 3sm:w-auto 3sm:h-auto relative flex justify-center items-center')}>
                                <div className={clsx(cls.avatar_wrapper, 'h-[148px] w-[128px] 3sm:w-[66px] 3sm:h-[72px]')}>
                                    <div className={clsx(cls.avatar_wrapper_inner, '3sm:!p-1')}>
                                        <div className={clsx(cls.avatar_wrapper_inner_img, 'relative')}>
                                            <Image
                                                src={'/images/avatars/1.jpg'}
                                                alt='user avatar'
                                                className="w-[110px] h-[120px] 3sm:w-[57px] 3sm:h-[57px]"
                                                width={110}
                                                height={120}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={clsx(cls.level_wrapper, 'absolute bottom-4 right-[17px] 3sm:!w-[18px] 3sm:!h-[22px] 3sm:!p-[2px] 3sm:bottom-0.5 3sm:right-2')}>
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
                                        <span className="text-[#D1D9EB] text-[16px] ml-2">Aleksandr</span>
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
                                    <Image src={'/images/profile/item.png'} width={breakpoints?.['3sm'] ? 60 : 35} height={breakpoints?.['3sm'] ? 60 : 35} alt="" />
                                    <Image src={'/images/profile/item.png'} width={breakpoints?.['3sm'] ? 60 : 35} height={breakpoints?.['3sm'] ? 60 : 35} alt="" />
                                    <Image src={'/images/profile/item.png'} width={breakpoints?.['3sm'] ? 60 : 35} height={breakpoints?.['3sm'] ? 60 : 35} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserHeader;