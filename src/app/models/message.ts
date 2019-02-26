import { ButtonMessage } from "./button.message";

export class Message {
  content: string;
  timestamp: Date;
  avatar: string;
  type: MessageType;
  buttons: Array<ButtonMessage>;

  constructor(content: string, avatar: string, timestamp?: Date, type?: MessageType) {
    this.content = content;
    this.timestamp = timestamp;
    this.avatar = avatar;
    this.type = type;
  }
}

export enum MessageType {
  USER_SAY = 'USER_SAY',
  BOT_SAY = 'BOT_SAY'
}
