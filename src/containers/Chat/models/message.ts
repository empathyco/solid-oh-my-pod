import { ChatUser } from "./chatUser";
import { ChatService } from "../services/chatService";
export type ContentType = "text" | "video" | "photo" | "document" | "buzz";
export class Message {
  _id: string;
  timestamp: number;
  contentType: ContentType;
  sender: ChatUser;
  logicDelete: boolean = false;
  content: string;
  reads: ChatUser[];
  temporary = false;

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

  static async buildFromSolidData(
    id: string,
    content: string,
    timestamp: string,
    senderWebId: string,
    contentType: ContentType
  ): Promise<Message> {
    let message = new Message();
    message._id = id;
    message.content = content;
    message.timestamp = parseInt(timestamp);
    message.sender = await ChatService.getChatUser(senderWebId);
    message.contentType = contentType;

    return message;
  }

  toTemporary(): Message {
    this.temporary = true;
    return this;
  }
}
