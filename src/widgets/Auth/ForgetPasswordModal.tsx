
import clsx from "clsx";
import cls from "./Auth.module.sass"
import { Input } from "@/shared/ui/Input/Input";

import IconEmail from "@/shared/assets/icons/icon-email.svg"
import { useState } from "react";
import { useTranslations } from "next-intl";
import Button from "@/shared/ui/Button/Button";


const ForgetPassword = () => {

    const t = useTranslations()

    const [email, setEmail] = useState('');

    return (
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
                            content: [cls.btn_content, cls.bg_gradent_gray, cls.border_gradent, 'text-black py-4 border-none'],
                            base: ["w-full", cls.border_r_12]
                        }}
                    >
                        <span className="font-[900] text-[14px] text-[rgba(21, 26, 38, 1)]">
                            {t('auth.continue')}
                        </span>
                    </Button >
                </div>
            </div>
        </div >
    )
}

export default ForgetPassword;