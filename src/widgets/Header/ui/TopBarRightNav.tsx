"use client"

import { Link, usePathname } from "@/shared/config/i18n/navigation";
import { topbarNavItmes } from "../model/items";
import clsx from "clsx";

import cls from './Header.module.sass'
import { FC } from "react";
import LangIconSwitcher from "@/entities/LangSwitcher/ui/LangIconSwitcher";

interface TopBarRightNavProps {
    className?: string
}


const TopBarRightNav: FC<TopBarRightNavProps> = ({ className }) => {
    const pathname = usePathname()

    return (
        <div className={clsx(className, cls.nav, 'py-3 flex flex-wrap items-center gap-x-[20px] xl:gap-x-3 gap-y-3 duration-150')}>
            {topbarNavItmes.map((item, index) => (
                item.side == "right" &&
                <Link
                    href={item.src}
                    key={index}
                    className={clsx(cls.item, {
                        [cls.active]: pathname === item.src
                    })}
                >
                    <div className={clsx('w-[18px] h-[18px]', cls.item_top_icon)}>
                        <item.icon />
                    </div>
                </Link>
            ))}
            <div>
                <LangIconSwitcher />
            </div>
        </div>
    )
}

export default TopBarRightNav;