import IconLogo from '@/shared/assets/icons/icon-congratulation-logo.svg'

import cls from "../OpenCase.module.sass"
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

const CongratulationsHeader = () => {

    // For translation
    const t = useTranslations();

    return (
        <div className={clsx('absolute top-0 w-auto h-auto z-10', cls.congratulation_logo)}>
            <IconLogo className="3sm:hidden flex" />
            <div className={clsx('absolute left-1/2 top-1/2 3sm:!top-[50px]', cls.center)}>
                <span className='text-[#141925] text-[24px] 3sm:text-[#62f062] text-[700]'>{t('case_congratulation.title')}</span>
            </div>
        </div>
    )
}

export default CongratulationsHeader;