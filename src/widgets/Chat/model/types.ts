export type MessageType = 'default' | 'admin' | 'my'

export interface IChatMessage {
	name: string
	avatarUrl: string
	message: string
	type: MessageType
	timestamp: string
}
