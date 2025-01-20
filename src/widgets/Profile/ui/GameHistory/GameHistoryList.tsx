import { useTranslations } from "next-intl";

const GameHistoryList = () => {

    // For translation
    const t = useTranslations()

    return (
        <div className="flex flex-col gap-2">
            <div className="flex w-full bg-[#1F2536] rounded-lg py-[9px] text-[#5A6786] text-[10px] font-primary-bold px-[15px]">
                <span className="w-1/4 flex justify-start items-center uppercase">{t('game_history_profile.case_name')}</span>
                <span className="w-1/4 flex justify-start items-center uppercase">{t('game_history_profile.price')}</span>
                <span className="w-1/4 flex justify-start items-center uppercase">{t('game_history_profile.date_of_opening')}</span>
                <span className="w-1/4 flex justify-end items-center uppercase">{t('game_history_profile.prizes')}</span>
            </div>
        </div>
    )
}

export default GameHistoryList;