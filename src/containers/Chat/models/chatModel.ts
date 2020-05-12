import { ChatUser } from "./chatUser";
import { Message } from "./message";

export abstract class Chat {

  _id: String;
  chatMode: {
    type: "group" | "private",
    chatName: String | undefined
  }
  participants: ChatUser[];
  creator: ChatUser;
  admins: ChatUser[];
  messages: Message[];
  image: String | undefined
  createdTimestamp: Number;

  constructor() {

    this.setRandomId();

  }

  private setRandomId() {
    this._id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }


}
