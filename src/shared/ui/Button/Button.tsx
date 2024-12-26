'use client'

import { ButtonProps as BaseButtonProps, Ripple, Spinner, useButton } from '@nextui-org/react'
import clsx from 'clsx'
import { CSSProperties, forwardRef } from 'react'
import React from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

import { slotVariants } from '@/shared/config/ui/slotVariants'

import cls from './Button.module.sass'

const buttonVariants = tv({
	...slotVariants,
	defaultVariants: {
		backdrop: false
	}
})

interface ClassnamesConfig {
	base?: string | string[]
	content?: string | string[]
}

interface ButtonProps extends BaseButtonProps, VariantProps<typeof buttonVariants> {
	classNames?: ClassnamesConfig
	hexagonAngleOffset?: number
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const {
		domRef,
		children,
		spinnerSize,
		spinner = (
			<Spinner
				color='current'
				size={spinnerSize}
			/>
		),
		spinnerPlacement,
		startContent,
		endContent,
		isLoading,
		disableRipple,
		getButtonProps,
		getRippleProps
	} = useButton({
		ref,
		...props
	})

	const { ripples, onClear } = getRippleProps()

	return (
		<button
			ref={domRef}
			{...getButtonProps()}
			className={clsx(buttonVariants(props), cls.base, props?.classNames?.base)}
			style={
				{
					'--hexagon-angle-offset': (props.hexagonAngleOffset || 10) + 'px'
				} as CSSProperties
			}
		>
			<div className={clsx('content', cls.content, props?.classNames?.content)}>
				{startContent}
				{isLoading && spinnerPlacement === 'start' && spinner}
				{children}
				{isLoading && spinnerPlacement === 'end' && spinner}
				{endContent}
			</div>
			{!disableRipple && (
				<Ripple
					ripples={ripples}
					onClear={onClear}
				/>
			)}
		</button>
	)
})

Button.displayName = 'Button'

export default Button
