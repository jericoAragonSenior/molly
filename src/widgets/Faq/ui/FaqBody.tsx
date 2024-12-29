"use client"
import Collapse from '@/shared/ui/Collapse/Collapse';

import { faqDatas } from '../model/items';

import IconDown from '@/shared/assets/icons/icon-arrow-down.svg'

const FaqBody = () => {


    return (
        <div className='flex flex-col w-full h-auto gap-4'>
            {
                faqDatas.map(item => {
                    return <Collapse header={item.title} content={item.content} headerIcon={<IconDown />} key={item.title} line={true}
                        classNames={{
                            base: "flex flex-col rounded-lg h-auto",
                            baseVisible: "bg-[#181E2B]",
                            headerBase: "w-full h-[68px]  rounded-lg px-5 flex items-center hover:cursor-pointer hover:bg-[#1a2030]",
                            headerBaseVisible: "bg-none",
                            headerBaseInVisible: "bg-[#0D1018]  rounded-lg",
                            headerContent: 'w-full !justify-between',
                            icon: 'w-8  fill-[#FDCD24]  duration-200',
                            iconVisible: 'rotate-180 duration-200',
                            headerTitle: "font-[18px]",
                            headerTitleVisible: 'text-white',
                            headerTitleInVisible: 'text-[#545778]',
                            content: 'w-full text-[#545778] h-0 py-0 duration-300 transition-all ease-linear block overflow-hidden p-5',
                            contentVisible: 'p-5 h-auto duration-300 py-5'
                        }}
                    />
                })
            }
        </div>

        // <div className={clsx('flex flex-col rounded-lg h-auto', isActive ? "bg-[#181E2B]" : "")}>
        //     <Button onPress={() => setIsActive(!isActive)} classNames={{ base: ["w-full h-[68px]  rounded-lg px-5 flex items-center hover:cursor-pointer hover:bg-[#1a2030]", isActive ? "bg-none" : " bg-[#0D1018]  rounded-lg"], content: 'w-full !justify-between' }}
        //         endContent={
        //             <div className={clsx('w-8  fill-[#FDCD24]  duration-200', isActive && 'rotate-180 duration-200')}>
        //                 <IconDown />
        //             </div>
        //         }>
        //         <span className={clsx("font-[18px]", isActive ? "text-white" : "text-[#545778]")}>How do we work and why should you choose us?</span>

        //     </Button>

        //     <div className={clsx('w-full bg-[#1F2739] flex h-0', isActive && 'h-[1px] ')}>
        //     </div>
        //     <div className={clsx('w-full text-[#545778] h-0 py-0 duration-300 transition-all ease-linear block overflow-hidden p-5', isActive && 'p-5 h-auto duration-300 py-5')}>
        //         Our service may contain links to third-party web sites or services that are not owned or controlled by HYBETS.com. HYBETS.com has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that HYBETS.com shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services. We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.
        //     </div>

        // </div >
    )
}

export default FaqBody;