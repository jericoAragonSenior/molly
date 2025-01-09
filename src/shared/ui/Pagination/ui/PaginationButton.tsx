import clsx from "clsx";
import cls from "./Pagination.module.sass";

interface PaginationButtonProps {
    content: string
    isActive: boolean
    onClick?: () => void
}

const PaginationButton = ({content, isActive, onClick}: PaginationButtonProps) => {
    return (    
        <div className={clsx(isActive == true ? cls.button_active : cls.button_body)} onClick={onClick}>
            <div className={clsx(isActive == true ? cls.button_active_inner : cls.button_body_inner)}>
                <span className={clsx('text-14px font-[700]', isActive == true ? "text-[#121722]" : "text-white")}>{content}</span>
            </div>
        </div>
    )
}

export default PaginationButton;