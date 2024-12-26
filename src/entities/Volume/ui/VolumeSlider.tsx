import { SliderValue } from '@nextui-org/react'
import clsx from 'clsx'
import { FC, useState } from 'react'

import { Slider } from '@/shared/ui/Slider/Slider'

import cls from './Volume.module.sass'

interface VolumeSliderProps {
	className?: string
}

export const VolumeSlider: FC<VolumeSliderProps> = ({ className }) => {
	const [value, setValue] = useState<SliderValue>(100)

	return (
		<div className={clsx(cls.slider_wrapper, className)}>
			<Slider
				value={value}
				onChange={setValue}
				minValue={0}
				maxValue={100}
				showTooltip={true && (value as number) > 0 && (value as number) < 100}
				tooltipProps={{
					offset: 0
				}}
				marks={[
					{
						value: 0,
						label: '0'
					},
					{
						value: 100,
						label: '100'
					}
				]}
				classNames={{
					track: cls.slider_track,
					thumb: cls.slider_thumb,
					mark: cls.slider_mark,
					tooltipBase: cls.slider_tooltip_base,
					tooltipContent: cls.slider_tooltip_content
				}}
			/>
		</div>
	)
}
