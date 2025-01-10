
import { BackDropTheme } from "@/shared/const/rarity";

import clsx from "clsx";
import cls from './BackDropButton.module.sass'

import Button from "../Button/Button";
import { FC, SVGProps } from "react";

interface classNamesInterface {
    body?: string
    inner?: string
}

interface BackDropButtonProps {
    theme: BackDropTheme
    icon: FC<SVGProps<SVGSVGElement>>
    content: string
    classNames?: classNamesInterface
}

const BackDropButton = ({ theme, icon: Icon, content, classNames }: BackDropButtonProps) => {
    return (
        <div className={clsx(cls.body, cls[theme], classNames?.body, 'hover:cursor-pointer')}>
            <div className={clsx(cls.body_inner, cls[theme])}>
                <div className={clsx(cls.body_inner_border, classNames?.inner, 'w-full h-full flex flex-col px-[40px] gap-2 justify-center items-center')}>
                    <div className={clsx(cls.hexagon, cls[theme])}>
                        <div className={clsx(cls.hexagon_body)}>
                            <div className={clsx(cls.hexagon_body_inner, 'w-full h-full flex justify-center items-center')}>
                                <Icon className={clsx("w-6 h-6", cls.hexagon_body_icon, cls[theme])} />
                            </div>
                        </div>
                    </div>
                    <span className="text-[12px] text-white font-[500] text-center">{content}</span>
                </div>
            </div>
        </div>
    )
}

export default BackDropButton;