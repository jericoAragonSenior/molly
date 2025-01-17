"use client"

import clsx from "clsx";
import cls from "./Profile.module.sass";

import { useTranslations } from "next-intl";
import { ButtonHexSquare } from "@/shared/ui/ButtonHexSquare/ButtonHexSquare";

import HeaderBg from '@/shared/assets/section-header-bg.svg'
import IconSettings from '@/shared/assets/icons/icon-settings.svg'
import IconUser from '@/shared/assets/icons/icon-user-avatar.svg'
import { usePathname } from "@/shared/config/i18n/navigation";

const ProfileHeader = () => {

    // For translation
    const t = useTranslations();

    // To get current route
    const pathname = usePathname();

    return (
        <div className={clsx(cls.h, 'md:!min-h-[70px] md:!pt-0 relative')}>
            <div className={cls.bg}>
                <HeaderBg className={cls.bg_pic} />
                <div className={clsx(cls.item, '!absolute z-[10] -top-[5px] h-[35px]')} >
                    <div className={clsx(cls.item_icon, 'relative')}>
                        <IconUser className={clsx("2sm:w-[20px] 2sm:h-[20px] w-[25px] h-[25px] fill-[#17E2A5] relative")} />
                    </div>

                </div>
            </div>

            <div className={cls.h_inner}>
                <div className={clsx(cls.title, 'uppercase md:!text-[18px]')}>{t('profile_main.profile')}</div>
                {
                    pathname != "/profile/user" &&
                    <ButtonHexSquare className={clsx('w-[34px] h-[38px] md:w-[22px] md:h-[24px] absolute right-3 hidden lg:flex')}>
                        <IconSettings
                            className={clsx('w-[20px] h-[20px] md:w-[10px] md:h-[10px] text-[#64749B]', cls.trigger_icon)}
                        />
                    </ButtonHexSquare>

                }
            </div>
        </div>
    )
}

export default ProfileHeader;