"use client"

import { Input } from "@/shared/ui/Input/Input";
import { useTranslations } from "next-intl";
import { useState } from "react";

import cls from "./Support.module.sass"
import clsx from "clsx";
import SelectProblem from "./SelectProblem";
import Button from "@/shared/ui/Button/Button";
import IconUploadFile from '@/shared/assets/icons/icon-select-file.svg'

const CreateNewTicket = () => {

    const t = useTranslations();

    const [subject, setSubject] = useState('');

    return (
        <div className={clsx(cls.modal, 'py-6 gap-4 max-h-[calc(100vh-150px)] overflow-auto app-scrollbar')}>
            <div className="flex flex-col gap-3 w-full">
                <span className=" text-[#545778] font-[500] text-[15px]">{t('create_new_ticket.select_problem')}</span>
                <SelectProblem />
            </div>
            <div className="flex flex-col gap-3 w-full">
                <span className="text-[#545778] font-[500] text-[15px]">{t('create_new_ticket.subject')}</span>
                <Input
                    value={subject}
                    onChange={v => {
                        setSubject(v)
                    }}
                    theme='theme-1'
                    placeholder={t('create_new_ticket.subject_placeholder')}
                    classNames={{
                        inputWrapper: [cls.box, '!bg-[#0D1018] !border-0 !rounded-[9px] !p-6'],
                        input: [cls.box_value, 'w-full text-[14px]'],
                        label: ['text-[10px]'],
                        mainWrapper: "w-full",
                    }}
                />
            </div>
            <div className="flex flex-col gap-3">
                <span className="text-[#545778] font-[500] text-[15px]">{t('create_new_ticket.describe')}</span>
                <textarea className={clsx("bg-[#0D1018] border-0 rounded-lg min-h-[200px] max-h-[200px] app-scrollbar", cls.bar_input)} />
            </div>
            <div className="flex justify-end h-auto items-center gap-3">
                <div className="flex gap-3 w-auto h-full items-center">
                    <div className="text-white w-auto text-[14px] font-[500]">{t('create_new_ticket.max_size')}</div>
                    <IconUploadFile className="fill-[#545778] w-5 h-5" />
                </div>
                {/* <Button disableAnimation className="relative w-auto h-auto">
                    <SvgCreateNewTicket />
                    <span className="flex gap-2 absolute items-center text-[#0D1018]">
                        <span className="text-[24px]">+</span>
                        <span className="text-[12px]">{t('create_new_ticket.create_ticket').toUpperCase()}</span>
                    </span>
                </Button> */}
                <div className={clsx(cls.create_ticket, 'w-[168px] h-[38px]')}>
                    <div className={cls.create_ticket_inner}>
                        <Button
                            classNames={{
                                base: 'relative w-full h-full',
                            }}
                        >
                            {t('create_new_ticket.create_ticket').toUpperCase()}
                        </Button>
                    </div>
                </div>
                
            </div>
            <div className=" rounded-lg border-[#1B2130] border-[1px] p-2 w-full h-auto relative text-wrap break-words">
                <div className="text-[#545778] font-[13px] text-wrap h-full relative">zip,rar,svg,txt,png,jpeg,jpg,mp4,mp3,pdf,docx,doc,xlsx,xls,webp</div>
            </div>
        </div>
    )
}

export default CreateNewTicket;