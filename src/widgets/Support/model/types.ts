export type MessageType = 'default' | 'admin' | 'my'
export type ResponseType = 'response' | 'consideration' | 'closed'


export interface IChatMessage {
    name: string
    avatarUrl: string
    message: string
    type: MessageType
    timestamp: string
}

export interface ISupportItem {
    id: number
    messagesList: IChatMessage[]
    ticketNumber: string
    subjectOfAppeal: string
    lastUpdate: string
    response: string
    responseType: ResponseType
    responseNumber?: string
}

export interface IProblemItem {
    id: number
    type: string
}