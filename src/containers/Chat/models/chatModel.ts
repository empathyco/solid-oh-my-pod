import { ChatUser } from "./chatUser";
import { Message } from "./message";
import { ChatService } from "../services/chatService";

const defaultProfilePhoto = "/img/icon/empty-profile.svg";
const defaultGroupPhoto = "/img/icon/empty-profile.svg";
export class Chat {
  assignMessages(messages: Message[]) {
    messages = messages.sort((m1, m2) => {
      if (m1.timestamp < m2.timestamp) return -1;
      if (m1.timestamp > m2.timestamp) return 1;
      else return 0;
    });
    this.messages = messages;
  }
  _id: string;
  chatMode: {
    type: "group" | "private";
    chatName: string;
  };
  participants: ChatUser[] = [];
  creator: ChatUser;
  admins: ChatUser[] = [];
  messages: Message[] = [];
  image: string | undefined;
  createdTimestamp: number;

  /**
   * Creates a new instance of chat
   * @param id Sets the id of the chat if it already exist, if not a new random id will be generated
   * @param createdTimestamp Sets the created timestamp if it already exist, else takes the current time
   */
  constructor(id?: string, createdTimestamp?: number) {
    if (id) this._id = id;
    else this.setRandomId();

    if (createdTimestamp) this.createdTimestamp = createdTimestamp;
    else this.setCurrentTimestamp();
  }

  private setCurrentTimestamp() {
    this.createdTimestamp = Date.now();
  }
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
  getChatName(): string {
    if (this.chatMode.type === "private") {
      return this.participants[1].name; //Cero is me
    } else {
      return this.chatMode.chatName;
    }
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
      webId: "https://javifake3.solid.community/profile/card#me",
      name: "Javier García El de verda",
      photo: "https://javifake3.solid.community/profile/descarga%20(3).jpg",
    };
    let chat = new Chat();
    chat.chatMode = {
      type: "private",
      chatName: "",
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

  static buildNewChatFromUsersAndName(
    creator: ChatUser,
    users: ChatUser[],
    chatName?: string
  ) {
    let chat = new Chat();
    chat.creator = creator;
    if (users.length == 1) {
      chat.chatMode = { type: "private", chatName: "" };
    } else {
      chat.chatMode = {
        type: "group",
        chatName: chatName ? chatName : "",
      };
    }
    users.unshift(chat.creator);
    chat.participants = users;
    chat.messages = [];
    return chat;
  }

  public getMetadataForPod() {
    let metadata = {
      id: this._id,
      chatMode: {
        type: this.chatMode.type,
        chatName: this.chatMode.chatName,
      },
      participants: this.participants.map((parti) => parti.webId),
      creator: this.creator.webId,
      admins: this.admins.map((part) => part.webId),

      image: this.image,
      createdTimestamp: this.createdTimestamp,
    };
    return JSON.stringify(metadata);
  }

  static async parseFromMetadata(response: any) {
    let data = JSON.parse(response);
    let chat = new Chat();
    chat._id = data.id;
    chat.chatMode = data.chatMode;
    chat.participants = await Promise.all(
      data.participants.map(
        async (webId) => await ChatService.getChatUser(webId)
      )
    );
    chat.creator = await ChatService.getChatUser(data.creator);
    chat.admins = await Promise.all(
      data.admins.map(async (webId) => await ChatService.getChatUser(webId))
    );
    chat.image = data.image;
    chat.createdTimestamp = data.createdTimestamp;

    return chat;
  }

  updateMessages(messages: Message[]): Chat {
    //get all new ids
    let allId = messages.map((m) => m._id);

    //filter termporal messages that have not been received
    let temporalMessages = this.messages.filter(
      (message) => message.temporary && !allId.some((id) => id === message._id)
    );

    //Assign the new messages
    let updatedMessages = [...messages, ...temporalMessages];
    this.assignMessages(updatedMessages);

    return this;
  }
}
