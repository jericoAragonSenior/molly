import { Client } from 'react-hydration-provider'
import Loading from '@/app/[locale]/loading'
import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'

import { ChatButton } from '@/widgets/Chat/ui/ChatButton'
import { ChatLoader } from '@/widgets/Chat/ui/ChatLoader'
import { FixedTopBar } from '@/widgets/FixedTopBar/ui/FixedTopBar'
import { Footer } from '@/widgets/Footer/ui/Footer'
import { Header } from '@/widgets/Header/ui/Header'
import { MobileBar } from '@/widgets/MobileBar/ui/MobileBar'
import { MobileMenu } from '@/widgets/MobileMenu/ui/MobileMenu'
import { Sidebar } from '@/widgets/Sidebar/ui/Sidebar'

const Chat = dynamic(() => import('@/widgets/Chat/ui/Chat'), { ssr: false, loading: () => <ChatLoader /> })



const MobileLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='layout-main relative z-[0] grid grid-cols-[auto_1fr_auto] lg:block lg:pb-[70px]'>
            <Sidebar />
            <div className='layout-main__inner h-screen overflow-y-auto app-scrollbar lg:overflow-visible lg:h-auto'>
                <div className='layout-main__content min-h-screen pb-[30px]'>
                    <Client>
                        <FixedTopBar className='px-10' />
                    </Client>
                    <Header className='px-[40px] lg:pl-5 lg:pr-6 md:pr-3 sm:pr-1 sm:pl-2 sm:gap-0' />
                    <main className='layout-main__page'>
                        <Suspense fallback={<Loading />}>{children}</Suspense>
                    </main>
                </div>
                <Footer className='container-common' />
            </div>
            <Chat />
            <ChatButton />
            <MobileBar />
            <MobileMenu />
        </div>
    )
}

export default MobileLayout;