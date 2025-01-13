import { IMetadata } from '@/shared/types/metadata'
import UserBody from '@/widgets/Profile/ui/User/UserBody';

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
        <div className='w-full h-full pr-4'>
            <div className='w-full h-full'>
                <UserBody />
            </div>
        </div>
    )
}

export default UserProfile;