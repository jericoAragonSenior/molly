"use client"
import clsx from "clsx";
import cls from "../Cases.module.sass";
import Image from "next/image";

interface CaseImageItemProps {
    picUrl: string
}

const CaseImageItem = ({ picUrl }: CaseImageItemProps) => {
    return (
        <div className={clsx(cls.case_item_active)}>
            <div className={clsx(cls.case_item_active_body, "flex justify-center items-center")}>
                <Image src={picUrl} height={20} width={34} alt="box" />
            </div>
        </div>
    )
}

export default CaseImageItem; 