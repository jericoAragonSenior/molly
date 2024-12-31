"use client"
import List from "@/shared/ui/List/List";
import { code, listItems } from "../model/item";
import { useTranslations } from "next-intl";

import cls from "./ProvavlyFair.module.sass"
import clsx from "clsx";

import SvgFooterBtn from '@/shared/assets/provably-fair-footer-btn.svg'
import { useState } from "react";

import { ClickSide } from "../model/type";
import SelectGame from "./SelectGame";
import { Input } from "@/shared/ui/Input/Input";

import IconDoubleArrow from '@/shared/assets/icons/icon-double-arrow.svg'
import IconCopy from '@/shared/assets/icons/icon-copy.svg'
import IconCheck from '@/shared/assets/icons/icon-check-2.svg'


const ProvablyFairBody = () => {

    const t = useTranslations();

    const [clickSide, setClickSide] = useState<ClickSide>('right');
    const [clientSeed, setClientSeed] = useState<string>('7e2d8926de5f4df1e1205f28cc022bb2');
    const [serverSeed, setServerSeed] = useState<string>('7e2d8926de5f4df1e1205f28cc022bb2');
    const [isShow, setIsShow] = useState<boolean>(false)
    const [isCopy, setIsCopy] = useState<boolean>(false)

    const leftClick = () => {
        setClickSide('left')
    }

    const rightClick = () => {
        setClickSide('right')
    }

    const showHeader = () => {
        setIsShow(!isShow)
    }

    const copyText = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setIsCopy(true)
            setTimeout(() => {
                setIsCopy(false)
            }, 2000);
        } catch (error) {
            alert("Error!!!")
        }
    }

    return (
        <div className="h-auto w-full relative flex">
            <div className={clsx("w-auto h-auto fixed top-[85px] left-3 md:flex hidden z-[46] p-2 rounded-md  duration-150 transform", isShow && cls.rotateX)} onClick={showHeader}>
                <IconDoubleArrow className="w-6 h-6 fill-[#24FDBC]" />
            </div>
            <div className={clsx("min-w-[237px] h-full sticky lg:top-[100px] top-[10px] duration-150 z-[45] md:fixed md:h-auto md:max-w-0 md:min-w-0 md:overflow-hidden", isShow && "!min-w-[237px] transition-all")}>
                <List items={listItems} />
            </div>
            <div className="flex flex-col gap-4 w-full px-4 flex-1 h-auto">
                <div className={clsx(cls.body)}>
                    <span className={clsx(cls.body_title)}>{t('fair_body_data1.title')}</span>
                    <span className={clsx(cls.body_content)}>{t('fair_body_data1.content1')}</span>
                    <span className={clsx(cls.body_content)}>{t('fair_body_data1.content2')}</span>
                    <span className={clsx(cls.body_title)}>{t('fair_body_data1.footer')}</span>
                </div>
                <div className={clsx(cls.body)}>
                    <span className={clsx(cls.body_title)}>{t('fair_body_data2.title')}</span>
                    <span className={clsx(cls.body_content)}>{t('fair_body_data2.content')}</span>
                    <div className={clsx("bg-[#121722] overflow-auto text-[#AEB2C0] p-4 rounded-lg shadow-md relative")}>
                        <div className="absolute top-2 right-2 w-5 h-5" onClick={copyText}>
                            {
                                isCopy == false ?
                                    <IconCopy />
                                    :
                                    <IconCheck className="fill-white" />
                            }
                        </div>
                        <pre className={clsx("break-words whitespace-pre-wrap")}>
                            <code className={clsx("w-full block whitespace-pre-wrap overflow-auto")}>
                                {code}
                            </code>
                        </pre>
                    </div>
                </div>
                <div className={clsx(cls.body)}>
                    <div className={'flex justify-center w-full'}>
                        <div className={clsx(cls.footer_btn_left, clickSide == 'left' ? 'z-[30] text-[#121722]' : 'text-[#D1D9EB40]', ' hover:cursor-pointer text-[12px] font-[900]')} onClick={leftClick}>
                            <div className={clsx(cls.footer_btn_left_inner)}>
                                <div className={clsx(clickSide == 'left' && cls.footer_btn_left_inner_active)}>
                                    {t('fair_footer.seed')}
                                </div>
                            </div>
                        </div>
                        <div className={clsx(cls.footer_btn_right, clickSide == 'right' ? 'z-[30] text-[#121722]' : 'text-[#D1D9EB40]', '-ml-4 hover:cursor-pointer text-[12px] font-[900]')} onClick={rightClick}>
                            <div className={cls.footer_btn_right_inner}>
                                <div className={clsx(clickSide == 'right' && cls.footer_btn_right_inner_active)}>
                                    {t('fair_footer.verification')}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className=" uppercase text-[12px] text-[#5F6C87]">{t('fair_footer.game')}</span>
                        <SelectGame />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className=" uppercase text-[12px] text-[#5F6C87]">{t('fair_footer.client_seed')}</span>
                        <Input
                            value={clientSeed}
                            onChange={v => {
                                setClientSeed(v)
                            }}
                            theme='theme-1'
                            placeholder={t('create_new_ticket.subject_placeholder')}
                            classNames={{
                                inputWrapper: [cls.box, '!bg-[#121722] !border-0 ] !p-6'],
                                input: [cls.box_value, 'w-full text-[14px] !text-white'],
                                label: ['text-[10px]'],
                                mainWrapper: "w-full",
                            }}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className=" uppercase text-[12px] text-[#5F6C87]">{t('fair_footer.server_seed')}</span>
                        <Input
                            value={serverSeed}
                            onChange={v => {
                                setServerSeed(v)
                            }}
                            theme='theme-1'
                            placeholder={t('create_new_ticket.subject_placeholder')}
                            classNames={{
                                inputWrapper: [cls.box, '!bg-[#121722] !border-0 ] !p-6'],
                                input: [cls.box_value, 'w-full text-[14px] !text-white'],
                                label: ['text-[10px]'],
                                mainWrapper: "w-full",
                            }}
                        />
                    </div>
                    <div className="flex relative justify-center">
                        <div className="relative w-auto h-full hover:cursor-pointer">
                            <span className="text-[#121722] text-[14px] uppercase font-[900] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                                {t('fair_footer.show_result')}
                            </span>
                            <div>
                                <SvgFooterBtn />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProvablyFairBody;