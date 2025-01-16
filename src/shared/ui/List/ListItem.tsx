"use client"
import clsx from "clsx";
import { FC, useState } from "react";

interface ListItemProps {
    classNames?: {
        body?: string
        icon?: string
        itemHover?: string
        itemActive?: string
    }
    content?: string
    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
    axis?: string
}

const ListItem: FC<ListItemProps> = ({ classNames, content, startIcon, endIcon, axis = "x" }) => {




    return (
        <div className={clsx('text-[#545778] w-full hover:cursor-pointer transition-colors relative hover:text-white justify-center flex',
            axis == "y" && "pl-[20px] hover:pl-[18px] hover:border-l-2 hover:border-[#24FDBC] duration-150 !justify-start",
            classNames?.body)}
        >
            <span className="text-[16px] text-nowrap">
                {startIcon}
                {content}
                {endIcon}
            </span>
        </div>
    )
}

export default ListItem;