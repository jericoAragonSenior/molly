"use client"
import Collapse from '@/shared/ui/Collapse/Collapse';

import { faqDatas } from '../model/items';

import IconDown from '@/shared/assets/icons/icon-arrow-down.svg'

const FaqBody = () => {


    return (
        <div className='flex flex-col w-full h-auto gap-4 px-5 md:px-0'>
            {
                faqDatas.map(item => {
                    return <Collapse header={item.title} content={item.content} headerIcon={<IconDown />} key={item.title} line={true}
                        classNames={{
                            base: "flex flex-col rounded-lg h-auto",
                            baseVisible: "bg-[#181E2B]",
                            headerBase: "w-full h-auto py-5  rounded-lg px-5 flex items-center hover:cursor-pointer hover:bg-[#1a2030]",
                            headerBaseVisible: "bg-none",
                            headerBaseInVisible: "bg-[#0D1018]  rounded-lg",
                            headerContent: 'w-full !justify-between',
                            icon: 'w-8 fill-[#FDCD24]  duration-200',
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

    )
}

export default FaqBody;