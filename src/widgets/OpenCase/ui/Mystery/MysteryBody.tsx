import clsx from 'clsx'
import cls from '../OpenCase.module.sass' 
import Image from 'next/image';
import Button from '@/shared/ui/Button/Button';
import IconCase from '@/shared/assets/icons/icon-case-open.svg'
import { useTranslations } from 'next-intl';
import BackDropButton from '@/shared/ui/BackDropButton/BackDropButton';
import { BackDropTheme } from '@/shared/const/rarity';
import IconLuck from '@/shared/assets/icons/icon-luck.svg';
import IconPrizes from '@/shared/assets/icons/icon-prize.svg';
import IconRefesh from '@/shared/assets/icons/icon-refresh.svg'
import IconHint from '@/shared/assets/icons/icon-hint.svg'
import CaseLiveFeed from '../CaseLiveFeed';

const MysteryBody = () => {

    // For translation
    const t = useTranslations()

    return (
        <div className='w-full flex flex-col'>
            <div className={clsx('flex flex-col gap-4  w-full items-center', cls.mystery_bg)}>
                <div className={cls.mystery_bg_over1}>
                    <div className={cls.mystery_bg_over2}>
                        <div className={cls.mystery_bg_over3}>
                            <div className={clsx(cls.mystery_bg_over4, 'flex justify-center')}>
                                <div className={clsx('w-full sm:w-[310px] flex justify-center gap-5 md:flex-col md:items-center md:w-[500px] 2sm:w-[400px] md:gap-3')}>
                                    <div className='w-[259px] flex justify-end md:w-auto md:justify-center'>
                                        <div className='flex flex-col gap-3 md:flex-row 2sm:gap-0 2sm:flex-wrap'>
                                            <BackDropButton classNames={{ body: '!w-[177px] !h-[140px] sm:!w-1/2 md:!w-1/3', inner: '!gap-2' }} theme={BackDropTheme.GREEN} icon={IconLuck} content={t('case_mystery.luck_text')} />
                                            <BackDropButton classNames={{ body: '!w-[177px] !h-[140px] sm:!w-1/2 md:!w-1/3', inner: '!gap-2' }} theme={BackDropTheme.PURPLE} icon={IconPrizes} content={t('case_mystery.luck_text')} />
                                            <BackDropButton classNames={{ body: '!w-[177px] !h-[140px] sm:!w-full sm:!mt-1 md:!w-1/3', inner: '!gap-2' }} theme={BackDropTheme.YELLOW} icon={IconRefesh} content={t('case_mystery.luck_text')} />
                                        </div>
                                    </div>
                                    
                                    <div className={clsx(cls.mystery_group, 'flex flex-col gap-[15px] justify-center items-center w-[376px] md:w-full')}>
                                        <div className={clsx(cls.mystery_group_inner, 'flex justify-center flex-col items-center gap-[15px] pb-5')}>
                                            <Image
                                                src={'/images/case/case-full-3.png'}
                                                alt='case'
                                                width={198}
                                                height={182}
                                            />
                                            <div className='w-full flex flex-col gap-4 justify-center items-center 3md:w-auto'>
                                                <span className='text-[#5F6C87] text-[13px] font-[500]'>{t('open_case.click_open')}</span>
                                                <div className={clsx('w-[243px] h-[48px]', cls.btn_hexagon_yellow)}>
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

                                    </div>
                                    
                                    <div>
                                        <div className={clsx(cls.mystery_content_bg, 'w-[259px] p-4 flex gap-4 relative flex-col justify-center items-center md:w-full md:flex-row md:justify-start md:items-start')}>
                                            <IconHint className='w-[34px] h-[34px] fill-[#404B67] md:absolute' />
                                            <div className='flex flex-col gap-5 text-[#7683A4] text-[12px] font-[500] text-center md:ml-14 md:text-start md:gap-0'>
                                                <span>{t('case_mystery.content1')}</span>
                                                <span>{t('case_mystery.content2')}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <CaseLiveFeed />
        </div>
        
       
    )
}

export default MysteryBody;