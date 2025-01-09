import { IMetadata } from '@/shared/types/metadata'
import CaseContents from '@/widgets/OpenCase/ui/CaseContents'
import CaseLiveFeed from '@/widgets/OpenCase/ui/CaseLiveFeed'
import { OpenCase } from '@/widgets/OpenCase/ui/OpenCase'
import OpenCaseBar from '@/widgets/OpenCase/ui/OpenCaseBar'

export async function generateMetadata({ params: { locale } }: IMetadata) {
	// const t = await getTranslations({ locale, namespace: 'Main' })

	return {
		title: {
			default: 'Case'
		},
		description: ''
	}
}

export default function Page({ params: { id } }: { params: { id: string } }) {
	return (
		<>
			<div className='mt-4'>
				<OpenCase />
				<OpenCaseBar />
				<CaseLiveFeed />
				<CaseContents />
			</div>
		</>
	)
}
