import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

import { CasesSection } from '@/widgets/CasesSection/ui/CasesSection'
import { Giveaway } from '@/widgets/Giveaway/ui/Giveaway'
import { LiveFeedWithToolbar } from '@/widgets/LiveFeedWithToolbar/ui/LiveFeedWithToolbar'
import { MainNews } from '@/widgets/MainNews/ui/MainNews'
import { TopCases } from '@/widgets/TopCases/ui/TopCases'

import { IMetadata } from '@/shared/types/metadata'

export async function generateMetadata({ params: { locale } }: IMetadata) {
	// const t = await getTranslations({ locale, namespace: 'Main' })

	return {
		title: {
			default: ''
		},
		description: ''
	}
}

const Page = () => {
	// const t = useTranslations()
	return (
		<>
			<div className='container-common'>
				<MainNews />
				<LiveFeedWithToolbar />
			</div>
			<div className=' container-common mt-4 grid grid-cols-[auto_1fr] gap-6 items-start 3xl:grid-cols-1 3xl:gap-4'>
				<Giveaway />
				<TopCases />
			</div>
			<div className='mt-4'>
				<CasesSection categoryKey='limited' />
				<CasesSection categoryKey='branded' />
			</div>
		</>
	)
}

export default Page
