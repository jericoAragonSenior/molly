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

const CreateCaseModal = () => {

    // For translation
    const t = useTranslations();

    // Values for case information
    const [caseName, setCaseName] = useState<string>('');



    return (
        <div className={clsx(cls.create_modal, "w-[1183px] max-h-[calc(100vh-130px)] min-h-[calc(100vh-130px)] lg:w-full flex flex-col overflow-auto app-scrollbar")}>
            <div className="w-full flex relative md:flex-col">
                <div className={clsx("min-w-[300px] max-w-[410px] md:max-w-[700px] 3sm:max-w-[500px] 2sm:max-w-[350px] sm:max-w-[300px] p-5 flex flex-col gap-[15px] relative md:w-full")}>
                    <Input
                        value={caseName}
                        onChange={v => {
                            setCaseName(v)
                        }}
                        label={t('create_case.case_name').toUpperCase()}
                        theme='theme-1'
                        placeholder={t('create_case.case_name_placeholder')}
                        classNames={{
                            inputWrapper: ['!rounded-md'],
                            input: ['w-full text-[14px]'],
                            label: ['text-[10px]'],
                            mainWrapper: "w-full"
                        }}
                    />
                    <SelectType />
                    <SelectCaseImage />
                    <SetDropChances />
                </div>
                <div className="flex flex-1 py-5 h-[700px] relative">
                    <div className={clsx(cls.modal_body, "w-full h-full")}>
                        <div className={clsx(cls.modal_body_inner, "w-full h-full flex flex-col p-5 2sm:px-1")}>
                            <ModalBar />
                            <div className="flex-1 overflow-auto my-3 app-scrollbar relative">
                                <CaseItems  />
                            </div>
                        </div>
                    </div>
                    <div className={clsx(cls.chance_body, ' absolute left-0 bottom-0 w-full h-[98px] z-[35]')}>
                    </div>
                </div>
                
            </div>
            <CreateCaseFooter />
        </div>
    )
}

export default CreateCaseModal;