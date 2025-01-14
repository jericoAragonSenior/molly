'use client'

import { caseBodytype } from '../../model/items'
import { Selection } from '@nextui-org/react'
import { useLocale } from 'next-intl'

import React from 'react'

import { ISelectItem, Select } from '@/shared/ui/Select/Select'
import clsx from 'clsx'

interface SelectCaseTypeProps {
    className?: string
}

const SelectCaseType = ({ className }: SelectCaseTypeProps) => {


    const locale = useLocale()

    const [value, setValue] = React.useState<Selection>(new Set([locale]))

    const changeLocale = (value: Selection) => {
        const newValue = Array.from(value)[0] ? value : new Set([locale])
        setValue(newValue)
    }

    const items = caseBodytype.map(
        item =>
            ({
                value: item.id.toString(),
                label: item.type
            }) as ISelectItem
    )

    return (
        <div className={clsx('flex flex-col gap-1', className)}>
            <Select
                value={value}
                onChangeValue={changeLocale}
                theme='theme-1'
                items={items}
                classNames={
                    {
                        itemLabel: "text-white",
                        trigger: "!rounded-md !h-[48px]",
                        selectorIcon: "fill-[#404B65]",
                        itemInner: "hover:!text-black",
                    }
                }
            />
        </div>
    )
}

export default SelectCaseType
