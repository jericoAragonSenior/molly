import { IProfileItem, IBestDropData, IInvestoryItemType } from "./types";

import IconUser from '@/shared/assets/icons/icon-user-avatar.svg'
import IconGames from '@/shared/assets/icons/icon-game-history.svg'
import IconTransaction from '@/shared/assets/icons/icon-transaction-history.svg'
import IconArchievement from '@/shared/assets/icons/icon-archievements.svg'
import IconVerification from '@/shared/assets/icons/icon-verification.svg'
import IconSetting from '@/shared/assets/icons/icon-setting.svg'
import IconPromoCode from '@/shared/assets/icons/icon-promocode.svg'

import IconCase from '@/shared/assets/icons/icon-case-battle.svg'
import IconUpgrade from '@/shared/assets/icons/icon-upgrade.svg'
import IconLotto from '@/shared/assets/icons/icon-lotto.svg'
import IconBucket from '@/shared/assets/icons/icon-bucket.svg'


export const profileList: IProfileItem[] = [
    {
        id: 1,
        icon: IconUser,
        title: 'profile_main.profile',
        link: "/profile/user"
    },
    {
        id: 2,
        icon: IconGames,
        title: 'profile_main.history_games',
        link: "/profile/history-game"
    },
    {
        id: 3,
        icon: IconTransaction,
        title: 'profile_main.transaction_history',
        link: "/profile/history-transaction"
    },
    {
        id: 4,
        icon: IconArchievement,
        title: 'profile_main.achievements',
        link: "/profile/achievements"
    },
    {
        id: 5,
        icon: IconVerification,
        title: 'profile_main.verification',
        link: "/profile/verification"
    },
    {
        id: 6,
        icon: IconSetting,
        title: 'profile_main.settings',
        link: "/profile/settings"
    }
]

export const mobileProfileList: IProfileItem[] = [
    {
        id: 1,
        icon: IconUser,
        title: 'profile_main.profile',
        link: "/profile/user"
    },
    {
        id: 2,
        icon: IconGames,
        title: 'profile_main.history_games',
        link: "/profile/history-game"
    },
    {
        id: 3,
        icon: IconTransaction,
        title: 'profile_main.transaction_history',
        link: "/profile/history-transaction"
    },
    {
        id: 4,
        icon: IconArchievement,
        title: 'profile_main.attain',
        link: "/profile/achievements"
    },
    {
        id: 5,
        icon: IconPromoCode,
        title: 'profile_main.promocode',
        link: "/profile/verification"
    },
]

// Best drop
export const bestDrop = {
    type: "pink",
    imgUrl: "/images/case/skin-2.png",
    price: "242,02",
    title: "ft",
    name: "AK-47 | Fire Serpent"
}

// Profile page
export const bestDropData: IBestDropData[] = [
    {
        id: 1,
        icon: IconCase,
        title: "48 592",
        content: "profile_page.case_opened"
    },
    {
        id: 2,
        titleType: "level",
        content: "profile_page.refferal_level",
        title: "6"
    },
    {
        id: 3,
        titleType: "bg",
        title: "48 954",
        content: "profile_page.refferal_number"
    },
    {
        id: 4,
        icon: IconUpgrade,
        title: "$2 934.33",
        content: "profile_page.upgrades"
    },
    {
        id: 5,
        titleType: "bg",
        title: "$58 324",
        content: "profile_page.all_earned"
    },
    {
        id: 6,
        titleType: "bg",
        title: "$92 328",
        content: "profile_page.earned_from_cases"
    },
    {
        id: 7,
        icon: IconLotto,
        title: "$934.33",
        content: "profile_page.lotto"
    },
    {
        id: 8,
        titleType: "bg",
        titleIcon: IconBucket,
        title: "8ijd12h",
        content: "profile_page.promocode"
    },
    {
        id: 9,
        titleType: "bg",
        title: "650982",
        content: "profile_page.cases_created"
    }
]

export const investoryItems: IInvestoryItemType[] = [
    {
        id: 'case-1',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-1.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'yellow'
    },
    {
        id: 'case-2',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-2.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'pink'
    },
    {
        id: 'case-3',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-3.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'purple'
    },
    {
        id: 'case-4',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-4.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'blue'
    },
    {
        id: 'case-5',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-5.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'limit_blue'
    },
    {
        id: 'case-6',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-1.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'yellow'
    },
    {
        id: 'case-7',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-2.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'pink'
    },
    {
        id: 'case-8',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-3.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'purple'
    },
    {
        id: 'case-9',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-4.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'blue'
    },
    {
        id: 'case-10',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-5.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'limit_blue'
    },
    {
        id: 'case-11',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-1.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'yellow'
    },
    {
        id: 'case-12',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-2.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'pink'
    },
    {
        id: 'case-13',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-3.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'purple'
    },
    {
        id: 'case-14',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-4.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'blue'
    },
    {
        id: 'case-15',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-5.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'limit_blue'
    },
    {
        id: 'case-16',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-1.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'yellow'
    },
    {
        id: 'case-17',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-2.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'pink'
    },
    {
        id: 'case-18',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-3.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'purple'
    },
    {
        id: 'case-19',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-4.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'blue'
    },
    {
        id: 'case-20',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-5.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'limit_blue'
    }
]

