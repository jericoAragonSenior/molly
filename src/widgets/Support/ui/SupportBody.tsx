
"use client"



import Collapse from "@/shared/ui/Collapse/Collapse";
import IconChat from '@/shared/assets/icons/icon-chat.svg'
import IconMessage from '@/shared/assets/icons/icon-message.svg'
import { ChatMessage } from "@/widgets/Chat/ui/ChatMessage";
import clsx from "clsx";
import { ChatBar } from "@/widgets/Chat/ui/ChatBar";
import IconDown from '@/shared/assets/icons/icon-arrow-down.svg'
import { IChatMessage } from "../model/types";

import cls from './Support.module.sass'

import { supportItems } from "../model/item";
import { useTranslations } from "next-intl";

import { useCommonStore } from "@/entities/Common/model/store";



interface SupportBodyContentProps {
    messagesList: IChatMessage[]
}

interface SupportBodyHeaderProps {
    tikcetNumber: string
    subjectOfAppeal: string
    lastUpdate: string
    responseType: string
    response: string
}

const SupportBodyHeader = ({ tikcetNumber, subjectOfAppeal, lastUpdate, responseType, response }: SupportBodyHeaderProps) => {

    const t = useTranslations();

    const chatViewHidden = useCommonStore(state => state.chatViewHidden)


    return (
        <div className="w-full h-[90px] justify-between">
            <div className="w-auto gap-6 h-full items-center flex px-5">
                <IconChat className={clsx(responseType == "closed" ? "fill-[#545778] text-[#545778]" : ["fill-[#FDCD24] text-[#FDCD24]", cls.chat_shadow])} />
                <div className={clsx("flex-col gap-2 flex lg:hidden")}>
                    <span className="text-[#545778] text-[13px] font-[500]">{t('support_chat_header.id_ticket')}</span>
                    <span className="text-[#D1D9EB] font-[500] text-[15px]">{tikcetNumber}</span>
                </div>
                <div className={clsx("flex flex-col gap-2 md:hidden", !chatViewHidden && "hidden")}>

                   <span className="text-[#545778] text-[13px] font-[500]">{t('support_chat_header.subject_of_appeal')}</span>
                    <span className="text-[#D1D9EB] font-[500] text-[15px]">{subjectOfAppeal}</span>
                </div>
                <div className="flex flex-col gap-2 md:hidden">
                    <span className="text-[#545778] text-[13px] font-[500]">{t('support_chat_header.last_update')}</span>
                    <span className="text-[#D1D9EB] font-[500] text-[15px]">{lastUpdate}</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-[#545778] text-[13px] font-[500] md:hidden">{t('support_chat_header.status_of_the_req')}</span>

                    <span className="flex gap-3 md:gap-2">


                        <IconMessage
                            className={clsx(
                                responseType === "response" && "fill-[#24FDBC]",
                                responseType === "consideration" && "fill-[#545778]",
                                responseType === "closed" && "fill-[#E72121]"
                            )}
                        />
                        <span className={clsx(
                            "font-[500] text-[15px]",
                            responseType === "closed" && "text-[#df3131]",
                            responseType === "consideration" && "text-[#545778]",
                            responseType === "response" && "text-[#D1D9EB]"
                        )}>
                            {response}
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )

}



const SupportBodyContent = ({ messagesList }: SupportBodyContentProps) => {
    return (
        <div className="gap-4 flex-col flex h-full w-full relative px-4 overflow-hidden">
            <div className="gap-4 flex flex-col min-h-[270px] max-h-[322px] overflow-auto">
                {
                    messagesList.map((item, index) =>
                        <div key={index} className={clsx("flex w-full", item.type == "admin" ? "justify-start" : "justify-end")}>
                            <ChatMessage {...item} className=" md:w-full w-1/2" titleClass="!text-[#FDCD24]" />
                        </div>
                    )
                }
            </div>
            <ChatBar className="w-full !mx-0 !my-2" />
        </div>
    )
}


const SupportBody = () => {
    return (
        supportItems.map(item => {
            return <Collapse
                key={item.id}
                headerIcon={<IconDown />}
                classNames={{
                    base: "w-full h-auto flex flex-col bg-[#0D1018] rounded-lg",
                    content: "p-0 gap-4 flex-col flex h-0 relative duration-300",
                    headerBase: "w-full h-auto rounded-lg px-4 flex items-center hover:cursor-pointer hover:bg-[#1a2030]",
                    headerContent: 'w-full !justify-between',
                    icon: "w-8 fill-[#D1D9EB]  duration-200",
                    iconVisible: 'rotate-180 duration-200',
                    headerBaseInVisible: "",
                    headerBaseVisible: "",
                    contentVisible: 'h-[400px] duration-300 py-4',
                    contentInvisible: 'h-0'
                }}
                header={
                    <SupportBodyHeader
                        tikcetNumber={item.ticketNumber}
                        subjectOfAppeal={item.subjectOfAppeal}
                        lastUpdate={item.lastUpdate}
                     responseType={item.responseType}
                        response={item.response}
                    />
                }
                line={false}

                content={
                    <SupportBodyContent messagesList={item.messagesList} />
                }

            />
        }
        )

    )
}

export default SupportBody;