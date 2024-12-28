"use client"
import TopBar from '@/widgets/Header/ui/TopBar'
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
import { HeaderLiveKeed } from '@/features/LiveFeed/ui/HeaderLiveKeed'
import { useCommonStore } from '@/entities/Common/model/store'

const Chat = dynamic(() => import('@/widgets/Chat/ui/Chat'), { ssr: false, loading: () => <ChatLoader /> })
const MainLiveFeed = dynamic(() => import('@/features/LiveFeed/ui/MainLiveFeed'), {
    ssr: false
})


const DesktopLayout = ({ children }: { children: React.ReactNode }) => {

    const itemPosition = useCommonStore(state => state.itemPosition)

    return (
        <div className='layout-main relative z-[0] grid grid-cols-[auto_1fr_auto] lg:block lg:pb-[70px]'>
            <div className='lg:layout-main__inner  lg:grid-rows[auto-1fr]'>
                <TopBar />
                <div className='layout-main grid grid-cols-[auto_1fr_auto]'>
                    <Sidebar />
                    {
                        itemPosition == "right" &&
                        <HeaderLiveKeed className='h-[calc(100vh-48px)] w-[100px]' />
                    }
                    <div className='h-[calc(100vh-48px)] overflow-y-auto app-scrollbar lg:overflow-visible lg:h-auto'>
                        <div className='layout-main__content min-h-[calc(100vh-48px)] pb-[30px]'>
                            <Client>
                                <FixedTopBar className='px-10' />
                            </Client>
                            <Header className='px-[40px] lg:pl-5 lg:pr-6 md:pr-3' />
                            {
                                itemPosition == "center" &&
                                <MainLiveFeed className='mt-3 pl-[40px] lg:pl-5 md:pl-3' />
                            }
                            <div className='w-screen'></div>
                            <main className='layout-main__page'>
                                <Suspense fallback={<Loading />}>{children}</Suspense>
                            </main>
                        </div>
                        <Footer className='container-common' />
                    </div>
                    {
                        itemPosition == "left" &&
                        <HeaderLiveKeed className='h-[calc(100vh-48px)] w-[100px]' />
                    }
                </div>
            </div>
            <Chat />
            <ChatButton />
        </div>
    )
}

export default DesktopLayout;