"use client"
import Button from '@/shared/ui/Button/Button';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';


interface ClassnamesConfig {
    baseInvisible?: string | string[]
    baseVisible?: string | string[]
    contentInvisible?: string | string[]
    contentVisible?: string | string[]
    headerInvisible?: string | string[]
    headerVisible?: string | string[]
    headerBase: string
    headerBaseInVisible: string
    headerBaseVisible: string
    headerTitle?: string
    headerTitleInVisible?: string
    headerTitleVisible?: string
    headerContent?: string | string[]
    base?: string | string[]
    content?: string | string[]
    icon?: string
    iconInvisible?: string
    iconVisible?: string
}

interface CollapseProps {
    classNames: ClassnamesConfig
    header?: string | React.ReactNode
    content?: string | React.ReactNode
    headerIcon: React.ReactNode
    line: boolean
}



const Collapse = ({ header, content, headerIcon, classNames, line }: CollapseProps) => {

    const t = useTranslations();

    const [isActive, setIsActive] = useState<boolean>(false)



    return (
        <div className={clsx(classNames?.base, isActive ? classNames?.baseVisible : classNames?.baseInvisible)}>
            <Button onPress={() => setIsActive(!isActive)} classNames={{ base: [classNames?.headerBase, isActive ? classNames?.headerBaseVisible : classNames?.headerBaseInVisible], content: classNames?.headerContent }}
                endContent={
                    <div className={clsx(classNames.icon, isActive && classNames.iconVisible)}>
                        {headerIcon}
                    </div>
                }>
                <span className={clsx(classNames?.headerTitle, isActive ? classNames?.headerTitleVisible : classNames.headerTitleInVisible)}>{typeof (header) == "string" ? t(header) : header}</span>

            </Button>
            {
                line == true &&
                <div className={clsx('w-full bg-[#1F2739] flex h-0', isActive && 'h-[1px] ')}>
                </div>
            }
            <div className={clsx(classNames.content, isActive && classNames.contentVisible)}>
                {typeof (content) == "string" ? t(content) : content}
            </div>
        </div >
    )
}

export default Collapse;