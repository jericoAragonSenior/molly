import { Checkbox as NextCheckbox } from '@nextui-org/react'
import { FC, ReactNode } from 'react'

import IconCheck2 from '@/shared/assets/icons/icon-check-2.svg'
import IconCheck from '@/shared/assets/icons/icon-check.svg'

import cls from './Checkbox.module.sass'

type CheckIcon = '1' | '2'

const checkIconByType: Record<CheckIcon, React.ElementType> = {
	'1': IconCheck,
	'2': IconCheck2
}

const CheckboxIcon = ({
	isChecked,
	isIndeterminate,
	isSelected,
	disableAnimation,
	as: Element,
	...rest
}: {
	isChecked?: boolean
	isIndeterminate?: boolean
	isSelected?: boolean
	disableAnimation?: boolean
	as: React.ElementType
}) => {
	return <Element {...rest} />
}

interface ClassNamesConfig {
	base?: string | string[]
	icon?: string | string[]
	label?: string | string[]
	wrapper?: string | string[]
}

interface CheckboxProps {
	children?: ReactNode
	icon?: CheckIcon
	value: string
	name: string
	theme?: 'theme-1' | 'theme-2'
	isSelected?: boolean
	isRequired?: boolean
	isReadOnly?: boolean
	isDisabled?: boolean
	isInvalid?: boolean
	classNames?: ClassNamesConfig
	onValueChange?: (isSelected: boolean) => void
}

export const Checkbox: FC<CheckboxProps> = ({
	children,
	icon = '1',
	value,
	name,
	theme = 'theme-1',
	isSelected,
	isRequired,
	isReadOnly,
	isDisabled,
	isInvalid,
	classNames,
	onValueChange
}) => {
	return (
		<NextCheckbox
			aria-label={name}
			icon={<CheckboxIcon as={checkIconByType[icon]} />}
			value={value}
			name={name}
			isSelected={isSelected}
			isRequired={isRequired}
			isReadOnly={isReadOnly}
			isDisabled={isDisabled}
			isInvalid={isInvalid}
			onValueChange={onValueChange}
			classNames={{
				base: [cls.base, cls[theme], classNames?.base],
				icon: [cls.icon, classNames?.icon],
				label: [cls.label, classNames?.label],
				wrapper: [cls.wrapper, classNames?.wrapper]
			}}
		>
			{children}
		</NextCheckbox>
	)
}
