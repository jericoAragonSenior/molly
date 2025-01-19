"use client"

import { Input } from "@/shared/ui/Input/Input";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

import cls from "./Support.module.sass"
import clsx from "clsx";
import SelectProblem from "./SelectProblem";
import Button from "@/shared/ui/Button/Button";
import IconUploadFile from '@/shared/assets/icons/icon-select-file.svg'

const CreateNewTicket = () => {

    // For translation
    const t = useTranslations();

    // Get subject
    const [subject, setSubject] = useState('');

    // Ref input
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    // File upload function
    const clickUplaod = () => {
        if(fileInputRef.current) {
            fileInputRef.current.click();
    
        }
    }

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
            <div className="flex justify-end h-auto items-center gap-3 2sm:flex-col">
                <div className="flex gap-3 w-auto h-full items-center hover:cursor-pointer" onClick={clickUplaod}>
                    <div className="text-white w-auto text-[14px] font-[500]">{t('create_new_ticket.max_size')}</div>
                    <input type="file" ref={fileInputRef} style={{ display: 'none' }} />
                    <IconUploadFile className="fill-[#545778] w-5 h-5" />
                </div>
                <div className={clsx(cls.button_shadow, 'h-[45px] w-auto z-10 flex justify-center items-center')}>
                    <div className={clsx(cls.create_ticket, 'w-[168px] h-[38px] z-[10]')}>
                        <div className={cls.create_ticket_inner}>
                            <Button
                                classNames={{
                                    base: 'relative w-full h-full',
                                }}
                            >
                                <span className="text-[#0D1018] justify-center items-center text-[12px] font-primary-bold uppercase flex gap-1">
                                    <span className="text-[18px] font-primary-med">+</span>
                                    <span>{t('create_new_ticket.create_ticket')}</span>
                                </span>
                            </Button>
                        </div>
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