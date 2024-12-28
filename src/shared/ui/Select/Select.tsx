import { Selection, SelectionMode } from '@nextui-org/react'
import { Select as NextSelect, SelectItem } from '@nextui-org/select'
import clsx from 'clsx'
import { FC, ReactNode } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

import IconSelector2 from '@/shared/assets/icons/icon-arrow-down-2.svg'
import IconSelector1 from '@/shared/assets/icons/icon-arrow-down.svg'
import IconSelector3 from '@/shared/assets/icons/icon-arrow-top-down.svg'
import IconSelector4 from '@/shared/assets/icons/icon-arrow-top.svg'
import { fieldVariants } from '@/shared/config/ui/fieldVariants'

import cls from './Select.module.sass'

const selectVariants = tv({
	...fieldVariants,
	defaultVariants: {
		strokeSize: 'thin',
		theme: 'theme-1'
	}
})

type SelectorIcon = '1' | '2' | '3' | '4'

const selectorIconByType: Record<SelectorIcon, ReactNode> = {
	'1': <IconSelector1 />,
	'2': <IconSelector2 />,
	'3': <IconSelector3 />,
	'4': <IconSelector4 />
}

export interface ISelectItem {
	value: string
	label: string
	startContent?: ReactNode
	endContent?: ReactNode
}

interface ClassNamesConfig {
	trigger?: string
	selectorIcon?: string
	innerWrapper?: string
	base?: string
	listbox?: string
	listboxWrapper?: string
	popoverBase?: string
	popoverContent?: string
	item?: string
	itemInner?: string
	itemLabel?: string
	itemSelectedIcon?: string
	value?: string
}

interface SelectProps extends VariantProps<typeof selectVariants> {
	items: ISelectItem[]
	value: Selection
	onChangeValue: (value: Selection) => void
	selectionMode?: SelectionMode
	showArrow?: boolean
	scrollShadow?: boolean
	selectorIcon?: SelectorIcon
	startContent?: ReactNode
	endContent?: ReactNode
	placeholder?: string
	isLoading?: boolean
	classNames?: ClassNamesConfig
}

export const Select: FC<SelectProps> = props => {
	const {
		items,
		value,
		selectionMode,
		onChangeValue,
		showArrow,
		scrollShadow,
		selectorIcon,
		startContent,
		endContent,
		placeholder,
		theme = 'theme-1',
		isLoading,
		classNames
	} = props

	return (
		<NextSelect
			aria-label='select'
			items={items}
			isLoading={isLoading}
			selectedKeys={value}
			selectionMode={selectionMode}
			onSelectionChange={onChangeValue}
			placeholder={placeholder}
			classNames={{
				trigger: [cls.trigger, selectVariants(props), cls[theme], classNames?.trigger],
				selectorIcon: [cls.trigger_icon, classNames?.selectorIcon],
				innerWrapper: [cls.wrapper_inner, classNames?.innerWrapper],
				base: [cls.base, classNames?.base],
				listbox: [cls.listbox, classNames?.listbox],
				listboxWrapper: [cls.listbox_wrapper, classNames?.listboxWrapper],
				value: [cls.value, classNames?.value]
			}}
			popoverProps={{
				showArrow: showArrow,
				classNames: {
					base: [cls.popover, classNames?.popoverBase],
					content: [cls.content, selectVariants(props), cls[theme], classNames?.popoverContent]
				}
			}}
			listboxProps={{
				itemClasses: {
					base: [cls.item, classNames?.item],
					selectedIcon: [cls.item_icon_selected, classNames?.itemSelectedIcon]
				}
			}}
			scrollShadowProps={{
				isEnabled: scrollShadow
			}}
			selectorIcon={<div>{selectorIcon ? selectorIconByType[selectorIcon] : <IconSelector1 />}</div>}
			startContent={startContent}
			endContent={endContent}
			renderValue={items => {
				return items.map(item => (
					<div
						key={item.key}
						className={cls.item}
					>
						<div className={clsx(cls.item_inner, classNames?.itemInner)}>
							{item.data?.startContent && <>{item.data?.startContent}</>}
							<div className={clsx(cls.item_label, classNames?.itemLabel)}>{item.data?.label}</div>
							{item.data?.endContent && <>{item.data?.endContent}</>}
						</div>
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
					<div className={clsx(cls.item_inner, classNames?.itemInner)}>
						{item.startContent && <>{item.startContent}</>}
						<div className={clsx(cls.item_label, classNames?.itemLabel)}>{item.label}</div>
						{item.endContent && <>{item.endContent}</>}
					</div>
				</SelectItem>
			)}
		</NextSelect>
	)
}
