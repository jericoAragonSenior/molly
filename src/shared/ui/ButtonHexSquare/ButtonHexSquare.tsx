import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import clsx from 'clsx'
import * as React from 'react'

import cls from './ButtonHexSquare.module.sass'

const buttonVariants = cva(cls.btn, {
	variants: {
		variant: {
			grey: cls.grey
		},
		border: {
			default: cls.border_default
		}
	},
	defaultVariants: {
		variant: 'grey',
		border: 'default'
	}
})

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const ButtonHexSquare = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, children, variant, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp
				className={clsx(buttonVariants({ variant, className }))}
				ref={ref}
				{...props}
			>
				<div className={cls.inner}>{children}</div>
			</Comp>
		)
	}
)
ButtonHexSquare.displayName = 'ButtonHexSquare'

export { ButtonHexSquare, buttonVariants }
