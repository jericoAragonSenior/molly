
import { FC, useState } from "react";
import { useTranslations } from "next-intl";

import clsx from "clsx";
import cls from "./Auth.module.sass"
import { Input } from "@/shared/ui/Input/Input";

import IconEmail from "@/shared/assets/icons/icon-email.svg"
import IconLock from "@/shared/assets/icons/icon-lock.svg"
import IconStream from "@/shared/assets/icons/icon-steam-logo.svg"
import IconTwitch from '@/shared/assets/icons/icon-twitch.svg'
import Button from "@/shared/ui/Button/Button";


interface SignUpModalProps {
    onClickSignIn: () => void,
}


type AuthGroup = "signin" | "signup";

const SignUpModal: FC<SignUpModalProps> = ({ onClickSignIn }) => {

    const t = useTranslations()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    // Get auth buttons
    const [clickSide, setClickSide] = useState<AuthGroup>('signup');

    return (
        <div className={clsx(cls.modal, 'py-6 max-h-[calc(100vh-150px)] overflow-auto app-scrollbar')}>
            <div className="flex flex-col gap-6">
                <div className="w-full flex justify-center">
                    <Button
                        hexagon
                        disableAnimation
                        hexagonAxis="x"
                        classNames={{
                            base: clsx(cls.btn_auth_group, "h-auto w-auto"),
                            content: clsx(cls.btn_auth_group_inner, 'w-full h-full')
                        }}
                    >
                        <Button
                            hexagon
                            disableAnimation
                            hexagonAxis="x"
                            classNames={{
                                base: clsx(clickSide == 'signin' && cls.btn_auth_group_signin, 'h-full'),
                                content: clsx(clickSide == 'signin' && cls.btn_auth_group_signin_inner, 'w-full h-full py-[9px] px-[43px]')
                            }}
                            onClick={() => { setClickSide('signin'); onClickSignIn() }}
                        >
                            <span className={clsx(clickSide == 'signin' ? "text-[#121722]" : "text-[#d1d9eb6e]", "text-[12px] font-primary-bold uppercase")}>{t('auth.login')}</span>
                        </Button>
                        <Button
                            hexagon
                            disableAnimation
                            hexagonAxis="x"
                            classNames={{
                                base: clsx(clickSide == 'signup' && cls.btn_auth_group_signup, 'h-full'),
                                content: clsx(clickSide == 'signup' && cls.btn_auth_group_signup_inner, 'w-full h-full py-[9px] px-[43px]')
                            }}
                        >
                            <span className={clsx(clickSide == 'signup' ? "text-[#121722]" : "text-[#d1d9eb6e]", "text-[12px] font-primary-bold uppercase")}>{t('auth.register')}</span>
                        </Button>
                    </Button>
                </div>
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
                            content: [cls.bg_gradent_gray, cls.border_gradent, 'text-black py-3 border-none'],
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
                            content: [cls.bg_gradent_steam, 'text-white py-3 flex'],
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
                        classNames={{
                            content: [cls.bg_gradent_twitch, 'text-white py-3 flex'],
                            base: ["w-full", cls.border_r_12]
                        }}
                        startContent={<IconTwitch className="w-6 h-6 fill-[#FFFFFF]" />}
                    >
                        <span className="font-[400] text-[14px] text-[rgba(21, 26, 38, 1)]">
                            {t('auth.sigin_in_via_twitch')}
                        </span>
                    </Button>
                </div>

            </div>
        </div >
    )
}

export default SignUpModal;