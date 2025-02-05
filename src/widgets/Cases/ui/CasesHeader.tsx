"use client"

import clsx from "clsx";
import cls from "./Cases.module.sass";

import IconCases from "@/shared/assets/icons/icon-cases-header.svg"
import IconPlus from "@/shared/assets/icons/icon-black-plus.svg"
import IconCreateModalLogo from "@/shared/assets/icons/icon-green-plus.svg"

import { useTranslations } from "next-intl";
import { useModal } from "@/shared/context/ModalContext";

import Button from "@/shared/ui/Button/Button";
import CreateCaseModal from "./CreateCase/CreateCaseModal";

const CasesHeader = () => {

    // For translation
    const t = useTranslations();

    // For create case Modal
    const { openModal } = useModal();


    // Open create case Modal
    const createCase = () => {
        openModal(
            <CreateCaseModal />,
            {},
            <IconCreateModalLogo className=" w-[20px] h-[20px]" />,
            t('create_case.title'),
            {
                body: 'lg:w-full',
                modal: 'relative w-full lg:h-full lg:w-screen h-screen flex lg:items-start justify-center items-center'
            },
            true
        )
    }

    return (
        <div className={clsx("flex mx-10 lg:mx-5 2sm:!mt-10", cls.header_border)}>
            <div className={clsx(cls.header_body, "flex  justify-between sm:justify-center items-center md:flex-col md:pb-3 pr-3 md:pr-0")}>
                <div className="flex gap-4 items-center h-[96px] md:text-center relative">
                    <div className="w-[96px] h-[96px] flex 2sm:absolute 2sm:-top-1/2 2sm:-translate-x-1/2 2sm:left-1/2">
                        <IconCases />
                    </div>
                    <div className="flex-col gap-[6px] flex 2sm:mt-4">
                        <span className=" uppercase text-[14px] font-[700] text-[#BFC7D8]">{t('cases_header.title')}</span>
                        <span className="text-[12px] font-[500] text-[#566484]">{t('cases_header.content')}</span>
                    </div>
                </div>
                <div className={clsx(cls.shadow, 'py-[2px] !z-10 flex items-center justify-center relative')}>
                    <Button
                        theme='grey-4'
                        strokeSize='reg'
                        backdrop
                        hexagon
                        hexagonAxis='x'
                        classNames={{
                            base: clsx('h-10', cls.header_btn),
                            content: clsx('px-6 text-xs', cls.header_btn_inner)
                        }}
                        startContent={<IconPlus className="w-[20px] h-[20px]" />}
                        onClick={createCase}
                    >
                        <span className={clsx("font-[900] text-[14px] text-[#121722] uppercase", cls.header_btn_font)}>{t('cases_header.create_case')}</span>
                    </Button>
                </div>
               
                
            </div>
        </div>
    )
}

export default CasesHeader;