"use client"
import clsx from "clsx";
import { FC } from "react";

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
    onClick?: () => void
    isActive?: boolean
}

const ListItem: FC<ListItemProps> = ({ classNames, content, startIcon, endIcon, axis = "x", isActive = false, onClick }) => {

    return (
        <div className={clsx('text-[#545778] w-full hover:cursor-pointer transition-colors relative hover:text-white justify-center flex',
            axis == "y" && "pl-[20px] hover:pl-[18px] hover:border-l-2 hover:border-[#24FDBC] duration-150 !justify-start",
            isActive == true ? axis == "y" ? "!text-white !pl-[18px] !border-l-2 !border-[#24FDBC]" : "!text-white" : "",
            classNames?.body)}
            onClick={() => { onClick && onClick() }}
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