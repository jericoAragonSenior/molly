import cls from './Faq.module.sass'

import clsx from "clsx";
import { FaqBarItemType } from '../model/type';
import { useTranslations } from 'next-intl';

const FaqBarItem = ({ content, icon: Icons }: FaqBarItemType) => {

    const t = useTranslations();

    return (
        <div className={clsx('w-full h-[94px] 2sm:h-[47px]', cls.faq, cls.item)}>
            <div className={clsx('w-full h-full', cls.faq_border, cls.border_12)}>
                <div className={clsx(cls.faq_body, cls.border_12, 'flex w-full justify-center items-center gap-3 h-full')}>
                    <div className={clsx('w-8 h-8', cls.item_icon)}>
                        <Icons className={clsx('w-8 h-8')} />
                    </div>
                    <span className={clsx(cls.faq_text)}>{t(content)}</span>
                </div>
            </div>
        </div>
    )
}

export default FaqBarItem;