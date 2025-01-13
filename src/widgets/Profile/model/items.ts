import { IProfileItem } from "./types";

import IconUser from '@/shared/assets/icons/icon-user-avatar.svg'
import IconGames from '@/shared/assets/icons/icon-game-history.svg'
import IconTransaction from '@/shared/assets/icons/icon-transaction-history.svg'
import IconArchievement from '@/shared/assets/icons/icon-archievements.svg'
import IconVerification from '@/shared/assets/icons/icon-verification.svg'
import IconSetting from '@/shared/assets/icons/icon-setting.svg'


export const profileList: IProfileItem[] = [
    {
        id: 1,
        icon: IconUser,
        title: 'profile_main.profile'
    },
    {
        id: 2,
        icon: IconGames,
        title: 'profile_main.history_games'
    },
    {
        id: 3,
        icon: IconTransaction,
        title: 'profile_main.transaction_history'
    },
    {
        id: 4,
        icon: IconArchievement,
        title: 'profile_main.achievements'
    },
    {
        id: 5,
        icon: IconVerification,
        title: 'profile_main.verification'
    },
    {
        id: 6,
        icon: IconSetting,
        title: 'profile_main.settings'
    }
]