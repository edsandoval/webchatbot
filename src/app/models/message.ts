import { ButtonMessage } from "./button.message";

export class Message {
  content: string;
  timestamp: Date;
  avatar: string;
  buttons: Array<ButtonMessage>;

  constructor(content: string, avatar: string, timestamp?: Date) {
    this.content = content;
    this.timestamp = timestamp;
    this.avatar = avatar;
  }
}
