import { ChatUser } from "./chatUser";
import { Message } from "./message";

export class Chat {
  getChatName() {
    return "Javier García Bermúdez";
  }
  _id: string;
  chatMode: {
    type: "group" | "private";
    chatName: string | undefined;
  };
  participants: ChatUser[];
  creator: ChatUser;
  admins: ChatUser[];
  messages: Message[];
  image: string | undefined;
  createdTimestamp: number;

  constructor() {
    this.setRandomId();
  }

  private setRandomId() {
    this._id =
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15);
  }
}
