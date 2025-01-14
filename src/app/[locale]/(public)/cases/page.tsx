

import { CasesSection } from '@/widgets/CasesSection/ui/CasesSection'

import { CaseToolbar } from '@/entities/CaseToolbar/ui/CaseToolbar'

import { IMetadata } from '@/shared/types/metadata'
import CasesHeader from '@/widgets/Cases/ui/CasesHeader'

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
				<CasesHeader />
				<CaseToolbar className='container-common' />
				<CasesSection categoryKey='caseLimited' />
				<CasesSection categoryKey='caseBranded' />
			</div>
		</>
	)
}

export default Page
