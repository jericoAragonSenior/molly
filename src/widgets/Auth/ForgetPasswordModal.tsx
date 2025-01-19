
"use client"
import clsx from "clsx";
import { useState } from "react";
import { useTranslations } from "next-intl";

import cls from "./Auth.module.sass"

import Button from "@/shared/ui/Button/Button";
import IconEmail from "@/shared/assets/icons/icon-email.svg"
import Close from '@/shared/assets/icons/icon-modal-close.svg';
import HeaderIcon from '@/shared/assets/icons/icon-auth.svg'
import IconRecoveried from '@/shared/assets/icons/icon-open-email.svg'
import { Input } from "@/shared/ui/Input/Input";


const ForgetPassword = () => {

    // For translation
    const t = useTranslations()

    // Get email
    const [email, setEmail] = useState('');

    // Recovery state
    const [isSent, setIsSent] = useState<boolean>(false)

    return (
        <div>
            <div className={clsx(cls.modal, 'py-6')}>
                <div className="flex flex-col gap-6">
                    <Input
                        value={email}
                        onChange={v => {
                            setEmail(v)
                        }}
                        label={t('auth.email_label').toUpperCase()}
                        theme='theme-1'
                        placeholder={t('auth.email_placeholder')}
                        startContent={<IconEmail className={clsx(cls.box_icon, cls.input_search_icon)} />}
                        classNames={{
                            inputWrapper: [cls.box],
                            input: [cls.box_value, 'w-full text-[14px]'],
                            label: ['text-[10px]'],
                            mainWrapper: "w-full"
                        }}
                    />
                </div>
                <div className="flex flex-col gap-3 mt-4">
                    <div className={clsx(cls.bg_gradent_gray_out, cls.border_r_12)}>
                        <Button
                            classNames={{
                                content: [cls.btn_content, cls.bg_gradent_gray, cls.border_gradent, 'text-black py-3 border-none'],
                                base: ["w-full", cls.border_r_12]
                            }}
                            onClick={() => setIsSent(true)}
                        >
                            <span className="font-[900] text-[14px] text-[rgba(21, 26, 38, 1)]">
                                {t('auth.continue')}
                            </span>
                        </Button >
                    </div>
                </div>

            </div >
            {
                isSent && 
                <div className="w-full absolute h-auto left-0 p-3 -bottom-full">
                    <div className={clsx("w-full", cls.revovery_modal)}>
                        <div className={clsx(cls.header, 'flex justify-between items-center w-auto h-auto p-1 gap-4 min-h-[30px]  border-b-[2px] border-[#161C28]')}>
                            <div className={clsx('flex gap-3 items-center')}>
                                <div className={clsx(cls.header_maxWidth)}>
                                    <HeaderIcon />
                                </div>
                                <span>
                                    {t('auth.password_recovery')}
                                </span>
                            </div>
                            <Button
                                startContent={<Close />}
                                className={clsx('flex justify-center items-center min-w-[30px] min-h-[30px]', cls.revovery_modal_header_content)}
                                onClick={() => setIsSent(false)}
                            />
                        </div>
                        <div className="w-full flex justify-center items-center flex-col gap-2 py-[29px]">
                            <IconRecoveried className="w-[56px] h-[56px] fill-[#16C390]" />
                            <span className="flex flex-col gpa-1 items-center justify-center">
                                <span className="text-[#17C591] uppercase font-primary-heavy-ultra text-[12px]">{t('auth.sent_email_success')}</span>
                                <span className="text-[#49516D] font-primary-med text-[12px]">{t('auth.check_email')}</span>
                            </span>
                        </div>
                    </div>
                </div>
            }
        </div>
        
    )
}

export default ForgetPassword;