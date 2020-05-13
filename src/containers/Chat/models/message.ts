import { ChatUser } from "./chatUser";

export class Message {
  _id: string;
  timestamp: number;
  contentType: "text" | "video" | "photo" | "document" | "buzz";
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
