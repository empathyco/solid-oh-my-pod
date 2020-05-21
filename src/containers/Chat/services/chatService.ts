import data from "@solid/query-ldflex";
import auth from "solid-auth-client";
import { ChatUser } from "../models/chatUser";
import { fileExplorerService } from "services";
import { Chat } from "../models/chatModel";
import * as rdf from "rdflib";
const FLOW = rdf.Namespace("http://www.w3.org/2005/01/wf/flow#"); // flow

export class ChatService {
  BASE_ADDRESS = "/public/test/ohmypod_chat";
  BASE_CHAT_NAME = "chat_";
  INDEX_NAME = "chat_index.ttl";
  INDEX_TTL_ADDRESS = this.BASE_ADDRESS + "/" + this.INDEX_NAME;
  CHAT_METADATA_NAME = "metadata.json";
  updateManager: any;
  fetcher: any;
  store: any;
  TIMEOUT = 5000;

  constructor() {
    this.initOhMyPodChat();
    this.updateManager = rdf.UpdateManager;
    this.store = rdf.graph();

    this.fetcher = new rdf.Fetcher(this.store, this.TIMEOUT);
    this.updateManager = new rdf.UpdateManager(this.store);
  }

  /**
   * Ensures that there exist the necesary files and folders for the chat to work
   * if everything is okay, it will just do nothing but check the correctness
   */
  private async initOhMyPodChat() {
    const webId = (await auth.currentSession(localStorage)).webId;
    this.getRootDirection(webId);
    await this.createRooFolder(webId); //Initialize root folder
    await this.createNotificationsFile(webId); //Initialize notifications.ttl
    await this.createChatIndexFile(webId); //Initialize chat_index.ttl
  }

  /**
   * Creates the necessary folder for the chat to work
   * @param webId WebId of the chatUser
   */
  private async createRooFolder(webId: string) {
    await fileExplorerService.createFolder(
      this.getRootDirection(webId),
      this.BASE_ADDRESS
    );
  }

  private getRootDirection(webId: string) {
    return webId.split("/profile")[0];
  }
  /**
   * Notifications file used to notify the unread messages of the user
   * @param webId webId of the profile
   */
  private async createNotificationsFile(webId: string) {
    let fileName = "notifications.ttl";
    if (
      await fileExplorerService.doesItemExist(
        this.getRootDirection(webId) + this.BASE_ADDRESS + "/" + fileName
      )
    ) {
      //File already exist, no overwrite needed
    } else {
      await fileExplorerService.createFile(
        this.getRootDirection(webId) + this.BASE_ADDRESS,
        fileName,
        "@prefix : <#>.\n",
        "text/turtle",
        false
      );
    }
  }

  /**
   *  Index file used to keep all the active chats of the user
   * @param webId webid of the profile
   */
  private async createChatIndexFile(webId: string) {
    let content = "@prefix : <#>.\n";
    if (
      await fileExplorerService.doesItemExist(
        this.getRootDirection(webId) + this.BASE_ADDRESS + "/" + this.INDEX_NAME
      )
    ) {
      //File already exists no need to create
    } else {
      await fileExplorerService.createFile(
        this.getRootDirection(webId) + this.BASE_ADDRESS,
        this.INDEX_NAME,
        content,
        "text/turtle",
        false
      );
    }
  }

  /**
   * Creates a chat for the given users, if there is only one, a private chat will be created, and only if it doesn't
   * already exist
   * @param users Users for the chat
   * @param chatName optional param for chat name for groups
   */
  public async createChat(users: ChatUser[], chatName?: string) {
    if (users === undefined || users.length === 0) return;
    if (users.length == 1) {
      if (this.checkPrivateChatAlreadyExists(users[0])) {
        console.log("CANNOT CREATE A CHAT,ALREADY EXISTS");
        return; //Cannot create another chat, chat already exists
      }
    }
    const creator = await ChatService.getChatUser(
      (await auth.currentSession()).webId
    );
    let chat = Chat.buildNewChatFromUsersAndName(creator, users, chatName);
    console.log("CHAT TO BE CREATED", chat);
    await this.createChatFolder(chat);
    await this.createACLForChatFolder(chat);
    await this.createFileForChat(chat);
    await this.addChatToOwnIndexFile(chat);
    await this.addChatToFriendsIndexFile(chat);
  }

