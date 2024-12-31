import clsx from 'clsx';
import { FC } from 'react';
import ListItem from './ListItem';
import { IListItem } from '@/widgets/ProvablyFair/model/type';
import { useTranslations } from 'next-intl';

interface ListProps {
    classNames?: {
        base?: string
        content?: string
    }
    items: IListItem[]
}


const List: FC<ListProps> = ({ classNames, items }) => {

    const t = useTranslations();

    return (
        <div className={clsx('w-full bg-[#1D2433] p-[2px] rounded-lg', classNames?.base)}>
            <div className={clsx('w-full bg-[#181E2B] gap-3 flex flex-col rounded-lg py-5', classNames?.content)}>
                {
                    items.map((item) => (
                        <ListItem content={t(item.title)} startIcon={item?.startIcon} endIcon={item?.endIcon} key={item.id} />
                    ))
                }
            </div>

        </div>
    )
}

export default List; 