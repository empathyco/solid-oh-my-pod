import { ChatUser } from "./chatUser";

export class Message {


    _id: String;
    timestamp: Number;
    contentType: "text" | "video" | "photo" | "document" | "buzz"
    sender: ChatUser;
    logicDelete: Boolean = false;
    content: String;
    reads: ChatUser[]

    constructor() {
        this.setRandomId()
    }

    setRandomId() {
        this._id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }



}