  private async createACLForChatFolder(chat: Chat) {
    //TODO
  }
  private async createFileForChat(chat: Chat) {
    console.log("RESOLVED CHAT DIRECTION", this.resolveChatDirection(chat));
    await fileExplorerService.createFile(
      this.resolveChatDirection(chat),
      this.CHAT_METADATA_NAME,
      chat.getMetadataForPod(),
      "application/json",
      false
    );
  }
  /**
   * Chechs if there exist a private chat with a certain user, if it exist return true,else false
   * @param user user to test if exists chat with
   */
  private async checkPrivateChatAlreadyExists(user: ChatUser) {
    let toCheckChats: Chat[] = [];
    await this.loadChats((chats) => (toCheckChats = chats)); //TODO ESTO NO SIRVE

    console.log("CHATS TO CHECK", toCheckChats);
    return toCheckChats
      .filter((chat) => chat.participants.length <= 2)
      .filter(
        (chat) =>
          chat.participants.find(
            (participant) => participant.webId === user.webId
          ) !== undefined
      );
  }
  private addChatToFriendsIndexFile(chat: Chat) {}

  /**
   * Adds a rdf predicate "fileIndex---participats---->folderAddress" to the file index
   * @param chat New chat to add to index
   */
  private async addChatToOwnIndexFile(chat: Chat) {
    const insertions: any[] = [];
    const deletions = [];
    const chatIndexAddress =
      this.getRootDirection(chat.creator.webId) + this.INDEX_TTL_ADDRESS;
    const chatFolderAddress = this.resolveChatDirection(chat);
    const doc = rdf.sym(chatIndexAddress);

    const chatIndexSubject = rdf.sym(chatIndexAddress + "#this");
    const predicateParticipates = rdf.sym(FLOW("participation"));
    const chatFolderObject = rdf.sym(chatFolderAddress);

    const statement = rdf.st(
      chatIndexSubject,
      predicateParticipates,
      chatFolderObject,
      doc
    );

    insertions.push(statement);

    await this.updateManager.update(
      deletions,
      insertions,
      (uri, ok, message) => {
        if (!ok) {
          console.log("Error: " + message);
        }
      }
    );
  }

  private resolveChatDirection(chat: Chat) {
    return (
      this.getRootDirection(chat.creator.webId) +
      this.BASE_ADDRESS +
      "/" +
      this.BASE_CHAT_NAME +
      chat._id
    );
  }
  private async createChatFolder(chat: Chat) {
    let fullAddress =
      this.getRootDirection(chat.creator.webId) + this.BASE_ADDRESS + "/";
    let dirName = this.BASE_CHAT_NAME + chat._id;
    console.log("DIRECTORY", fullAddress, dirName);
    await fileExplorerService.createFolder(fullAddress, dirName);
  }

  public async loadChats(callback: (chats: Chat[]) => void) {
    let chatList: Chat[] = [];
    let myWebId = (await auth.currentSession()).webId;
    let indexTTL = this.getRootDirection(myWebId) + this.INDEX_TTL_ADDRESS;
    this.fetcher.nowOrWhenFetched(indexTTL, async (ok) => {
      if (!ok) {
        console.log("Oops, something happened and couldn't fetch data");
        return [];
      } else {
        const subject = rdf.sym(indexTTL + "#this");

        //Query de nodes that contain the indexfile as subject, and praticipation as predicate
        const chatsNodes = await this.store.each(
          subject,
          FLOW("participation")
        );

        chatList = await Promise.all(
          chatsNodes.map(async (chat) => {
            const chatDirection = chat.value;
            return await this.getConversationFromURI(chatDirection);
          })
        );

        console.log("CHATLIST", chatList);

        callback(chatList);
        // return chatList;
      }
    });
  }

  private async getConversationFromURI(chatFolderDirection: string) {
    let chat: Chat = await Chat.parseFromMetadata(
      await fileExplorerService.readFile(
        `${chatFolderDirection}/${this.CHAT_METADATA_NAME}`
      )
    );
    console.log("CHAT ITEM", chat);

    return chat;
  }

  public sendMessage() {
    //TODO
  }

  public loadLastMessage(chat: Chat) {
    //TODO
  }

  /**
   * Returns the chatUsers  (friends) for the current logged user
   */
  public async getFriends(): Promise<ChatUser[]> {
    const webId = (await auth.currentSession(localStorage)).webId;
    const me = data[webId];
    let returnFriends: ChatUser[] = [];
    for await (const friendId of me.friends) {
      returnFriends.push(await ChatService.getChatUser(friendId));
    }
    return returnFriends;
  }
  /**
   * Returns the ChatUser of a webId
   * @param webId webId of the user
   */
  public static async getChatUser(webId: string): Promise<ChatUser> {
    let friend = await data[webId];
    let name = `${await friend.vcard_fn}`;
    let image = `${await friend["vcard:hasPhoto"]}`;
    let chatUser = new ChatUser(`${webId}`, name, image);
    return chatUser;
  }
}
