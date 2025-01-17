"use client"

import clsx from 'clsx';
import { useTranslations } from 'next-intl';

import IconTrader from '@/shared/assets/icons/icon-trader.svg'
import { Input } from '@/shared/ui/Input/Input';
import IconSteam from '@/shared/assets/icons/icon-steam-logo.svg'

import cls from './Main.module.sass'

const MainTrader = () => {

    // For translation
    const t = useTranslations();

    return (
        <div className="bg-[#111620] rounded-xl p-[15px] w-full mt-[35px] lg:mt-[15px]">
            <div className='flex w-full justify-between items-center'>
                <div className='flex gap-2 items-center 2sm:w-full'>
                    <IconTrader className="w-7 h-7 fill-green-700" />
                    <div className='flex flex-col w-full'>
                        <span className='flex 2sm:justify-between 2sm:w-full'>
                            <span className='text-white text-[16px] md:text-[12px] font-[500]'>{t('profile_page.trade_url')}</span>
                            <span className='text-[#F4AD5C] border-b-[1px] hidden 2sm:flex text-[8px] font-[700] border-[#F4AD5C] mb-1 hover:cursor-pointer'>{t('profile_page.trade_link')}</span>
                        </span>
                        <span className='text-[#5A6786]  text-[12px] md:text-[10px]'>{t('profile_page.trade_url_content')}</span>
                    </div>
                </div>
                <span className='text-[#F4AD5C] text-[10px] border-b-[1px] md:text-[8px] font-[700] border-[#F4AD5C] hover:cursor-pointer 2sm:hidden'>{t('profile_page.trade_link')}</span>
            </div>
            <Input
                value=''
                theme='theme-1'
                onChange={() => { }}
                placeholder={t('profile_page.trade_url_placeholder')}
                startContent={<IconSteam className={clsx(cls.box_icon, cls.input_icon, 'w-6 h-6')} />}
                classNames={{
                    inputWrapper: [cls.box, '!px-3 !py-4'],
                    input: [cls.box_value, 'w-full text-[14px]'],
                    label: ['text-[10px]'],
                    mainWrapper: "w-full"
                }}
            />
        </div>
    )
}

export default MainTrader;