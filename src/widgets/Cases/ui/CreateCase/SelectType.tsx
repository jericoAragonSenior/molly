'use client'

import { caseType } from '../../model/items'
import { Selection } from '@nextui-org/react'
import { useLocale, useTranslations } from 'next-intl'

import React from 'react'

import { ISelectItem, Select } from '@/shared/ui/Select/Select'


const SelectType = () => {

    const t = useTranslations();


    const locale = useLocale()

    const [value, setValue] = React.useState<Selection>(new Set([locale]))

    const changeLocale = (value: Selection) => {
        const newValue = Array.from(value)[0] ? value : new Set([locale])
        setValue(newValue)
    }

    const items = caseType.map(
        item =>
            ({
                value: item.id.toString(),
                label: item.type
            }) as ISelectItem
    )

    return (
        <div className='flex flex-col gap-1'>
            <span className='text-[10px] text-[#49526D] uppercase'>{t('create_case.opening_type')}</span>
            <Select
                value={value}
                onChangeValue={changeLocale}
                theme='theme-1'
                items={items}
                classNames={
                    {
                        itemLabel: "text-white",
                        trigger: "!rounded-md",
                        selectorIcon: "fill-[#404B65]",
                        itemInner: "hover:!text-black",
                    }
                }
            />
        </div>
    )
}

export default SelectType
