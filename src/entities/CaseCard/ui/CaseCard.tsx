'use client'

import { useTranslations } from 'next-intl'
import { FC, useState } from 'react'

import { Link } from '@/shared/config/i18n/navigation'
import { caseTypeToProps } from '@/shared/lib/caseTypeToProps'
import { CaseType, ICase } from '@/shared/types/case'
import { CaseCardView } from '@/shared/ui/CaseCard/CaseCardView'

import { CaseMarkdown } from './CaseMarkdown'
import { CaseTimer } from './CaseTimer'

interface CaseCardProps extends ICase {
	className?: string
}

export const CaseCard: FC<CaseCardProps> = ({ className, ...item }) => {
	const t = useTranslations()

	// temporary state
	const [isFavorite, setIsFavorite] = useState(false)

	const onSetFavorite = () => {
		setIsFavorite(!isFavorite)
	}

	const getLabel = (type: CaseType) => {
		switch (type) {
			case CaseType.AVAILABELED_IN:
				return (
					<CaseTimer
						expiryTimestamp={item.availableIn || ''}
						className='tabular-nums'
					/>
				)
			case CaseType.EXPIRED_AT:
				return (
					<CaseTimer
						expiryTimestamp={item.expiredAt || ''}
						className='tabular-nums'
					/>
				)
			case CaseType.DISCOUNTED:
				return <CaseMarkdown>{`${t('caseCard.discount', { discount: item.discount })}`}</CaseMarkdown>
			case CaseType.LIMITED:
				return <CaseMarkdown>{`**${item.limit?.current}**/${item.limit?.total}`}</CaseMarkdown>
			case CaseType.LOCKED:
				return t('caseCard.locked')
			default:
				return ''
		}
	}

	return (
		<Link
			href={`/case/${item.id}`}
			className={className}
		>
			<CaseCardView
				picUrl={item.picUrl}
				title={item.name}
				price={item.price ? '$' + item.price : t('caseCard.free')}
				oldPrice={item.oldPrice ? '$' + item.oldPrice : undefined}
				isFree={!item.price}
				label={getLabel(item.type)}
				config={caseTypeToProps[item.type]}
				isFavorite={isFavorite}
				onSetFavorite={onSetFavorite}
			/>
		</Link>
	)
}
