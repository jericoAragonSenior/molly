'use client'

import { listGames } from '../model/item'
import { Selection } from '@nextui-org/react'
import { useLocale, useTranslations } from 'next-intl'
import React from 'react'

import { ISelectItem, Select } from '@/shared/ui/Select/Select'
import clsx from 'clsx'



const SelectGame = () => {

    const t = useTranslations();


    const locale = useLocale()

    const [value, setValue] = React.useState<Selection>(new Set([locale]))

    const changeLocale = (value: Selection) => {
        const newValue = Array.from(value)[0] ? value : new Set([locale])
        setValue(newValue)
    }

    const items = listGames.map(
        item =>
            ({
                value: t(item),
                label: t(item)
            }) as ISelectItem
    )

    return (
        <>
            <Select
                value={value}
                onChangeValue={changeLocale}
                theme='theme-2'
                items={items}
                classNames={
                    {
                        itemLabel: "text-[#D1D9EB]",
                        itemInner: 'hidden',
                        trigger: clsx('!bg-[#121722] !rounded-[8px] !border-none gap-1 !py-[14px] !h-[48px] !px-[18px]'),
                        selectorIcon: clsx("!bg-[#252C3F] !fill-[#252C3F]"),
                        innerWrapper: 'bg-none h-[20px]'
                    }
                }
            />
        </>
    )
}

export default SelectGame
