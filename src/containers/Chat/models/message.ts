import { ChatUser } from "./chatUser";
export type ContentType = "text" | "video" | "photo" | "document" | "buzz";
export class Message {
  static buildOwnMessage(
    text: string,
    contentType: ContentType,
    sender: ChatUser
  ): Message {
    let message = new Message();
    message.timestamp = Date.now();
    message.contentType = contentType;
    message.sender = sender;
    message.content = text;
    message.reads = [];
    return message;
  }
  static mock(sender: ChatUser): Message {
    let message = new Message();
    message.timestamp = Date.now();
    message.contentType = "text";
    message.sender = sender;
    message.content = "Esto es un mensaje largo de ejemplo";
    message.reads = [];
    return message;
  }
  _id: string;
  timestamp: number;
  contentType: ContentType;
  sender: ChatUser;
  logicDelete: boolean = false;
  content: string;
  reads: ChatUser[];

  constructor() {
    this.setRandomId();
  }

  setRandomId() {
    this._id =
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15);
  }
}
