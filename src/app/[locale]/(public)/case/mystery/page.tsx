import { IMetadata } from '@/shared/types/metadata'
import MysteryBar from '@/widgets/OpenCase/ui/Mystery/MysteryBar'
import MysteryBody from '@/widgets/OpenCase/ui/Mystery/MysteryBody'

export async function generateMetadata({ params: { locale } }: IMetadata) {
    // const t = await getTranslations({ locale, namespace: 'Main' })

    return {
        title: {
            default: 'Case(MyStery)'
        },
        description: ''
    }
}

export default function Page({ params: { id } }: { params: { id: string } }) {
    return (
        <>
            <div className='mt-4'>
                <MysteryBar />
                <MysteryBody />
            </div>
        </>
    )
}
