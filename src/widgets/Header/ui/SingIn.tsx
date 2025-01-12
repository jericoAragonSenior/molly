import { useTranslations } from "next-intl"
import Button from '@/shared/ui/Button/Button'

import { useModal } from "@/shared/context/ModalContext"
import SignUpModal from "@/widgets/Auth/SignUpModal"
import ForgetPassword from "@/widgets/Auth/ForgetPasswordModal"

import HeaderIcon from '@/shared/assets/icons/icon-auth.svg'

import cls from './Header.module.sass'





export const SignIn = () => {
    const { openModal } = useModal();


    const t = useTranslations()

    const signInModal = () => {
        // openModal(
        //     <SignInModal onClickForgetPassword={foregetPassword} onClickSignUp={signUpModal} />,
        //     {},
        //     <HeaderIcon />,
        //     t('auth.sigin_btn_text'),
        //     {
        //         body: '',
        //         modal: 'relative w-full lg:h-full h-screen flex lg:items-start justify-center items-center'
        //     }
        // );
    };

    const signUpModal = () => {
        openModal(
            <SignUpModal onClickSignIn={signInModal} />,
            {},
            <HeaderIcon />,
            t('auth.signup_btn_text'),
            {
                body: '',
                modal: 'relative w-full lg:h-full h-screen flex lg:items-start justify-center items-center'
            }
        );
    }

    const foregetPassword = () => {
        openModal(
            <ForgetPassword />,
            {},
            <HeaderIcon />,
            t('auth.password_recovery'),
            {
                body: '',
                modal: 'relative w-full lg:h-full h-screen flex justify-center items-center'
            }
        );
    }

    return (
        <>
            <Button
                strokeSize='thin'
                theme='grey-2'
                classNames={{
                    base: [cls.btn, 'lg:w-full', 'text-black'], content: [cls.btn_content, cls.bg_gradent_gray, 'text-black']
                }}
                onPress={signInModal}
            >
                <span className="text-[#151A26]">
                    {t('auth.signin')}
                </span>
            </Button >
        </>
    );
}