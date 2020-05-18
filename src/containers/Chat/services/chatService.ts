import data from "@solid/query-ldflex";
import auth from "solid-auth-client";
import { ChatUser } from "../models/chatUser";
import { fileExplorerService } from "services";

export class ChatService {
  BASE_ADDRESS = "/public/test/ohmypod_chat";

  /**
   * Ensures that there exist the necesary files and folders for the chat to work
   * if everything is okay, it will just do nothing but check the correctness
   */
  async initOhMyPodChat() {
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
    let fileName = "chat_index.ttl";
    let content = "@prefix : <#>.\n";
    if (
      await fileExplorerService.doesItemExist(
        this.getRootDirection(webId) + this.BASE_ADDRESS + "/" + fileName
      )
    ) {
      //File already exists no need to create
    } else {
      await fileExplorerService.createFile(
        this.getRootDirection(webId) + this.BASE_ADDRESS,
        fileName,
        content,
        "text/turtle",
        false
      );
    }
  }

  public createChat(users: ChatUser[]) {
    this.createChatFolder();
    this.updateOwnIndexFile();
    this.updateFriendsIndexFile();
  }
  private updateFriendsIndexFile() {}
  private updateOwnIndexFile() {}
  private createChatFolder() {}

  public loadChats() {}

  public sendMessage() {}

  public loadLastMessage() {}

  /**
   * Returns the chatUsers  (friends) for the current logged user
   */
  public async getFriends(): Promise<ChatUser[]> {
    const webId = (await auth.currentSession(localStorage)).webId;
    const me = data[webId];
    let returnFriends: ChatUser[] = [];
    for await (const friendId of me.friends) {
      returnFriends.push(await this.getChatUser(friendId));
    }
    return returnFriends;
  }
  /**
   * Returns the ChatUser of a webId
   * @param webId webId of the user
   */
  private async getChatUser(webId: string): Promise<ChatUser> {
    let friend = await data[webId];
    let name = `${await friend.vcard_fn}`;
    let image = `${await friend["vcard:hasPhoto"]}`;
    let chatUser = new ChatUser(`${webId}`, name, image);
    return chatUser;
  }
}
