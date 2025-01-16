import { IMetadata } from "@/shared/types/metadata";
import TermsHeader from "@/widgets/TermsOfServices/TermsHeader";
import TermsBody from "@/widgets/TermsOfServices/TermsBody";


export async function generateMetadata({ params: { locale } }: IMetadata) {
    // const t = await getTranslations({ locale, namespace: 'Main' })

    return {
        title: {
            default: 'Support'
        },
        description: ''
    }
}

const TermsOfServices = () => {
    return (
        <div className='mt-5 flex flex-col gap-4'>
            <TermsHeader />
            <TermsBody />
        </div>
    )
}

export default TermsOfServices;