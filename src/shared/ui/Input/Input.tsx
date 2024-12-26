import { Input as NextInput } from '@nextui-org/react'
import { ReactNode, forwardRef } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

import { fieldVariants } from '@/shared/config/ui/fieldVariants'

import cls from './Input.module.sass'

const inputVariants = tv({
	...fieldVariants,
	defaultVariants: {
		strokeSize: 'thin',
		theme: 'theme-1'
	}
})

type ValidationError = string | string[]

interface ValidationResult {
	isInvalid: boolean
	validationErrors: string[]
	validationDetails: ValidityState
}

interface ClassnamesConfig {
	base?: string | string[]
	mainWrapper?: string | string[]
	innerWrapper?: string | string[]
	inputWrapper?: string | string[]
	input?: string | string[]
	label?: string | string[]
	description?: string | string[]
	errorMessage?: string | string[]
	helperWrapper?: string | string[]
}

interface InputProps extends VariantProps<typeof inputVariants> {
	type?: string
	label?: ReactNode
	labelPlacement?: 'inside' | 'outside' | 'outside-left'
	value: string
	onChange: (value: string) => void
	placeholder?: string
	description?: ReactNode
	validate?: (value: string) => ValidationError | true | null | undefined
	isInvalid?: boolean
	errorMessage?: ReactNode | ((v: ValidationResult) => ReactNode)
	startContent?: ReactNode
	endContent?: ReactNode
	isReadOnly?: boolean
	isDisabled?: boolean
	classNames?: ClassnamesConfig
}

export const Input = forwardRef<HTMLDivElement, InputProps>((props, ref) => {
	const {
		type = 'text',
		label,
		labelPlacement = 'outside-left',
		value,
		onChange,
		placeholder,
		description,
		validate,
		isInvalid,
		errorMessage,
		startContent,
		endContent,
		isReadOnly,
		isDisabled,
		classNames,
		theme = 'theme-1'
	} = props

	return (
		<NextInput
			type={type}
			baseRef={ref}
			label={label}
			labelPlacement={labelPlacement}
			value={value}
			onValueChange={onChange}
			placeholder={placeholder}
			description={description}
			startContent={startContent}
			endContent={endContent}
			validate={validate}
			isInvalid={isInvalid}
			errorMessage={errorMessage}
			isReadOnly={isReadOnly}
			isDisabled={isDisabled}
			classNames={{
				base: [cls.base, cls[theme], cls[labelPlacement], classNames?.base],
				mainWrapper: [cls.main_wrapper, classNames?.mainWrapper],
				innerWrapper: [cls.inner_wrapper, classNames?.innerWrapper],
				inputWrapper: [cls.input_wrapper, inputVariants(props), classNames?.inputWrapper],
				input: [cls.input, classNames?.input],
				label: [cls.label, classNames?.label],
				description: [cls.description, classNames?.description],
				errorMessage: [cls.error_message, classNames?.errorMessage],
				helperWrapper: [cls.helper_wrapper, classNames?.helperWrapper]
			}}
		/>
	)
})

Input.displayName = 'Input'
