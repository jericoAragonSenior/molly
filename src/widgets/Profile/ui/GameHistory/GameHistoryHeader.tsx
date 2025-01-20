import clsx from "clsx";
import { useTranslations } from "next-intl";

import cls from "./GameHistory.module.sass"

import IconHistoryGame from '@/shared/assets/icons/icon-game-history-profile-logo.svg'
import GameHistoryTypeSwitcher from "./GameHistoryTypeSwitcher";


const GameHistoryHeader = () => {

    // For translation
    const t = useTranslations()

    return (
        <div className="bg-[#111620] border-[1px] border-[#232B3E] p-[14px] rounded-xl flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <IconHistoryGame className={clsx('w-7 h-7')} />
                <span>{t('game_history_profile.history_games')}</span>
            </div>
            <div className="">
                <GameHistoryTypeSwitcher />
            </div>
        </div>
    )
}

export default GameHistoryHeader;