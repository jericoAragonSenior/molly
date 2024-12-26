import { ICase } from '@/shared/types/case'

export type CaseCategory = 'branded' | 'limited'

export interface CaseSection {
	title: string
	icon: React.FC<React.SVGProps<SVGSVGElement>>
	items: ICase[]
}
