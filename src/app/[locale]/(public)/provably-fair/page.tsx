import { IMetadata } from "@/shared/types/metadata";

import ProvablyFairHeader from "@/widgets/ProvablyFair/ui/ProvablyFairHeader";
import ProvablyFairBody from "@/widgets/ProvablyFair/ui/ProvablyFairBody";


export async function generateMetadata({ params: { locale } }: IMetadata) {
    // const t = await getTranslations({ locale, namespace: 'Main' })

    return {
        title: {
            default: 'Support'
        },
        description: ''
    }
}


const ProvablyFair = () => {
    return (
        <div className='mt-5 flex flex-col gap-4 px-5'>
            <ProvablyFairHeader />
            <ProvablyFairBody />
        </div>
    )
}

export default ProvablyFair;