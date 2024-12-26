import { Slider as NextSlider, SliderValue } from '@nextui-org/react'
import { FC, ReactNode } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

import cls from './Slider.module.sass'

const sliderVariants = tv({
	variants: {
		theme: {
			green: cls.theme_green,
			yellow: cls.theme_yellow
		},
		thumb: {
			round: cls.thumb_round,
			pill: cls.thumb_pill,
			rect: cls.thumb_rect
		}
	},
	defaultVariants: {
		theme: 'green',
		thumb: 'round'
	}
})

type SliderStepMark = {
	value: number
	label: string
}

interface ClassnamesConfig {
	base?: string
	filler?: string
	labelWrapper?: string
	label?: string
	value?: string
	thumb?: string
	step?: string
	mark?: string
	track?: string
	trackWrapper?: string
	tooltipBase?: string
	tooltipContent?: string
	tooltipArrow?: string
}

interface TooltipProps {
	isTooltipOpen?: boolean
	offset?: number
	placement?: 'top' | 'bottom'
}

interface SliderProps extends VariantProps<typeof sliderVariants> {
	value: SliderValue
	defaultValue?: SliderValue
	label?: ReactNode
	minValue: number
	maxValue: number
	marks?: SliderStepMark[]
	disableThumbScale?: boolean
	showTooltip?: boolean
	tooltipProps?: TooltipProps
	steps?: number
	classNames?: ClassnamesConfig
	formatOptions?: Intl.NumberFormatOptions
	tooltipValueFormatOptions?: Intl.NumberFormatOptions
	ariaLabel?: string
	hideValue?: boolean
	onChange?: (value: SliderValue) => void
	onChangeEnd?: (value: SliderValue) => void
	getValue?: (value: SliderValue) => string
}

export const Slider: FC<SliderProps> = props => {
	const {
		value,
		defaultValue,
		minValue,
		maxValue,
		marks,
		label,
		disableThumbScale,
		showTooltip,
		tooltipProps,
		steps,
		classNames,
		formatOptions,
		tooltipValueFormatOptions,
		ariaLabel,
		hideValue,
		onChange,
		onChangeEnd,
		getValue
	} = props

	return (
		<NextSlider
			aria-label={ariaLabel || 'slider'}
			label={label}
			maxValue={maxValue}
			minValue={minValue}
			defaultValue={defaultValue}
			value={value}
			onChange={onChange}
			onChangeEnd={onChangeEnd}
			getValue={getValue}
			hideValue={hideValue}
			step={steps}
			showSteps={!!steps}
			showTooltip={showTooltip}
			disableThumbScale={disableThumbScale}
			formatOptions={formatOptions}
			tooltipValueFormatOptions={tooltipValueFormatOptions}
			marks={marks}
			classNames={{
				base: [cls.base, sliderVariants(props), classNames?.base],
				filler: [cls.filler, classNames?.filler],
				labelWrapper: [cls.label_wrapper, classNames?.labelWrapper],
				label: [cls.label, classNames?.label],
				value: [cls.value, classNames?.value],
				thumb: [cls.thumb, classNames?.thumb],
				step: [cls.step, classNames?.step],
				mark: [cls.mark, classNames?.mark],
				track: [cls.track, classNames?.track],
				trackWrapper: [cls.track_wrapper, classNames?.trackWrapper]
			}}
			tooltipProps={{
				isOpen: tooltipProps?.isTooltipOpen,
				offset: tooltipProps?.offset,
				placement: tooltipProps?.placement || 'bottom',
				classNames: {
					base: [cls.tooltip_base, classNames?.tooltipBase],
					content: [cls.tooltip_content, classNames?.tooltipContent],
					arrow: [cls.tooltip_arrow, classNames?.tooltipArrow]
				}
			}}
		/>
	)
}
