"use client"

import IntroBar from "@/shared/ui/IntroBar/IntroBar";
import IconQuestion from '@/shared/assets/icons/icon-question.svg'
import IconNewTicket from '@/shared/assets/icons/icon-new-ticket.svg'
import Button from "@/shared/ui/Button/Button"
import IconSupportBtn from '@/shared/assets/icons/icon-support-btn.svg'

import clsx from "clsx";
import cls from './Support.module.sass'
import { useTranslations } from "next-intl";
import { useModal } from "@/shared/context/ModalContext";
import CreateNewTicket from "./CreateNewTicket";


const SupportHeader = () => {
    const { openModal } = useModal();

    const t = useTranslations();


    const createNewTicket = () => {
        openModal(
            <CreateNewTicket />,
            {},
            <span className="text-[#2F374A] text-[30px]">+</span>,
            t('create_new_ticket.create_ticket'),
            {
                body: '',
                modal: 'relative w-full lg:h-full h-screen flex lg:items-start justify-center items-center'
            }
        )
    }

    return (
        <IntroBar title={'sidebar.support'} icon={<IconQuestion />} content={'support_datas.title'}
            buttons={
                <div className="flex gap-3 flex-row md:flex-col h-full items-center">
                    <Button onPress={createNewTicket} disableAnimation classNames={{ base: clsx('w-[170px] md:w-[140px] h-[45px] flex items-center relative'), content: clsx('w-full h-full flex justify-center items-center') }}>
                        <div className='w-full h-full top-0 right-0 absolute'>
                            <IconNewTicket className={'w-full h-full'} />
                        </div>
                        <div className='flex gap-3 items-center px-2 justify-center w-full h-full z-[40] '>
                            <span className={clsx("text-[#FDCD24] text-[26px]")}>+</span>
                            <span className={clsx('font-[700]  text-[#D1D9EB] text-[12px] font-[Gotham Medium] block md:hidden')}>{t('support_datas.new_ticket')}</span>
                        </div>
                    </Button>
                    <Button disableAnimation classNames={{ base: clsx('w-[140px] h-[45px] flex items-center relative', cls.fnav_item), content: clsx('w-full h-full flex justify-center items-center') }}>
                        <div className='w-full h-full top-0 right-0 absolute'>
                            <IconSupportBtn className={'w-full h-full'} />
                        </div>
                        <div className='flex gap-3 items-center px-2 justify-center w-full h-full z-[40] '>
                            <div className={clsx('w-full h-[30px]', cls.fnav_item_icon)}>
                                <IconQuestion />
                            </div>
                            <span className={clsx('font-[700]  text-[#D1D9EB] text-[12px] font-[Gotham Medium]')}>{t('pages.faq')}</span>
                        </div>
                    </Button>
                </div>
            }
        />
    )
}

export default SupportHeader;