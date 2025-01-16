"use client"
import { useState } from "react";

import clsx from "clsx";

import IconArrow from '@/shared/assets/icons/icon-arrow-down-2.svg'
import Button from "@/shared/ui/Button/Button";

interface ListItemProps {
    icon: React.FC<React.SVGProps<SVGSVGElement>>,
    title: string
    onClick: () => void
    isActived: boolean
}

const ListItme = ({icon: Icon, title, isActived, onClick}: ListItemProps) => {



    // Click function
    const clickHandle = () => {
        onClick();
    }

    return (
        <div className="w-full h-full">
            <div className={clsx("flex justify-between items-center hover:cursor-pointer lg:hidden", isActived == false ? "bg-[#171e29]" : "bg-[#1E2535]")}>
                <Button
                    classNames={{
                        base: "w-full h-full px-[15px] py-[13px] flex justify-between",
                        content: "w-full h-full flex !justify-between"
                    }}
                    onClick={clickHandle}
                    endContent={<div className={clsx("p-1 rounded-lg", isActived == false ? "bg-[#1C2333]" : "bg-[#252C3D]")}>
                        <IconArrow className={clsx("-rotate-90", isActived == false ? "fill-[#333C58]" : "fill-[#7785B3]")} />
                    </div>}
                >
                    <div className="flex gap-2 items-center">
                        <Icon className={clsx("w-[24px] h-[25px] fill-[#5A6786]", isActived == false ? "fill-[#5A6786]" : "fill-[#95AADB]")} />
                        <span className={clsx("text-[14px]", isActived == false ? "text-[#5A6786]" : "text-[#95AADB]")}>{title}</span>
                    </div>
                </Button>
            </div>
            <div className="hidden lg:flex w-full h-[59px]">
                <div className={clsx('rounded-[10px] p-[1px] h-full w-full', isActived == true ? 'bg-[#17C993]' : 'bg-[#191F2D80]')}>
                    <div className={clsx("w-full h-full rounded-[10px]", isActived == true ? 'bg-[#0A372A]' : 'bg-[#191F2D80]')}>
                        <Button
                            classNames={{
                                base: "w-full h-full py-[8px] flex justify-between",
                                content: "w-full h-full flex !justify-center flex-col"
                            }}
                            onClick={clickHandle}
                        >
                            <div className="flex gap-2 items-center flex-col">
                                <Icon className={clsx("w-[24px] h-[25px]", isActived == false ? "fill-[#5A6786]" : "fill-[#19CF99]")} />
                                <span className={clsx("text-[10px]", isActived == false ? "text-[#5A6786]" : "text-[#FFFFFF]")}>{title}</span>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
      
    )
}

export default ListItme;