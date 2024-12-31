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
}

const ListItem: FC<ListItemProps> = ({ classNames, content, startIcon, endIcon }) => {
    return (
        <div className={clsx('text-[#545778] hover:text-white w-full pl-[20px] hover:pl-[18px] hover:border-l-2 hover:cursor-pointer transition-colors hover:border-[#24FDBC] duration-150', classNames?.body)}>
            <span className="text-[16px] text-nowrap">
                {startIcon}
                {content}
                {endIcon}
            </span>
        </div>
    )
}

export default ListItem;