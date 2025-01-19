
import clsx from "clsx";
import cls from "./Auth.module.sass"
import { FC, useState } from "react";
import { useTranslations } from "next-intl";

import { Input } from "@/shared/ui/Input/Input";
import IconEmail from "@/shared/assets/icons/icon-email.svg"
import IconLock from "@/shared/assets/icons/icon-lock.svg"
import IconStream from "@/shared/assets/icons/icon-steam-logo.svg"
import IconTwitch from '@/shared/assets/icons/icon-twitch.svg'
import Button from "@/shared/ui/Button/Button";

interface SignInModalProps {
    onClickSignUp: () => void,
    onClickForgetPassword: () => void
    onClickSignIn: () => void
}

type AuthGroup = "signin" | "signup";


const SignInModal: FC<SignInModalProps> = ({ onClickSignUp, onClickForgetPassword, onClickSignIn }) => {

    // For translation
    const t = useTranslations()

    // Get email
    const [email, setEmail] = useState('');
    // Get password
    const [password, setPassword] = useState('');
    // Get auth buttons
    const [clickSide, setClickSide] = useState<AuthGroup>('signin');



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
                        >
                            <span className={clsx(clickSide == 'signin' ? "text-[#121722]" : "text-[#d1d9eb6e]", "text-[12px] font-primary-bold uppercase")}>{t('auth.login')}</span>
                        </Button>
                        <Button
                            hexagon
                            disableAnimation
                            hexagonAxis="x"
                            classNames={{
                                base: clsx(clickSide == 'signup' && cls.btn_auth_group_signin, 'h-full'),
                                content: clsx(clickSide == 'signup' && cls.btn_auth_group_signin_inner, 'w-full h-full py-[9px] px-[43px]')
                            }}
                            onClick={() => { setClickSide('signup'); onClickSignUp() }}
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
                        mainWrapper: "w-full"
                    }}
                />
            </div>
            <span className="font-[500] text-[12px] text-[#49526D] text-right px-3 underline py-2">
                <span className="hover:cursor-pointer" onClick={onClickForgetPassword}>{t('auth.forget_pwd_btn_text')}</span>
            </span>
            <div className="flex flex-col gap-3">
                <div className={clsx(cls.bg_gradent_gray_out, cls.border_r_12)}>
                    <Button
                        classNames={{
                            content: [cls.btn_content, cls.bg_gradent_gray, cls.border_gradent, 'text-black py-3 border-none'],
                            base: ["w-full", cls.border_r_12]
                        }}
                        onClick={onClickSignIn}
                    >
                        <span className="font-[900] text-[14px] text-[rgba(21, 26, 38, 1)]">
                            {t('auth.sigin_btn_text')}
                        </span>
                    </Button>
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
                <div className={clsx(cls.bg_gradent_twitch_out, cls.border_r_12)}>
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

export default SignInModal;