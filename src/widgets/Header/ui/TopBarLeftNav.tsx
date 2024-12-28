"use client"

import { Link, usePathname } from "@/shared/config/i18n/navigation";
import { useTranslations } from "next-intl";
import { topbarNavItmes } from "../model/items";
import clsx from "clsx";

import cls from './Header.module.sass'
import { FC } from "react";
import { useCommonStore } from "@/entities/Common/model/store";

interface TopBarLeftNavProps {
    className?: string
}


const TopBarLeftNav: FC<TopBarLeftNavProps> = ({ className }) => {
    const t = useTranslations()
    const pathname = usePathname()
    const headerBarInView = useCommonStore(state => state.headerBarInView)

    return (
        <div className={clsx(className, cls.nav, 'py-3 flex flex-wrap items-center gap-x-[30px] xl:gap-x-4 gap-y-3 duration-150')}>
            {
                headerBarInView ? <div></div> :
                    <Link
                        href='/'
                        className={clsx('w-[50px] h-[40px]')}
                        style={{
                            backgroundImage: 'url(/images/logo-header-mobile.svg)',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat'
                        }}
                    ></Link>
            }

            {topbarNavItmes.map(item => (
                item.side == "left" &&
                <Link
                    title={t(item.label)}
                    href={item.src}
                    key={item.src}
                    className={clsx(cls.item, {
                        [cls.active]: pathname === item.src
                    })}
                >
                    <div className={clsx(cls.item_icon, 'w-[18px] h-[18px]')}>
                        <item.icon />
                    </div>
                    <div className={cls.item_label}>{t(item.label)}</div>
                </Link>
            ))}
        </div>
    )
}

export default TopBarLeftNav;