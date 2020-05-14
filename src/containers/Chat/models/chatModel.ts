import { ChatUser } from "./chatUser";
import { Message } from "./message";

const defaultProfilePhoto = "/img/icon/empty-profile.svg";
const defaultGroupPhoto = "/img/icon/empty-profile.svg";
export class Chat {
  getImage(): string {
    //TODO Refactor this, should be inherit class o something
    if (this.chatMode.type === "private") {
      let photo = this.participants[1].photo;
      return photo ? photo : defaultProfilePhoto;
    }
    if (this.chatMode.type === "group") {
      let photo = this.image;
      return photo ? photo : defaultGroupPhoto;
    }
    return defaultProfilePhoto;
  }
  getChatName() {
    if (this.chatMode.type === "private") {
      return this.participants[1].name; //Cero is me
    } else {
      return this.chatMode.chatName;
    }
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

  static mock() {
    let me = {
      webdId: "https://javifake3.solid.community/profile/card#me",
      name: "Javier García El de verda",
      photo: "https://javifake3.solid.community/profile/descarga%20(3).jpg",
    };
    let chat = new Chat();
    chat.chatMode = {
      type: "private",
      chatName: undefined,
    };
    chat.participants = [me, ChatUser.mock()];
    chat.messages = [];
    chat.createdTimestamp = Date.now();
    for (let i = 0; i < 15; i++) {
      for (let user = 0; user < chat.participants.length; user++) {
        let message = Message.mock(chat.participants[user]);
        chat.messages.push(message);
      }
    }

    return chat;
  }
}
