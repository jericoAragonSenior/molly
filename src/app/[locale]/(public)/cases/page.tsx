import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

import { CasesSection } from '@/widgets/CasesSection/ui/CasesSection'

import { CaseToolbar } from '@/entities/CaseToolbar/ui/CaseToolbar'

import { IMetadata } from '@/shared/types/metadata'

export async function generateMetadata({ params: { locale } }: IMetadata) {
	// const t = await getTranslations({ locale, namespace: 'Main' })

	return {
		title: {
			default: 'Cases'
		},
		description: ''
	}
}

const Page = async () => {
	// const t = useTranslations()
	return (
		<>
			<div className='mt-4'>
				<CaseToolbar className='container-common' />
				<CasesSection categoryKey='limited' />
				<CasesSection categoryKey='branded' />
			</div>
		</>
	)
}

export default Page
