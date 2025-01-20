"use client"

import { Selection } from '@nextui-org/react'
import { useState } from "react";
import { useLocale } from "next-intl";

import { ISelectItem, Select } from "@/shared/ui/Select/Select";
import { gameHistoryTypes } from "../../model/items";

const GameHistoryTypeSwitcher = () => {

    const locale = useLocale()

    const [value, setValue] = useState<Selection>(new Set([locale]))

    const items = gameHistoryTypes.map(
        item =>
            ({
                value: item.value,
                label: item.label,
                startContent: (
                    <item.icon className='w-[22px] h-[18px] fill-[#E1B514]' />
                )
            }) as ISelectItem
    )

    return (
        <>
            <Select
                value={value}
                onChangeValue={(v) => {
                    setValue(v)
                }}
                theme='theme-2'
                items={items}
                classNames={{
                    base: 'w-[200px] h-[42px]'
                }}
            />
        </>
    )
}

export default GameHistoryTypeSwitcher;