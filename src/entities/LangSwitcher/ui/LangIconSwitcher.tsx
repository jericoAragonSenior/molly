'use client'

import { languages } from '../model/items'
import { Selection } from '@nextui-org/react'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import { FC } from 'react'
import React from 'react'

import { LocaleType } from '@/shared/config/i18n/config'
import { usePathname, useRouter } from '@/shared/config/i18n/navigation'
import { ISelectItem, Select } from '@/shared/ui/Select/Select'

import cls from './LangSwitcher.module.sass'
import clsx from 'clsx'

interface LangIconSwitcherProps {
    className?: string
}

const LangIconSwitcher: FC<LangIconSwitcherProps> = ({ className }) => {
    const router = useRouter()
    const pathname = usePathname()

    const locale = useLocale()

    const [value, setValue] = React.useState<Selection>(new Set([locale]))

    const changeLocale = (value: Selection) => {
        router.replace(pathname, { locale: Array.from(value)[0] as LocaleType })
        const newValue = Array.from(value)[0] ? value : new Set([locale])
        setValue(newValue)
    }

    const items = languages.map(
        item =>
            ({
                value: item.value,
                label: item.label,
                startContent: (
                    <Image
                        src={item.icon}
                        width={24}
                        height={24}
                        alt={item.label || 'language'}
                        className={cls.item_icon}
                    />
                )
            }) as ISelectItem
    )

    return (
        <>
            <Select
                value={value}
                onChangeValue={changeLocale}
                theme='theme-2'
                items={items}
                selectorIcon='4'
                classNames={{
                    itemInner: 'hidden',
                    itemLabel: 'hidden',
                    trigger: clsx('!bg-none !border-none gap-1', cls.background_none),
                    selectorIcon: clsx(cls.trigger_icon, cls.background_none, "bg-none"),
                    innerWrapper: 'bg-none h-[20px]'
                }}
            />
        </>
    )
}

export default LangIconSwitcher
