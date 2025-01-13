"use client"

import clsx from "clsx";
import cls from "./ProfileUser.module.sass"
import Image from "next/image";

import IconEditPicture from '@/shared/assets/icons/icon-edit-picture.svg'
import IconSteam from '@/shared/assets/icons/icon-steam-logo.svg'
import IconLogout from '@/shared/assets/icons/icon-logout.svg'



const UserBody = () => {
    return (
        <div className={clsx("w-full h-full", cls.user_main)}>
            <div className={clsx("w-full h-full p-5", cls.user_main_inner)}>
                <div className="w-full max-h-[500px] relative">
                    <Image
                        src={'/images/profile/user-bg.png'}
                        alt="bg"
                        sizes="100%"
                        fill
                        className="!h-auto !w-full !relative min-h-[200px]"
                    />
                    <div className={clsx('absolute top-0 left-0 w-full h-full rounded-[14px]', cls.image_over)}></div>
                    <div className="absolute flex justify-between w-full h-auto top-0 p-4">
                        <div className="p-2 bg-[#4954700D] border-[1px] border-[#49547014] rounded-lg">
                            <IconEditPicture className="w-[22px] h-[22px] fill-[#495470]" />
                        </div>
                        <div className="p-2 bg-[#181D2B] border-[1px] border-[#49547014] rounded-lg">
                            <IconSteam className="w-[22px] h-[22px] fill-[#60719A]" />
                        </div>
                    </div>
                    <div className="w-full absolute flex items-center -bottom-8 left-4 sm:left-2">
                        <div className={clsx('w-[152px] h-[170px] sm:w-[122px] sm:h-[140px] relative flex justify-center items-center')}>
                            <div className={clsx(cls.avatar_wrapper, 'h-[148px] w-[128px] sm:w-[98px] sm:h-[118px]')}>
                                <div className={clsx(cls.avatar_wrapper_inner)}>
                                    <div className={clsx(cls.avatar_wrapper_inner_img, 'relative')}>
                                        <Image
                                            width={110}
                                            height={120}
                                            src={'/images/avatars/1.jpg'}
                                            alt='user avatar'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={clsx(cls.level_wrapper, 'absolute bottom-4 right-[17px] sm:right-2')}>
                                <div className={clsx(cls.level_wrapper_inner_border)}>
                                    <div className={clsx(cls.level_wrapper_inner_body, 'flex justify-center items-center')}>
                                        <span className="text-[#121722] text-[14px] font-[700]">2</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-full w-auto flex gap-4 items-center">
                            <div className="flex gap-4 items-center">
                                <div className="flex flex-col">
                                    <span className="text-[#D1D9EB] text-[16px]">Aleksandr</span>
                                    <div className="flex gap-2">
                                        <IconLogout className="fill-[#CB3434] w-4 h-4" />
                                        <span className="text-[#CB3434] text-[12px]">Leave site</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default UserBody;