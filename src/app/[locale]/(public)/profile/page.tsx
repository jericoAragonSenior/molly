import { IMetadata } from '@/shared/types/metadata'

import Main from "@/widgets/Profile/ui/Main/Main";

export async function generateMetadata({ params: { locale } }: IMetadata) {
    // const t = await getTranslations({ locale, namespace: 'Main' })

    return {
        title: {
            default: 'Profile/Layout'
        },
        description: ''
    }
}

const ProfilePage = () => {
    return (
        <div className='w-full pr-4 lg:!p-0'>
            <div className='w-full'>
                <Main />
            </div>
        </div>
    )
}

export default ProfilePage;