"use client"

import IntroBar from "@/shared/ui/IntroBar/IntroBar";
import IconQuestion from '@/shared/assets/icons/icon-question.svg'
import IconNewTicket from '@/shared/assets/icons/icon-new-ticket.svg'
import Button from "@/shared/ui/Button/Button"

import clsx from "clsx";
import cls from './Support.module.sass'
import { useTranslations } from "next-intl";
import { useModal } from "@/shared/context/ModalContext";
import CreateNewTicket from "./CreateNewTicket";
import { useRouter } from "next/navigation";


const SupportHeader = () => {
    const { openModal } = useModal();

    const t = useTranslations();

    // For router
    const router = useRouter()

    // open create New Ticket modal function
    const createNewTicket = () => {
        openModal(
            <CreateNewTicket />,
            {},
            <span className="text-[#2F374A] text-[30px]">+</span>,
            t('create_new_ticket.create_ticket'),
            {
                body: '',
                modal: 'relative w-full lg:h-full h-screen flex lg:items-start justify-center items-center'
            },
            true
        )
    }

    // Go faq function
    const goFaq = () => {
        router.push('/faq');
    }

    return (
        <IntroBar title={'sidebar.support'} icon={<IconQuestion />} content={'support_datas.title'}
            buttons={
                <div className="flex gap-3 flex-row 3sm:flex-col h-full items-center">
                    <Button onPress={createNewTicket} disableAnimation classNames={{ base: clsx('w-[170px] md:w-[140px] h-[45px] flex items-center relative'), content: clsx('w-full h-full flex justify-center items-center') }}>
                        <div className='w-full h-full top-0 right-0 absolute'>
                            <IconNewTicket className={'w-full h-full'} />
                        </div>
                        <div className='flex gap-3 items-center px-2 justify-center w-full h-full z-[40] '>
                            <span className={clsx("text-[#FDCD24] text-[26px]")}>+</span>
                            <span className={clsx('font-[700]  text-[#D1D9EB] text-[12px] font-[Gotham Medium] block')}>{t('support_datas.new_ticket')}</span>
                        </div>
                    </Button>
                    <Button
                        theme='grey-4'
                        strokeSize='reg'
                        backdrop
                        hexagon
                        hexagonAxis='x'
                        classNames={{
                            base: clsx('h-10 2sm:hidden flex', cls.fnav_item),
                            content: 'px-6 text-xs'
                        }}
                        startContent={
                            <div className={clsx('w-full h-[30px]', cls.fnav_item_icon)}>
                                <IconQuestion />
                            </div>
                        }
                        onClick={goFaq}
                    >
                        {t('pages.faq')}
                    </Button>
                </div>
            }
        />
    )
}

export default SupportHeader;