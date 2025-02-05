"use client"

import clsx from 'clsx'
import cls from './OpenCase.module.sass'

import HeaderBg from '@/shared/assets/section-header-bg-top.svg'
import IconCase from '@/shared/assets/icons/icon-case-open.svg'
import IconInstance from '@/shared/assets/icons/icon-instance.svg'

import Pagination from '@/shared/ui/Pagination/ui/Pagination'
import { paginationData } from '../model/items'
import { useTranslations } from 'next-intl'
import Button from '@/shared/ui/Button/Button'
import { useCommonStore } from '@/entities/Common/model/store'
import { useEffect, useState } from 'react'
import { useModal } from '@/shared/context/ModalContext'
import CongratulationsBody from './CongratulationsBody/CongratulationsBody'
import CongratulationsHeader from './CongratulationsBody/CongratulationsHeader'


const OpenCaseBar = () => {

    // For translation
    const t = useTranslations();

    const currentCaseNumber = useCommonStore(state => state.currentCaseNumber)
    const caseCount = useCommonStore(state => state.caseCount)

    // Get setCaseCount function
    const setCaseCount = useCommonStore(state => state.setCaseCount)

    const setCurrentCaseNumber = useCommonStore(state => state.setCurrentCaseNumber)
    const selectedCaseItems = useCommonStore(state => state.selectedCaseItems)

    // Case count value
    const [count, setCount] = useState<number>(0);

    // Balance state
    const [isRefill, setIsRefill] = useState<boolean>(false);

    // Selected case items
    const [caseItems, setCaseItems] = useState<any[]>([]);

    // For pagination function
    const setPagination = (value: number) => {
        setCount(value)
    }
    
    const { openModal, closeModal } = useModal();

    // For open case function
    const openCase = () => {
        if (count > 0) {
            setCaseCount(count);
            setCurrentCaseNumber(0);
        }
    }

    useEffect(() => {
        setCaseCount(0)
    }, [])

    useEffect(() => {
        setCaseItems(selectedCaseItems);
    }, [selectedCaseItems])

    useEffect(() => {
        if (caseCount == currentCaseNumber && caseCount > 0) {
            setTimeout(() => {
                openModal(
                    <CongratulationsBody items={caseItems} onClose={closeModal} />,
                    {},
                    <CongratulationsHeader />,
                    '',
                    {
                        body: ' !overflow-x-none',
                        modal: 'relative w-full lg:h-full h-screen flex lg:items-start justify-center items-center !overflow-x-hidden',
                    },
                    false
                );
            }, 1500);
        }
    }, [caseCount, currentCaseNumber])


    return (
        <div>
            <div className='relative w-full overflow-hidden h-auto py-3'>
                <div className='w-full absolute bottom-0 h-[74px] -z-10 flex md:hidden'>
                    <HeaderBg className={clsx(cls.border_top, isRefill == true ? 'top-[30px]' : 'top-[70px]')} />
                </div>
                {
                    isRefill == true ?
                        <div className='flex justify-between h-auto min-h-[161px] items-center 3md:flex-wrap 3md:justify-center gap-5 mb-4'>
                            <div className='w-1/3 flex flex-col gap-4 justify-center items-center 3md:w-auto'>
                                <span className='text-[#5F6C87] text-[13px] font-[500] 2sm:hidden flex'>{t('open_case.count_title')}</span>
                                <Pagination items={paginationData} onClick={setPagination} />
                            </div>
                            <div className='w-1/3 flex flex-col gap-4 justify-center items-center 3md:w-auto'>
                                <span className='text-[#5F6C87] text-[13px] font-[500] 2sm:hidden flex'>{t('open_case.click_open')}</span>
                                <div className={clsx('min-w-[313px] h-[52px] flex justify-center items-center relative', cls.btn_hexagon_yellow_shadow)}>
                                    <div className={clsx('w-[313px] h-[48px]', cls.btn_hexagon_yellow)}>
                                        <div className={clsx('w-full h-full', cls.btn_hexagon_yellow_inner)}>
                                            <Button fullWidth={true} hexagon={true} classNames={{
                                                base: "w-full h-full"
                                            }}
                                                startContent={<IconCase className='w-[22px] h-[20px]' />}
                                                onClick={openCase}
                                            >
                                                <span className='text-[#000000] text-[15px] font-[900]'>{t('open_case.open_case') + '• $15.50'}</span>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-1/3 flex flex-col gap-4 justify-center items-center 3md:w-auto'>
                                <div className='flex gap-2 2sm:hidden'>
                                    <span className='text-[#5F6C87] text-[13px] font-[500]'>{t('open_case.fast_mod')}</span>
                                </div>
                                <div className={clsx('min-w-[313px] h-[52px] flex justify-center items-center relative', cls.btn_hexagon_green_shadow)}>
                                    <div className={clsx('w-[313px] h-[48px]', cls.btn_hexagon_green)}>
                                        <div className={clsx('w-full h-full', cls.btn_hexagon_green_inner)}>
                                            <Button fullWidth={true} hexagon={true} classNames={{
                                                base: "w-full h-full"
                                            }}
                                                startContent={<IconInstance className='w-[20px] h-[14px]' />}
                                            >
                                                <span className='text-[#000000] text-[15px] font-[900]'>{t('open_case.instant_result')}</span>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='flex h-auto items-center flex-col gap-4 pb-4 justify-center w-full'>
                            <div className={clsx(cls.btn_refill, 'w-[313px] h-[48px]')}>
                                <div className={cls.btn_refill_inner}>
                                    <Button fullWidth={true} classNames={{
                                        base: "w-full h-full"
                                    }}
                                    >
                                        <span className='text-[#DD2C2C] text-[15px] font-[900]'>{'$15.50 ' + t('open_case.refill') + ' $5.50'}</span>
                                    </Button>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 justify-center items-center'>
                                <span className='text-[#5F6C87] text-[13px] font-[500]'>{t('open_case.refill_text')}</span>
                                <div className={clsx('w-[233px] h-[48px]', cls.btn_hexagon_green)}>
                                    <div className={clsx('w-full h-full', cls.btn_hexagon_green_inner)}>
                                        <Button fullWidth={true} classNames={{
                                            base: "w-full h-full"
                                        }}
                                            onClick={() => setIsRefill(true)}
                                        >
                                            <span className='text-[#000000] text-[15px] font-[900]'>{t('open_case.refill_btn')}</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
                
            </div>
        </div>
        
    )
}

export default OpenCaseBar;