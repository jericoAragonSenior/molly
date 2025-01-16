import { IMetadata } from '@/shared/types/metadata'
import ProfileHeader from '@/widgets/Profile/ui/ProfileHeader'
import ProfileMain from '@/widgets/Profile/ui/ProfileMain'

export async function generateMetadata({ params: { locale } }: IMetadata) {
    // const t = await getTranslations({ locale, namespace: 'Main' })

    return {
        title: {
            default: 'Profile/Layout'
        },
        description: ''
    }
}


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='mt-5 flex-col flex'>
            <ProfileHeader />
            <div className='flex lg:flex-col'>
                <div className='w-auto h-screen'>
                    <ProfileMain />
                </div>
                <div className='flex-1 h-screen'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;