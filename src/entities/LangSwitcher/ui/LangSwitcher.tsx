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

interface LangSwitcherProps {
	className?: string
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
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
				classNames={{
					itemInner: cls.item_inner,
					itemLabel: cls.item_label,
					trigger: cls.trigger,
					selectorIcon: cls.trigger_icon
				}}
			/>
		</>
	)
}

export default LangSwitcher
