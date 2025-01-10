
import { RarityTheme } from '@/shared/const/rarity'

import { LiveFeedItem, ICaseItemType, IPagination, IFarmItemType, IBadgeItem } from './types'

export const paginationData: IPagination[] = [
    {
        value: 1,
        content: "X1"
    },
    {
        value: 2,
        content: "X2"
    },
    {
        value: 3,
        content: "X3"
    },
    {
        value: 4,
        content: "X4"
    },
    {
        value: 5,
        content: "X5"
    },
    {
        value: 10,
        content: "X10"
    }
]

export const itemsList: LiveFeedItem[] = [
    {
        id: '1',
        title: 'Leaded Glass',
        rarity: RarityTheme.RARE,
        picUrl: '/images/livefeed/skin-1.png'
    },
    {
        id: '2',
        title: 'Leaded Glass',
        rarity: RarityTheme.MYTHICAL,
        picUrl: '/images/livefeed/skin-2.png'
    },
    {
        id: '3',
        title: 'Leaded Glass',
        rarity: RarityTheme.COMMON,
        picUrl: '/images/livefeed/skin-3.png'
    },
    {
        id: '4',
        title: 'Leaded Glass',
        rarity: RarityTheme.UNCOMMON,
        picUrl: '/images/livefeed/skin-4.png'
    },
    {
        id: '5',
        title: 'Leaded Glass',
        rarity: RarityTheme.LEGENDARY,
        picUrl: '/images/livefeed/skin-5.png'
    },
    {
        id: '6',
        title: 'Leaded Glass',
        rarity: RarityTheme.EXCEEDINGLY,
        picUrl: '/images/livefeed/skin-6.png'
    },
    {
        id: '7',
        title: 'Leaded Glass',
        rarity: RarityTheme.ANCIENT,
        picUrl: '/images/livefeed/skin-7.png'
    },
    {
        id: '8',
        title: 'Leaded Glass',
        rarity: RarityTheme.RARE,
        picUrl: '/images/livefeed/skin-7.png'
    },
    {
        id: '9',
        title: 'Leaded Glass',
        rarity: RarityTheme.RARE,
        picUrl: '/images/livefeed/skin-1.png'
    },
    {
        id: '10',
        title: 'Leaded Glass',
        rarity: RarityTheme.MYTHICAL,
        picUrl: '/images/livefeed/skin-2.png'
    },
    {
        id: '11',
        title: 'Leaded Glass',
        rarity: RarityTheme.COMMON,
        picUrl: '/images/livefeed/skin-3.png'
    },
    {
        id: '12',
        title: 'Leaded Glass',
        rarity: RarityTheme.UNCOMMON,
        picUrl: '/images/livefeed/skin-4.png'
    },
    {
        id: '13',
        title: 'Leaded Glass',
        rarity: RarityTheme.LEGENDARY,
        picUrl: '/images/livefeed/skin-5.png'
    },
    {
        id: '14',
        title: 'Leaded Glass',
        rarity: RarityTheme.EXCEEDINGLY,
        picUrl: '/images/livefeed/skin-6.png'
    },
    {
        id: '15',
        title: 'Leaded Glass',
        rarity: RarityTheme.RARE,
        picUrl: '/images/livefeed/skin-7.png'
    },
    {
        id: '16',
        title: 'Leaded Glass',
        rarity: RarityTheme.UNCOMMON,
        picUrl: '/images/livefeed/skin-4.png'
    },
    {
        id: '17',
        title: 'Leaded Glass',
        rarity: RarityTheme.LEGENDARY,
        picUrl: '/images/livefeed/skin-5.png'
    },
    {
        id: '18',
        title: 'Leaded Glass',
        rarity: RarityTheme.EXCEEDINGLY,
        picUrl: '/images/livefeed/skin-6.png'
    },
    {
        id: '19',
        title: 'Leaded Glass',
        rarity: RarityTheme.RARE,
        picUrl: '/images/livefeed/skin-7.png'
    },
    {
        id: '20',
        title: 'Leaded Glass',
        rarity: RarityTheme.RARE,
        picUrl: '/images/livefeed/skin-7.png'
    },
    {
        id: '21',
        title: 'Leaded Glass',
        rarity: RarityTheme.UNCOMMON,
        picUrl: '/images/livefeed/skin-4.png'
    },
    {
        id: '22',
        title: 'Leaded Glass',
        rarity: RarityTheme.LEGENDARY,
        picUrl: '/images/livefeed/skin-5.png'
    },
    {
        id: '23',
        title: 'Leaded Glass',
        rarity: RarityTheme.EXCEEDINGLY,
        picUrl: '/images/livefeed/skin-6.png'
    },
    {
        id: '24',
        title: 'Leaded Glass',
        rarity: RarityTheme.RARE,
        picUrl: '/images/livefeed/skin-7.png'
    }
]

