import HeaderBg from '@/shared/assets/section-header-bg-top.svg'

import cls from './OpenCase.module.sass'

interface CaseBarProps {
    title: string
}

const CaseBar = ({title}: CaseBarProps) => {

    return (
        <div className='relative w-full overflow-hidden min-h-[80px]'>
            <div className={cls.title}>{title}</div>
            <HeaderBg className={cls.border_top} />
        </div>
    )
}

export default CaseBar;