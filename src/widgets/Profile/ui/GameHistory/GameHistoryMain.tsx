import clsx from "clsx";
import cls from "./GameHistory.module.sass"

import GameHistoryHeader from "./GameHistoryHeader";
import GameHistoryList from "./GameHistoryList";

const GameHistoryMain = () => {
    return (
        <div className={cls.user_main}>
            <div className={clsx(cls.user_main_inner, 'p-5 gap-[15px]')}>
                <GameHistoryHeader />
                <GameHistoryList />
            </div>
        </div>
    )
}

export default GameHistoryMain;