"use client"
import clsx from 'clsx'
import cls from '../OpenCase.module.sass'

import HeaderBg from '@/shared/assets/section-header-bg-top.svg'
import IconCase from '@/shared/assets/icons/icon-case-open.svg'
import IconInstance from '@/shared/assets/icons/icon-instance.svg'

import Pagination from '@/shared/ui/Pagination/ui/Pagination'
import { farmPaginationData } from '../../model/items'
import { useTranslations } from 'next-intl'
import Button from '@/shared/ui/Button/Button'
import { useCommonStore } from '@/entities/Common/model/store'


const FarmToolBar = () => {
    // For translation
    const t = useTranslations();

    const openFarm = useCommonStore(state => state.openFarm)


    return (
        openFarm == true &&
        <div>
            <div className='relative w-full overflow-hidden h-auto py-3'>
                <div className='w-full absolute bottom-0 h-[74px] -z-10 md:hidden flex'>
                    <HeaderBg className={clsx(cls.border_top, 'top-[40px]')} />
                </div>
                <div className='flex justify-between h-auto min-h-[161px] items-center 3md:flex-wrap 3md:justify-center gap-5'>
                    <div className='w-1/3 flex flex-col gap-4 justify-center items-center 3md:w-auto'>
                        <span className='text-[#5F6C87] text-[13px] font-[500] 2sm:hidden flex'>{t('open_case.count_title')}</span>
                        <Pagination items={farmPaginationData}  />
                    </div>
                    <div className={clsx('w-1/3 flex flex-col gap-4 justify-center items-center 3md:w-auto')}>
                        <span className='text-[#5F6C87] text-[13px] font-[500] 2sm:hidden flex'>{t('open_case.click_open')}</span>
                        <div className={clsx('min-w-[313px] h-[52px] flex justify-center items-center relative', cls.btn_hexagon_yellow_shadow)}>
                            <div className={clsx('min-w-[313px] h-[48px]', cls.btn_hexagon_yellow)}>
                                <div className={clsx('w-full h-full', cls.btn_hexagon_yellow_inner)}>
                                    <Button fullWidth={true} hexagon={true} classNames={{
                                        base: "w-full h-full"
                                    }}
                                        startContent={<IconCase className='w-[22px] h-[20px]' />}
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
            </div>
        </div>
    )
}

export default FarmToolBar;