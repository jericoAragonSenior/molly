"use client"

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Backshape from '@/shared/assets/open-case-backshape.svg'
import BackdropRays from '@/shared/assets/radial-rays-grey-3.png'
import Button from '@/shared/ui/Button/Button'
import IconTryagain from '@/shared/assets/icons/icon-try-again.svg'
import IconDollar from '@/shared/assets/icons/icon-dollar.svg'
import IconExclamation from '@/shared/assets/icons/icon-exclamation-mark.svg'

import cls from "../OpenCase.module.sass"
import clsx from 'clsx'
import ActiveCaseItem from '@/entities/CaseItem/ui/ActiveCaseItem'
import { useCommonStore } from '@/entities/Common/model/store'

interface CongratulationsBodyProps {
    items: any[]
    onClose: () => void
}

const CongratulationsBody = ({ items, onClose }: CongratulationsBodyProps) => {

    // For translation
    const t = useTranslations();

    // Set case count and Current case number
    const setCaseCount = useCommonStore(state => state.setCaseCount)
    const setCurrentCaseNumber = useCommonStore(state => state.setCurrentCaseNumber)

    // Try again function
    const tryAgain = () => {
        setCaseCount(0);
        setCurrentCaseNumber(0);
        onClose();
    }

    return (
        <div className='w-full h-full max-h-[calc(100vh-150px)] overflow-hidden lg:max-h-full  relative overflow-y-auto app-scrollbar flex flex-col items-center gap-5'>
            {
                items.length == 1 &&
                <div className={clsx('w-[490px] 3sm:w-full h-auto py-4 relative')}>
                    <div className={clsx(cls.congratulation_inner, 'w-full h-full flex justify-center items-center')}>
                        <div className='absoulte w-full flex justify-center'>
                            <span className='text-[#5F6C87] text-[14px]'>{t('case_congratulation.top_title')}</span>
                        </div>
                        <Backshape className={cls.backshape} />

                        <div className='max-w-[320px] h-full overflow-hidden flex justify-center items-center'>
                            <Image
                                src={BackdropRays}
                                alt='backdrop'
                                className={clsx(cls.congratulation_backdrop, '!max-w-md')}
                                height={350}
                                width={320}
                            />
                        </div>

                        <div className={clsx(cls.congratulation_inner, cls.center, '!absolute top-1/2')}>
                            <div className={clsx('w-[250px] h-[285px]', cls.congratulation, cls['purple'])}>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(cls.congratulation_pic, 'absolute top-0 left-0 w-full h-full z-[10] flex flex-col gap-[30px] justify-center items-center')}>
                        <Image
                            src={'/images/case/max-skin-1.png'}
                            width={250}
                            height={186}
                            alt={'case'}
                        />
                    </div>
                </div>
            }
            {
                items.length == 1 &&
                <div className='flex flex-col gap-3 w-full justify-center items-center'>
                    <span className='text-[#D1D9EB] text-[26px]'>AUG — Dynamics</span>
                    <span className='flex text-[12px] gap-2.5'>
                        <span className='text-[#FFFFFF80]'>$1.6</span>
                        <span className='text-[#FFFFFF80]'>FT</span>
                        <span className='text-[#FFFFFF80]'>0.3%</span>
                    </span>
                </div>
            }

            {
                items.length > 1 &&
                <div className='max-w-[768px] md:max-w-full min-w-[300px] flex justify-center flex-wrap gap-3 mt-4'>
                    {
                        items.map((item, index) => (
                            <ActiveCaseItem key={index} title={item.title} name={item.name} price={item.price} theme={item.type} picUrl={item.picUrl} />
                        ))
                    }
                </div>
            }

            <div className={clsx('w-full h-0.5 overflow-hidden', items.length == 1 ? "hidden" : "flex")}>
                <div className='w-full border-[2px] border-dotted border-[#282e4b]'>
                </div>
            </div>
            <div className='flex gap-[9px] justify-center'>
                <IconExclamation className="w-[18px] h-[18px] fill-[#5F6C87]" />
                <span className='text-[#5F6C87] text-[14px]'>{t('case_congratulation.bottom_title')}</span>
            </div>
            <div className={clsx('flex gap-2.5', items.length > 1 ? 'flex-row justify-center flex-wrap' : ' flex-col')}>
                <div className={clsx('w-[313px] h-[48px]', cls.btn_hexagon_yellow)}>
                    <div className={clsx('w-full h-full', cls.btn_hexagon_yellow_inner)}>
                        <Button fullWidth={true} hexagon={true} classNames={{
                            base: "w-full h-full"
                        }}
                            onClick={tryAgain}
                            startContent={<IconTryagain className='w-[22px] h-[20px]' />}
                        >
                            <span className='text-[#000000] text-[15px] font-[900]'>{t('case_congratulation.try_again')}</span>
                        </Button>
                    </div>
                </div>
                <div className={clsx('w-[313px] h-[48px]', cls.btn_hexagon_green)}>
                    <div className={clsx('w-full h-full', cls.btn_hexagon_green_inner)}>
                        <Button fullWidth={true} hexagon={true} classNames={{
                            base: "w-full h-full"
                        }}
                            startContent={<IconDollar className='w-[22px] h-[20px]' />}
                        >
                            <span className='text-[#000000] text-[15px] font-[900]'>{t('case_congratulation.sell_everything')}</span>
                        </Button>
                    </div>
                </div>
                <div className={clsx('w-[313px] h-[48px]', cls.btn_hexagon_purple, items.length > 1 ? 'hidden' : 'flex')}>
                    <div className={clsx('w-full h-full', cls.btn_hexagon_purple_inner)}>
                        <Button fullWidth={true} hexagon={true} classNames={{
                            base: "w-full h-full"
                        }}
                        >
                            <span className='text-[#000000] text-[15px] font-[900]'>{t('case_congratulation.go_inventory')}</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CongratulationsBody;