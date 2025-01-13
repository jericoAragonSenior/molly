"use client"

import clsx from "clsx";
import cls from "./Profile.module.sass";
import HeaderBg from '@/shared/assets/section-header-bg.svg'
import { useTranslations } from "next-intl";

const ProfileHeader = () => {

    // For translation
    const t = useTranslations();

    return (
        <div className={clsx(cls.h)}>
            <div className={cls.bg}>
                <HeaderBg className={cls.bg_pic} />
            </div>
            <div className={cls.h_inner}>
                <div className={clsx(cls.title, 'uppercase')}>{t('profile_main.profile')}</div>
            </div>
        </div>
    )
}

export default ProfileHeader;