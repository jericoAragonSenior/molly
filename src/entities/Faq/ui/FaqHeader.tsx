"use client"
import clsx from 'clsx';
import cls from './Faq.module.sass'
import { useCommonStore } from '@/entities/Common/model/store';
import { useEffect } from 'react';

const FaqHeader = () => {

    const setItemPosition = useCommonStore(state => state.setItemPosition)

    useEffect(() => {
        setItemPosition("left")
    }, [])

    return (
        <div className={clsx('h-[80px] w-full', cls.header_gradient)}></div>
    )
}

export default FaqHeader;