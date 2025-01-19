import { useTranslations } from "next-intl"
import Button from "@/shared/ui/Button/Button";

import clsx from "clsx";
import cls from "../Cases.module.sass"

import IconBagTick from "@/shared/assets/icons/icon-bag-tick.svg"
import IconPlus from "@/shared/assets/icons/icon-black-plus.svg"
import ProgressBar from "@/shared/ui/ProgressBar/ProgressBar";
import { progressData } from "../../model/items";

const CreateCaseFooter = () => {
    // For translation
    const t = useTranslations();

    return (
        <div className={clsx(cls.footer_body, "w-full")}>
            <div className={clsx(cls.footer_body_inner, "w-full h-full py-3 px-4")}>
                <div className="flex justify-between items-center flex-row md:flex-col md:justify-center md:items-center md:gap-4 gap-6">
                    <div className="flex-1 px-4 h-full justify-center items-center gap-[5px] flex flex-col md:order-1 md:w-full">
                        <span className="text-[9px] uppercase text-[#60719A] font-[700]">{t('cases_header.percent_of_income')}</span>
                        <ProgressBar items={progressData} />
                    </div>
                    <div className={clsx(cls.footer_body_btn, 'md:order-2')}>
                        <div className={clsx(cls.footer_body_btn_inner, "py-[10px] px-3 gap-2 flex items-center")}>
                            <IconBagTick className="w-6 h-6" />
                            <div className="flex gap-1">
                                <span className="text-[#60719A] text-[14px] font-[700]">{t('create_case.total_cost')}:</span>
                                <span className="flex items-center">
                                    <span className="text-[14px] font-[500] text-[#17E2A5]">$</span>
                                    <span className="text-[14px] font-[500] text-white">15.50</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(cls.shadow, 'py-[1px] !z-10 px-[1px] relative md:order-3')}>
                        <Button
                            theme='grey-4'
                            strokeSize='reg'
                            backdrop
                            hexagon
                            hexagonAxis='x'
                            classNames={{
                                base: clsx('h-10 !z-[1]', cls.header_btn),
                                content: clsx('px-6 text-xs', cls.header_btn_inner)
                            }}
                            startContent={<IconPlus className="w-[20px] h-[20px]" />}
                        >
                            <span className={clsx("font-[900] text-[14px] text-[#121722] uppercase", cls.header_btn_font)}>{t('cases_header.create_case')}</span>
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CreateCaseFooter;