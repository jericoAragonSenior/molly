import { Select, SelectItem } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

import IconTriangleDown from '@/shared/assets/icons/icon-arrow-angle-down-gradient-grey.svg'

import cls from './HeaderSelect.module.sass'

export interface HeaderSelectItem {
	value: string
	icon: string
	label?: string
}

interface HeaderSelectProps {
	className?: string
	items: HeaderSelectItem[]
	value: HeaderSelectItem
	onChangeValue: (value: string) => void
}

const HeaderSelect = ({ className, items, value, onChangeValue }: HeaderSelectProps) => {
	return (
		<Select
			aria-label='select'
			items={items}
			className={className}
			classNames={{
				trigger: cls.trigger,
				selectorIcon: cls.trigger_icon,
				innerWrapper: cls.wrapper_inner,
				base: cls.base,
				listbox: cls.listbox,
				listboxWrapper: cls.listbox_wrapper
			}}
			popoverProps={{
				classNames: {
					base: cls.popover,
					content: cls.content
				}
			}}
			listboxProps={{
				itemClasses: {
					base: cls.item,
					selectedIcon: cls.item_icon_selected
				}
			}}
			selectedKeys={[value.value]}
			onSelectionChange={value => {
				onChangeValue(value.currentKey as string)
			}}
			selectorIcon={<IconTriangleDown />}
			renderValue={items => {
				return items?.map(item => (
					<div
						key={item.key}
						aria-label={item.data?.label}
					>
						{item.data?.icon && (
							<div className={cls.item_icon}>
								<Image
									fill
									sizes='100%'
									src={item.data.icon}
									alt='ru'
								/>
							</div>
						)}
					</div>
				))
			}}
		>
			{item => (
				<SelectItem
					key={item.value}
					textValue={item.label}
					aria-label={item.label}
					aria-labelledby={item.label}
				>
					{item.icon && (
						<div className={cls.item_inner}>
							<Image
								width={22}
								height={22}
								src={item.icon}
								alt='ru'
								className={cls.item_icon}
							/>
						</div>
					)}
				</SelectItem>
			)}
		</Select>
	)
}

export default HeaderSelect
