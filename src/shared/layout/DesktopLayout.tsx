"use client"
import { Client } from 'react-hydration-provider'
import Loading from '@/app/[locale]/loading'
import dynamic from 'next/dynamic'
import React, { Suspense, useEffect } from 'react'

import { ChatButton } from '@/widgets/Chat/ui/ChatButton'
import { ChatLoader } from '@/widgets/Chat/ui/ChatLoader'
import { FixedTopBar } from '@/widgets/FixedTopBar/ui/FixedTopBar'
import { Footer } from '@/widgets/Footer/ui/Footer'
import { Header } from '@/widgets/Header/ui/Header'
import { Sidebar } from '@/widgets/Sidebar/ui/Sidebar'
import { HeaderLiveFeed } from '@/features/LiveFeed/ui/HeaderLiveFeed'
import { useCommonStore } from '@/entities/Common/model/store'

import { usePathname } from '@/shared/config/i18n/navigation'

const Chat = dynamic(() => import('@/widgets/Chat/ui/Chat'), { ssr: false, loading: () => <ChatLoader /> })
const MainLiveFeed = dynamic(() => import('@/features/LiveFeed/ui/MainLiveFeed'), {
    ssr: false
})


const DesktopLayout = ({ children }: { children: React.ReactNode }) => {

    const itemPosition = useCommonStore(state => state.itemPosition)

    const pathname = usePathname();

    const setItemPosition = useCommonStore(state => state.setItemPosition)

    useEffect(() => {
            setItemPosition("right")
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

    return (
        <div className='layout-main relative z-[0] grid grid-cols-[auto_1fr_auto] lg:block lg:pb-[70px]'>
            <div className='lg:layout-main__inner  lg:grid-rows[auto-1fr]'>
                <div className='layout-main grid grid-cols-[auto_1fr_auto]'>
                    <Sidebar />
                    {
                        itemPosition == "left" && pathname != '/' &&
                        <HeaderLiveFeed className='h-screen w-[100px]' />
                    }
                    <div className='h-screen overflow-y-auto app-scrollbar lg:overflow-visible lg:h-auto'>
                        <div className='layout-main__content min-h-screen pb-[30px]'>
                            <Client>
                                <FixedTopBar className='px-10' />
                            </Client>
                            <Header className='px-[40px] lg:pl-5 lg:pr-6 md:pr-3' />
                            {
                                itemPosition == "center" && pathname != '/' &&
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
                        itemPosition == "right" && pathname != '/' &&
                        <HeaderLiveFeed className='h-screen w-[100px]' />
                    }
                </div>
            </div>
            <Chat />
            <ChatButton />
        </div>
    )
}

export default DesktopLayout;