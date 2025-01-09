export type ImageBgType = 'yellow' | 'pink' | 'purple' | 'blue' | 'limit_blue'


// Case type interface (To create case)
export interface ICaseItemType {
    id: string
    title: string
    content: string
    percent: number
    picUrl: string
    name: string
    price: string
    type: ImageBgType
}