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
    axis?: string
}


const List: FC<ListProps> = ({ classNames, items, axis = "y" }) => {

    const t = useTranslations();

    return (
        <div className={clsx('w-auto bg-[#1D2433] p-[2px] rounded-lg', classNames?.base, axis == "x" && "!rounded-none overflow-y-auto justify-between")}>
            <div className={clsx('w-auto bg-[#181E2B] gap-3 flex rounded-lg flex-col py-5', classNames?.content, axis == "x" && "!flex-row !py-2 !overflow-y-auto !px-3 !rounded-none")}>
                {
                    items.map((item) => (
                        <ListItem content={t(item.title)} startIcon={item?.startIcon} endIcon={item?.endIcon} key={item.id} axis={axis} />
                    ))
                }
            </div>

        </div>
    )
}

export default List; 