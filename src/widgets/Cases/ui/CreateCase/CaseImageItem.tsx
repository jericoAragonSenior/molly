"use client"
import clsx from "clsx";
import cls from "../Cases.module.sass";
import Image from "next/image";
import { useState } from "react";

interface CaseImageItemProps {
    picUrl: string
}

const CaseImageItem = ({ picUrl }: CaseImageItemProps) => {

    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <div className={clsx(isActive == true ? cls.case_item_active : cls.case_item_border, 'hover:cursor-pointer')} onClick={() => setIsActive(!isActive)}>
            <div className={clsx(isActive == true ? cls.case_item_active_body : cls.case_item_border_body, "flex justify-center items-center")}>
                <Image src={picUrl} height={20} width={34} alt="box" />
            </div>
        </div>
    )
}

export default CaseImageItem; 