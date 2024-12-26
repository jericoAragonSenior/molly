'use client'

import { Spinner } from '@nextui-org/react'
import { motion } from 'framer-motion'

export default function Loading() {
	return (
		<motion.div
			className='h-screen flex items-center justify-center'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			<Spinner
				size='lg'
				color='current'
			/>
		</motion.div>
	)
}
