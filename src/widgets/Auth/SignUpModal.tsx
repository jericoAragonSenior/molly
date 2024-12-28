
import clsx from "clsx";
import cls from "./Auth.module.sass"
import { Input } from "@/shared/ui/Input/Input";

import IconEmail from "@/shared/assets/icons/icon-email.svg"
import IconLock from "@/shared/assets/icons/icon-lock.svg"
import IconStream from "@/shared/assets/icons/icon-steam-logo.svg"
import { FC, useState } from "react";
import { useTranslations } from "next-intl";
import Button from "@/shared/ui/Button/Button";

interface SignUpModalProps {
    onClickSignIn: () => void,
}



const SignUpModal: FC<SignUpModalProps> = ({ onClickSignIn }) => {

    const t = useTranslations()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

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
                <Input
                    value={password}
                    onChange={v => {
                        setPassword(v)
                    }}
                    label={t('auth.password_label').toLocaleUpperCase()}
                    theme='theme-1'
                    placeholder={t('auth.password_placeholder')}
                    type={'password'}
                    startContent={<IconLock className={clsx(cls.box_icon, cls.input_search_icon)} />}
                    classNames={{
                        inputWrapper: [cls.box],
                        input: [cls.box_value, 'w-full p-10 text-[13x]'],
                        label: ['text-[10px]'],
                        mainWrapper: "w-full",
                    }}
                />
                <Input
                    value={repeatPassword}
                    onChange={v => {
                        setRepeatPassword(v)
                    }}
                    label={t('auth.password_label').toLocaleUpperCase()}
                    theme='theme-1'
                    placeholder={t('auth.password_placeholder')}
                    type={'password'}
                    startContent={<IconLock className={clsx(cls.box_icon, cls.input_search_icon)} />}
                    classNames={{
                        inputWrapper: [cls.box],
                        input: [cls.box_value, 'w-full p-10 text-[13x]'],
                        label: ['text-[10px]'],
                        base: "w-full",
                        mainWrapper: "w-full"
                    }}
                />
            </div>
            <div className="flex flex-col gap-3 mt-3">
                <div className={clsx(cls.bg_gradent_gray_out, cls.border_r_12)}>
                    <Button
                        classNames={{
                            content: [cls.bg_gradent_gray, cls.border_gradent, 'text-black py-4 border-none'],
                            base: ["w-full", cls.border_r_12]
                        }}
                    >
                        <span className="font-[900] text-[14px] text-[rgba(21, 26, 38, 1)]">
                            {t('auth.create_new_account')}
                        </span>
                    </Button >
                </div>
                <div className="flex justify-center gap-4 items-center">
                    <div className=" h-full flex items-center flex-1">
                        <div className="border-[1px] border-[#2C3244] w-full">

                        </div>
                    </div>
                    <div className="">or</div>
                    <div className=" h-full flex items-center flex-1">
                        <div className="border-[1px] border-[#2C3244] w-full">

                        </div>
                    </div>
                </div>
                <div className={clsx(cls.bg_gradent_steam_out, cls.border_r_12)}>
                    <Button
                        classNames={{
                            content: [cls.bg_gradent_steam, 'text-white py-4 flex'],
                            base: ["w-full", cls.border_r_12]
                        }}
                        startContent={<IconStream className={clsx(cls.steam_box, cls.steam_icon)} />}
                    >
                        <span className="font-[400] text-[14px] text-[rgba(21, 26, 38, 1)]">
                            {t('auth.sigin_in_via_steam')}
                        </span>
                    </Button >
                </div>
                <div className={clsx(cls.bg_gradent_black_out, cls.border_r_12)}>
                    <Button
                        onPress={onClickSignIn}
                        classNames={{
                            content: [cls.bg_gradent_black, 'text-white py-4 flex'],
                            base: ["w-full", cls.border_r_12]
                        }}
                    >
                        <span className="font-[400] text-[14px] text-[rgba(21, 26, 38, 1)]">
                            {t('auth.sigin_btn_text')}
                        </span>
                    </Button>
                </div>

            </div>
        </div >
    )
}

export default SignUpModal;