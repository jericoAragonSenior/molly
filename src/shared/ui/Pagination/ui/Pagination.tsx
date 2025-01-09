"use client"

import clsx from "clsx"

import PaginationButton from "./PaginationButton"
import { useState } from "react"
import { IPagination } from "../model/types"

interface PaginationProps {
    items: IPagination[]
    className?: string
    onClick?: (value: number) => void
}

const Pagination = ({ items, className, onClick }: PaginationProps) => {
    
    const [activeItem, setActiveItem] = useState<string>('')

    const setItem = (item: IPagination) => {
        setActiveItem(item.content);

        if (onClick) {
            onClick(item.value);
        }
    }

    return (
        <div className={clsx("flex gap-[5px] hover:cursor-pointer", className)}>
            {
                items.map(item => (
                    <PaginationButton content={item.content} isActive={item.content == activeItem ? true : false} key={item.content} onClick={() => setItem(item)} />
                ))
            }
        </div>
    )
}

export default Pagination;