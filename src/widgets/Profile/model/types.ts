import { ISelectItem } from "@/shared/ui/Select/Select"

export interface IProfileItem {
    id: number
    icon: React.FC<React.SVGProps<SVGSVGElement>>
    title: string
    link: string
}

// Profie Page

export type TitleType = "bg" | "level"

export type ImageBgType = 'yellow' | 'pink' | 'purple' | 'blue' | 'limit_blue'

export interface IBestDropData {
    id: number
    icon?: React.FC<React.SVGProps<SVGSVGElement>>
    title: string
    content: string
    titleIcon?: React.FC<React.SVGProps<SVGSVGElement>>
    titleType?: TitleType
}

export interface IInvestoryItemType {
    id: string
    title: string
    content: string
    percent: number
    picUrl: string
    name: string
    price: string
    type: ImageBgType
}

// Game history profile page

export interface IGameType extends ISelectItem {
    value: string
    icon: React.FC<React.SVGProps<SVGSVGElement>>
}
