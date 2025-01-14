import clsx from "clsx";
import cls from "../Cases.module.sass";
import { useTranslations } from "next-intl";
import { Input } from "@/shared/ui/Input/Input";
import { useState } from "react";
import SelectType from "./SelectType";
import SelectCaseImage from "./SelectCaseImage";
import SetDropChances from "./SetDropChances";
import CreateCaseFooter from "./CreateCaseFooter";
import ModalBar from "./ModalBar";
import CaseItems from "./CaseItems";

import IconArrow from "@/shared/assets/icons/icon-arrow-round.svg"

const CreateCaseModal = () => {

    // For translation
    const t = useTranslations();

    // Values for case information
    const [caseName, setCaseName] = useState<string>('');

    // LeftBar state
    const [isLeftBar, setIsLeftBar] = useState<boolean>(false);

    // Open Leftbar(responsive)
    const openLeftBar = () => {
        setIsLeftBar(!isLeftBar)
    }

    return (
        <div className={clsx(cls.create_modal, "w-[1183px] max-h-[calc(100vh-130px)] min-h-[calc(100vh-130px)] lg:w-full flex flex-col overflow-auto app-scrollbar")}>
            <div className={clsx("fixed top-[60px] hidden md:flex z-[40]", isLeftBar ? "rotate-0 duration-100" : "rotate-180 duration-100")} onClick={openLeftBar}>
                <IconArrow className="w-9 h-9 fill-[#0e201b] stroke-primary-400" />
            </div>
            <div className="w-full flex relative">
                <div className={clsx("min-w-[410px] max-w-[410px] p-5 flex flex-col gap-[15px] md:fixed relative md:max-h-[calc(100vh-90px)] md:min-h-[calc(100vh-90px)] md:overflow-auto sm:max-w-full overflow-auto sm:min-w-full md:top-[90px] md:bg-[#1A202E] md:z-[39]", isLeftBar == false ? "md:-left-full duration-200" : "md:left-1 duration-200")}>
                    <Input
                        value={caseName}
                        onChange={v => {
                            setCaseName(v)
                        }}
                        label={t('create_case.case_name').toUpperCase()}
                        theme='theme-1'
                        placeholder={t('create_case.case_name_placeholder')}
                        classNames={{
                            inputWrapper: [' !rounded-md'],
                            input: ['w-full text-[14px]'],
                            label: ['text-[10px]'],
                            mainWrapper: "w-full"
                        }}
                    />
                    <SelectType />
                    <SelectCaseImage />
                    <SetDropChances />
                </div>
                <div className="flex flex-1 py-5 h-[700px]">
                    <div className={clsx(cls.modal_body, "w-full h-full")}>
                        <div className={clsx(cls.modal_body_inner, "w-full h-full flex flex-col p-5")}>
                            <ModalBar />
                            <div className="flex-1 overflow-auto my-3 app-scrollbar relative">
                                <CaseItems />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={clsx(cls.chance_body, ' absolute left-0 bottom-1 w-full h-[98px] z-[35]')}>

                </div>
            </div>
            <CreateCaseFooter />
        </div>
    )
}

export default CreateCaseModal;