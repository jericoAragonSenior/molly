import { Spinner } from '@nextui-org/react'
import { FC } from 'react'

import cls from './Chat.module.sass'

export const ChatLoader: FC = () => {
	return (
		<div className={cls.base_loader}>
			<Spinner
				size='lg'
				color='current'
			/>
		</div>
	)
}
