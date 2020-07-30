export type Message = {
	uid: string;
	name: string;
	message: string;
	timestamp: number;
	isMe: boolean;
};

export interface MessageInterface {
	uid: string;
	name: string;
	message: string;
	timestamp: number;
	isMe: boolean;
}
