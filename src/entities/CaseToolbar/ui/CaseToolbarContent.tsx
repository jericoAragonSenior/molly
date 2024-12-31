import { PriceRange, Type, initialState, useCasesToolbarStore } from '../model/store'
import { Link, SliderValue } from '@nextui-org/react'
import { useDebounceFn } from 'ahooks'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { FC, useEffect, useState } from 'react'

import IconCase from '@/shared/assets/icons/icon-case.svg'
import IconClear from '@/shared/assets/icons/icon-clear-gradient-grey.svg'
import IconSearch from '@/shared/assets/icons/icon-search.svg'
import IconWeapon from '@/shared/assets/icons/icon-weapon.svg'
import { getFormattedNumberWithDot as getDots } from '@/shared/lib/getFormattedNumberWithDot'
import Button from '@/shared/ui/Button/Button'
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox'
import { Input } from '@/shared/ui/Input/Input'
import { Select } from '@/shared/ui/Select/Select'
import { Slider } from '@/shared/ui/Slider/Slider'

import cls from './CaseToolbar.module.sass'
import { headerNavItems } from '@/widgets/Header/model/items'
import { usePathname } from '@/shared/config/i18n/navigation'

interface CaseToolbarContentProps {
	className?: string
}

const weaponList = [
	{
		value: 'type-1',
		label: 'Type 1'
	},
	{
		value: 'type-2',
		label: 'Type 2'
	},
	{
		value: 'type-3',
		label: 'Type 3'
	}
]
const modeList = [
	{
		value: 'type-1',
		label: 'Type 1'
	},
	{
		value: 'type-2',
		label: 'Type 2'
	},
	{
		value: 'type-3',
		label: 'Type 3'
	}
]

export const CaseToolbarContent: FC<CaseToolbarContentProps> = ({ className }) => {
	const t = useTranslations()
	const pathname = usePathname()

	const [viewType, setViewType] = useState<Type>(initialState.type)
	const [viewSearch, setViewSearch] = useState<string>(initialState.search)
	const [viewPriceRange, setViewPriceRange] = useState<PriceRange>(initialState.priceRange)
	const [viewIsEnoughBalance, setViewIsEnoughBalance] = useState<boolean>(initialState.isEnoughBalance)

	const { type, search, weaponType, mode, priceRange, isEnoughBalance, clearFilter, setFilter } = useCasesToolbarStore(
		state => state
	)

	useEffect(() => {
		setViewType(type)
		setViewSearch(search)
		setViewPriceRange(priceRange)
		setViewIsEnoughBalance(isEnoughBalance)
	}, [type, search, priceRange, isEnoughBalance])

	const { run: onFilterChange } = useDebounceFn(
		(name: string, value: any, isFromSelect?: boolean) => {
			setFilter(name, isFromSelect ? Array.from(value).join('') : value)
		},
		{ wait: 400 }
	)

	const onChangeType = (value: Type) => {
		setViewType(value)
		onFilterChange('type', value)
	}

	return (
		<div className={clsx(cls.grid, className)}>
			<div className={clsx('flex gap-4 mx-4', cls.nav)}>
				{headerNavItems.map(item => (
					<Link
						title={t(item.label)}
						href={item.src}
						key={item.src}
						className={clsx(cls.item, {
							[cls.active]: pathname === item.src
						})}
					>
						<div className={clsx(cls.item_icon, 'w-[18px] h-[18px]')}>
							<item.icon />
						</div>
					</Link>
				))}
			</div>
			<div className={cls.btn_group}>
				<Button
					theme='grey-3'
					isIconOnly
					backdrop
					strokeSize='reg'
					classNames={{
						base: [clsx(cls.btn, cls.btn_type, { [cls.active]: viewType === 'case' })],
						content: cls.btn_content
					}}
					onClick={() => onChangeType('case')}
				>
					<div className={cls.btn_icon}>
						<IconCase />
					</div>
				</Button>
				<Button
					theme='grey-3'
					isIconOnly
					backdrop
					strokeSize='reg'
					classNames={{
						base: [clsx(cls.btn, cls.btn_type, { [cls.active]: viewType === 'weapon' })],
						content: cls.btn_content
					}}
					onClick={() => onChangeType('weapon')}
				>
					<div className={cls.btn_icon}>
						<IconWeapon />
					</div>
				</Button>
			</div>
			<div>
				<Input
					value={viewSearch}
					onChange={v => {
						setViewSearch(v)
						onFilterChange('search', v)
					}}
					theme='theme-3'
					placeholder={viewType === 'case' ? t('toolbar.search_by_case') : t('toolbar.search_by_weapon')}
					strokeSize='reg'
					startContent={<IconSearch className={clsx(cls.box_icon, cls.input_search_icon)} />}
					classNames={{
						inputWrapper: cls.box,
						input: [cls.box_value, cls.input_search]
					}}
				/>
			</div>
			<div>
				<Select
					value={new Set([weaponType])}
					onChangeValue={v => setFilter('weaponType', Array.from(v).join(''))}
					placeholder={t('toolbar.weapon_type')}
					theme='theme-3'
					strokeSize='reg'
					selectorIcon='2'
					items={weaponList}
					classNames={{
						trigger: cls.box,
						value: cls.box_value,
						item: cls.box_item,
						itemInner: cls.box_value,
						listbox: cls.box_listbox,
						popoverContent: cls.box_listbox_content
					}}
				/>
			</div>
			<div>
				<Select
					value={new Set([mode])}
					onChangeValue={v => setFilter('mode', Array.from(v).join(''))}
					placeholder={t('toolbar.mode')}
					theme='theme-3'
					strokeSize='reg'
					selectorIcon='2'
					items={modeList}
					classNames={{
						trigger: cls.box,
						value: cls.box_value,
						item: cls.box_item,
						itemInner: cls.box_value,
						listbox: cls.box_listbox,
						popoverContent: cls.box_listbox_content
					}}
				/>
			</div>
			<div className='ml-auto w-[140px] justify-self-end px-2'>
				<Slider
					label={
						<div className='flex items-center justify-between gap-2'>
							<span className={cls.slider_label_value}>{getDots((viewPriceRange as number[])[0])} $</span>
							<span className={cls.slider_label_value}>{getDots((viewPriceRange as number[])[1])} $</span>
						</div>
					}
					hideValue
					value={viewPriceRange}
					minValue={0}
					maxValue={20000}
					thumb='rect'
					onChange={(v: SliderValue) => {
						setViewPriceRange(v as PriceRange)
						onFilterChange('priceRange', v)
					}}
					showTooltip
					classNames={{
						base: cls.slider_base,
						track: cls.slider_track,
						thumb: cls.slider_thumb,
						label: cls.slider_label,
						value: cls.slider_value
					}}
				/>
			</div>
			<div className='pl-2 pr-3'>
				<Checkbox
					name='balance'
					value='enough'
					icon='2'
					isSelected={viewIsEnoughBalance}
					onValueChange={v => {
						setViewIsEnoughBalance(v)
						onFilterChange('isEnoughBalance', v)
					}}
					theme='theme-2'
					classNames={{
						wrapper: cls.checkbox,
						label: cls.checkbox_label
					}}
				>
					{t('toolbar.enough_balance')}
				</Checkbox>
			</div>
			<Button
				theme='grey-3'
				strokeSize='reg'
				startContent={<IconClear className='shrink-0 w-4 h-4 ' />}
				onClick={clearFilter}
				classNames={{
					base: [cls.box, ''],
					content: [cls.box_value, 'px-[14px]']
				}}
			>
				{t('toolbar.clear')}
			</Button>
		</div>
	)
}
