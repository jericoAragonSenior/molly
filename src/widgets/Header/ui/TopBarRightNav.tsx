"use client"

import { Link } from "@/shared/config/i18n/navigation";
import clsx from "clsx";

import cls from './Header.module.sass'
import { FC } from "react";
import LangIconSwitcher from "@/entities/LangSwitcher/ui/LangIconSwitcher";
import { socialsitems } from "@/widgets/Sidebar/model/items";

interface TopBarRightNavProps {
    className?: string
}


const TopBarRightNav: FC<TopBarRightNavProps> = ({ className }) => {

    return (
        <div className={clsx(className, cls.nav, 'py-3 flex flex-wrap items-center gap-x-[20px] xl:gap-x-3 gap-y-3 duration-150')}>
            {
                socialsitems.map(item => (
                    <Link
                        key={item.label}
                        href={item.src}
                        target='_blank'
                        rel='noreferrer'
                        className={clsx(cls.social, item.hover)}
                    >
                        <item.icon className={cls.social_icon} />
                    </Link>
                ))
            }
            <div>
                <LangIconSwitcher />
            </div>
        </div>
    )
}

export default TopBarRightNav;