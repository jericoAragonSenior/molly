"use client"
import { usePathname } from '@/shared/config/i18n/navigation';
import ProfileHeader from '@/widgets/Profile/ui/ProfileHeader'
import ProfileMain from '@/widgets/Profile/ui/ProfileMain'




const Layout = ({ children }: { children: React.ReactNode }) => {

    // To get current route
    const pathname = usePathname();

    return (
        <div className='mt-5 flex-col flex'>
            <ProfileHeader />
            <div className='flex lg:flex-col'>
                {
                    pathname != "/profile/user" &&
                    <div className='w-auto h-screen lg:h-auto'>
                        <ProfileMain />
                    </div>
                }

                <div className='flex-1'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;