import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

import cls from './CaseCardView.module.sass'

interface CaseBadgeProps {
	label: React.ReactNode
	icon?: React.FC<React.SVGProps<SVGSVGElement>>
	badgeMode?: string
	badgeTheme?: string
	iconTheme?: string
	iconShadow?: boolean
	className?: string
}

export const CaseBadge: FC<CaseBadgeProps> = ({
	label,
	icon: Icon,
	badgeMode,
	iconTheme,
	iconShadow,
	badgeTheme,
	className
}) => {
	const t = useTranslations()
	return (
		<div className={clsx(cls.badge, cls[badgeTheme || 'default'], cls[badgeMode || ''], className)}>
			<div className={cls.badge_inner}>
				{Icon && (
					<div
						className={clsx(cls.badge_icon, cls[iconTheme || 'default'], {
							[cls.badge_icon_shadow]: iconShadow
						})}
					>
						<Icon />
					</div>
				)}
				<div className={cls.badge_label}>{label}</div>
			</div>
		</div>
	)
}