export const caseItems: ICaseItemType[] = [
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


// Farm progress
export const farmItems: IFarmItemType[] = [
    {
        id: 'case-1',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-1.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'yellow',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-2',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-2.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'pink',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-3',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-3.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'purple',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-4',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-4.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'blue',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-5',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-5.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'limit_blue',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-6',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-1.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'yellow',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-7',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-2.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'pink',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-8',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-3.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'purple',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-9',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-4.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'blue',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-10',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-5.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'limit_blue',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-11',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-1.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'yellow',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-12',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-2.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'pink',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-13',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-3.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'purple',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-14',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-4.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'blue',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-15',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-5.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'limit_blue',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-16',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-1.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'yellow',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-17',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-2.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'pink',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-18',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-3.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'purple',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-19',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-4.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'blue',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-20',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-5.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'limit_blue',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    }
]

export const farmPaginationData: IPagination[] = [
    {
        value: 10,
        content: "X10"
    },
    {
        value: 20,
        content: "X20"
    },
    {
        value: 30,
        content: "X30"
    },
    {
        value: 40,
        content: "X40"
    }
]


import IconCase from '@/shared/assets/icons/icon-case-open.svg'
import IconDollar from '@/shared/assets/icons/icon-dollar.svg'
import IconSolide from '@/shared/assets/icons/icon-solid.svg'
// Open farm badge items.
export const badgeItems: IBadgeItem[] = [
    {
        icon: IconCase,
        title: "3/10",
        content: "opening",
        iconClassName: "w-[22px] h-[20px]"
    },
    {
        icon: IconDollar,
        title: "$500.00",
        content: "price",
        iconClassName: "w-[22px] h-[22px]"
    },
    {
        icon: IconSolide,
        title: "$243.34",
        content: "shirpa solid",
        iconClassName: "w-[22px] h-[22px]"
    }
]

// farm case item(open farm)
export const farmCases: IFarmItemType[] = [
    {
        id: 'case-1',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-1.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'yellow',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-2',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-2.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'pink',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-3',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-3.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'purple',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-4',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-4.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'blue',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-5',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-5.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'limit_blue',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-6',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-1.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'yellow',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-7',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-2.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'pink',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-8',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-3.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'purple',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-9',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-4.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'blue',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-10',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-5.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'limit_blue',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-11',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-1.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'yellow',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-12',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-2.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'pink',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-13',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-3.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'purple',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-14',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-4.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'blue',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-15',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-5.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'limit_blue',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    },
    {
        id: 'case-16',
        title: 'FT',
        content: 'CHANCE',
        percent: 0.064,
        picUrl: '/images/case/skin-1.png',
        name: 'AK-47 | Fire Serpent',
        price: '456,05',
        type: 'yellow',
        pricesTitle: [
            "fn", "mw", "ft", "ww"
        ],
        prices: [
            "1928.84", "2304.02", "1399.98", "1029.90"
        ],
        oods: [
            "0.247", "0.50896", "0.396", "0.667"
        ]
    }
]