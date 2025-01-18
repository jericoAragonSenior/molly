import { useTranslations } from "next-intl";
import { investoryItems } from "../../model/items";
import ProfileInventory from "../ProfileInventory";

const UserInvestory = () => {

    // For translation
    const t = useTranslations()

    return (
        <div className="w-full justify-center flex flex-col">
            <span className="text-[#D1D9EB] text-[18px] my-1 text-center">{t('user_profile.investory')}</span>
            <div className="w-full flex flex-wrap justify-center gap-0.5">
                <ProfileInventory items={investoryItems} />
            </div>
        </div>
    )
}

export default UserInvestory;