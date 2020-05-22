import data from "@solid/query-ldflex";
import auth from "solid-auth-client";
import { ChatUser } from "../models/chatUser";
import { fileExplorerService } from "services";
import { Chat } from "../models/chatModel";
import * as rdf from "rdflib";
import { Message } from "../models/message";
import { sendNotification } from "utils/notification";
const FLOW = rdf.Namespace("http://www.w3.org/2005/01/wf/flow#"); // flow
const SCHEMA = rdf.Namespace("http://schema.org/");
const VCARD = rdf.Namespace("http://www.w3.org/2006/vcard/ns#");
const FOAF = rdf.Namespace("http://xmlns.com/foaf/0.1/"); // n0
const CONT = rdf.Namespace("http://rdfs.org/sioc/ns#"); // n
const TERMS = rdf.Namespace("http://purl.org/dc/terms/"); // terms
const MEE = rdf.Namespace("http://www.w3.org/ns/pim/meeting#"); // mee
const N1 = rdf.Namespace("http://purl.org/dc/elements/1.1/"); // n1
const XML = rdf.Namespace("http://www.w3.org/2001/XMLSchema#");
const PROV = rdf.Namespace("https://www.w3.org/ns/prov#");
const ACL = rdf.Namespace("http://www.w3.org/ns/auth/acl#");

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
  MESSAGE_INDEX_NAME = "messages_index.ttl";

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

  /**
   * Returns the webId of the current logged user
   */
  private async getMyWebId() {
    return (await auth.currentSession()).webId;
  }

  /**
   * Returns the base directory for the given webID
   * @param webId WebId of the user
   */
  private getRootDirection(webId: string) {
    return webId.split("/profile")[0];
  }
  /**
   * Notifications file used to notify the unread messages of the user
   * @param webId webId of the profile
   */
  private async createNotificationsFile(webId: string) {
    let fileName = "notifications.json";
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
        "",
        "application/json",
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
      if (await this.checkPrivateChatAlreadyExists(users[0])) {
        return; //Cannot create another chat, chat already exists
      }
    }
    const creator = await ChatService.getChatUser(
      (await auth.currentSession()).webId
    );
    let chat = Chat.buildNewChatFromUsersAndName(creator, users, chatName);

    await this.createChatFolder(chat);
    await this.createACLForChatFolder(chat);
    await this.createMetadataFileForChat(chat);
    await this.createMessageIndexForChat(chat);
    await this.addChatToOwnIndexFile(chat);

    //TODO uncomment this and test it
    // await this.addChatToFriendsIndexFile(chat);
  }

  /**
   *  Creates the base message index file for a chat
   * @param chat Chat to create the message index for
   */
  private async createMessageIndexForChat(chat: Chat) {
    var baseContent = "@prefix : <#>.\n";

    await fileExplorerService.createFile(
      this.resolveChatDirection(chat),
      this.MESSAGE_INDEX_NAME,
      baseContent,
      "text/turtle",
      false
    );
  }

  private async createACLForChatFolder(chat: Chat) {
    //TODO
  }

  /**
   * Creates the necessary file with the metadata for the chat to work
   * @param chat chat to creato file for
   */
  private async createMetadataFileForChat(chat: Chat) {
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
    let toCheckChats: Chat[] = await this.loadChats();

    return (
      toCheckChats
        .filter((chat) => chat.participants.length <= 2)
        .filter(
          (chat) =>
            chat.participants.find(
              (participant) => participant.webId === user.webId
            ) !== undefined
        ).length > 0
    );
  }

  /**
   * Adds the chat to each of the index files of the friends
   */
  private async addChatToFriendsIndexFile(chat: Chat) {
    const insertions: any[] = [];
    const deletions = [];
    let addresses: string[] = chat.participants
      .filter((user) => user.webId !== chat.creator.webId)
      .map((user) => {
        return this.getRootDirection(user.webId) + this.INDEX_TTL_ADDRESS;
      });

    const chatFolderAddress = this.resolveChatDirection(chat);

    await Promise.all(
      addresses.map(async (userChatIndexDirection) => {
        const doc = rdf.sym(userChatIndexDirection);

        const chatIndexSubject = rdf.sym(userChatIndexDirection + "#this");
        const predicateParticipates = rdf.sym(FLOW("participation"));
        const chatFolderObject = rdf.sym(chatFolderAddress);

        const statement = rdf.st(
          chatIndexSubject,
          predicateParticipates,
          chatFolderObject,
          doc
        );

        insertions.push(statement);

        return new Promise<void>((resolve, reject) => {
          this.updateManager.update(
            deletions,
            insertions,
            (uri, ok, message) => {
              if (!ok) {
                reject(
                  "Error while updating friend index " + userChatIndexDirection
                );
              } else {
                resolve();
              }
            }
          );
        });
      })
    );
  }

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

    return new Promise((resolve, reject) => {
      this.updateManager.update(deletions, insertions, (uri, ok, message) => {
        if (!ok) {
          reject(message);
        } else {
          resolve();
        }
      });
    });
  }

  /**
   * Returns the chat direction for a given chat object
   * @param chat chat to get the direction
   */
  private resolveChatDirection(chat: Chat) {
    return (
      this.getRootDirection(chat.creator.webId) +
      this.BASE_ADDRESS +
      "/" +
      this.BASE_CHAT_NAME +
      chat._id
    );
  }

  /**
   * Creates the folder for a given chat object
   * @param chat chat to create folder
   */
  private async createChatFolder(chat: Chat) {
    let fullAddress =
      this.getRootDirection(chat.creator.webId) + this.BASE_ADDRESS + "/";
    let dirName = this.BASE_CHAT_NAME + chat._id;

    await fileExplorerService.createFolder(fullAddress, dirName);
  }

  /**
   * Loads the chats for the current logged user
   */
  public async loadChats() {
    let chatList: Chat[] = [];
    let myWebId = (await auth.currentSession()).webId;
    let indexTTL = this.getRootDirection(myWebId) + this.INDEX_TTL_ADDRESS;
    return new Promise<Chat[]>((resolve, reject) => {
      this.fetcher.nowOrWhenFetched(indexTTL, async (ok, message) => {
        if (!ok) {
          reject(message);
        } else {
          const subject = rdf.sym(indexTTL + "#this");

          //Query de nodes that contain the indexfile as subject, and praticipation as predicate
          const chatsNodes = await this.store.each(
            subject,
            FLOW("participation")
          );

          chatList = await Promise.all(
            chatsNodes.map((chat) => {
              const chatDirection = chat.value;
              return this.getConversationFromURI(chatDirection);
            })
          );

          resolve(chatList);
        }
      });
    });
  }

  /**
   * Returns a Chat object from a URI
   * @param chatFolderDirection URI of the chat
   */
  private async getConversationFromURI(
    chatFolderDirection: string
  ): Promise<Chat> {
    let chat: Chat = await Chat.parseFromMetadata(
      await fileExplorerService.readFile(
        `${chatFolderDirection}/${this.CHAT_METADATA_NAME}`
      )
    );
    return await this.withMessages(chat);
  }

  /**
   * Returns a chat with the messages attached
   * @param chat Chat to fill with messages
   */
  private async withMessages(chat: Chat): Promise<Chat> {
    let chatURI =
      this.resolveChatDirection(chat) + "/" + this.MESSAGE_INDEX_NAME;

    return new Promise<Chat>((resolve, reject) => {
      this.fetcher.nowOrWhenFetched(chatURI, async (ok) => {
        if (!ok) {
          reject("Oops, something happened and couldn't fetch data");
        } else {
          const subject = rdf.sym(chatURI + "#this");
          const nameMessage = FLOW("message");
          const messagesNodes = await this.store.each(subject, nameMessage);

          //Get all messages asyncronously
          let messages: Message[] = await Promise.all(
            messagesNodes.map((data) => this.parseMessage(data))
          );

          chat.assignMessages(messages);
          resolve(chat);
        }
      });
    });
  }

  /**
   * Returns  a Message object representing the message after parsing it from a solid node
   * @param node Solid node representing the message
   */
  private async parseMessage(node: any): Promise<Message> {
    let id = node.value.split("#")[1];
    let content = this.store.any(node, CONT("content")).value;
    let timestamp = this.store.any(node, TERMS("created")).value;
    let sender = this.store.any(node, FOAF("maker")).value;
    let contentType = this.store.any(node, SCHEMA("encodingFormat")).value;
    return Message.buildFromSolidData(
      id,
      content,
      timestamp,
      sender,
      contentType
    );
  }
  /**
   * Sends a message and returns the object of the sent message
   * @param chat Chat to send the message
   * @param messageContent Content of the message
   */
  public async sendMessage(
    chat: Chat,
    messageContent: string
  ): Promise<Message> {
    let sender = await ChatService.getChatUser(await this.getMyWebId());
    let message = Message.buildOwnMessage(messageContent, "text", sender);

    let direction =
      this.resolveChatDirection(chat) + "/" + this.MESSAGE_INDEX_NAME;

    //Send message to solid------------------
    let insertions: any[] = [];
    let deletions = [];

    const doc = rdf.sym(direction);
    let subject = rdf.sym(direction + "#" + message._id);

    // Generate statement for the date of creation
    let predicateDate = rdf.sym(TERMS("created"));

    let messageDate = rdf.literal(
      message.timestamp,
      undefined,
      XML("dateTime")
    );
    let dateSt = rdf.st(subject, predicateDate, messageDate, doc);
    insertions.push(dateSt);

    // Generate statement for the content of the message
    let predicateMessage = rdf.sym(CONT("content"));
    let msgSt = rdf.st(subject, predicateMessage, message.content, doc);
    insertions.push(msgSt);

    //Generate statement for the content type of the message
    let predicateContentType = rdf.sym(SCHEMA("encodingFormat"));
    let messageTypeSt = rdf.st(
      subject,
      predicateContentType,
      message.contentType,
      doc
    );
    insertions.push(messageTypeSt);

    // Generate statement for the maker of the message
    let predicateMaker = rdf.sym(FOAF("maker"));
    let makerSt = rdf.sym(message.sender.webId); //Web id of the maker
    let makerStatement = rdf.st(subject, predicateMaker, makerSt, doc);
    insertions.push(makerStatement);

    // Add to flow
    subject = rdf.sym(direction + "#this");
    let predicate = rdf.sym(FLOW("message"));
    let object = rdf.sym(direction + "#" + message._id);
    let statement = rdf.st(subject, predicate, object, doc);
    insertions.push(statement);

    this.updateManager.update(deletions, insertions, (uri, ok, error) => {
      if (!ok) {
        console.error("error sending message");
      } else {
        this.sendNotification(chat);
      }
    });

    return message.toTemporary();
  }

  private sendNotification(chat: Chat) {
    fileExplorerService.updateFileContent(
      this.resolveChatDirection(chat),
      this.CHAT_METADATA_NAME,
      ""
    );
  }
  /**
   * Updates a conversation, returning the updated conversation
   * @param chat Chat to uptade
   */
  public async updateChatMessages(chat: Chat) {
    return await this.getConversationFromURI(this.resolveChatDirection(chat));
  }
  public async loadLastMessage(chat: Chat): Promise<Message> {
    let chatURI =
      this.resolveChatDirection(chat) + "/" + this.MESSAGE_INDEX_NAME;

    return new Promise<Message>((resolve, reject) => {
      this.fetcher.nowOrWhenFetched(chatURI, async (ok) => {
        if (!ok) {
          reject("Oops, something happened and couldn't fetch data");
        } else {
          const subject = rdf.sym(chatURI + "#this");
          const nameMessage = FLOW("message");
          const messagesNodes = await this.store.each(subject, nameMessage);

          if (messagesNodes)
            resolve(
              await this.parseMessage(messagesNodes[messagesNodes.length - 1])
            );
          else resolve(undefined);
        }
      });
    });
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

  public resolveChatMessageIndex(chat: Chat) {
    return this.resolveChatDirection(chat) + "/" + this.MESSAGE_INDEX_NAME;
  }

  public resolveChatMetadataFile(chat: Chat) {
    return this.resolveChatDirection(chat) + "/" + this.CHAT_METADATA_NAME;
  }
}
