import { IMetadata } from '@/shared/types/metadata'
import User from '@/widgets/Profile/ui/User/User';

export async function generateMetadata({ params: { locale } }: IMetadata) {
    // const t = await getTranslations({ locale, namespace: 'Main' })

    return {
        title: {
            default: 'Profile/User'
        },
        description: ''
    }
}


const UserProfile = () => {
    return (
        <div className='w-full h-full px-4  lg:!p-0'>
            <div className='w-full h-full'>
                <User />
            </div>
        </div>
    )
}

export default UserProfile;