export type MessageType = 'default' | 'admin' | 'my' | 'toadmin'

export interface IChatMessage {
	name: string
	avatarUrl: string
	message: string
	type: MessageType
	timestamp: string
}
