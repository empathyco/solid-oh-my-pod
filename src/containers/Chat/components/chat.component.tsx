import React, { Component, Fragment } from "react";
import ChatListComponent from "./ChatList";
import ChatDisplayComponent from "./ChatDisplay";
import { ChatWrapper } from "./chat.style";
import { Chat } from "../models/chatModel";
import { Message } from "../models/message";
import { ChatUser } from "../models/chatUser";
import { ChatService } from "../services/chatService";
import NewChatWindowComponent from "./newChatWindow/";

type Props = {};
type State = {
  chats: Chat[];
  selectedChat: Chat | undefined;
  createChatWindowIsOpen: boolean;
};

export default class ChatComponent extends Component<Props, State> {
  chatService: ChatService;
  webSockets: WebSocket[];
  constructor(props: Props) {
    super(props);
    this.state = {
      chats: [],
      selectedChat: undefined,
      createChatWindowIsOpen: false,
    };
    this.chatService = new ChatService();
  }

  async componentDidMount() {
    this.loadChats();
  }

  private async loadChats() {
    let chats = await this.chatService.loadChats();
    this.setState({ chats: chats });

    this.setConversationsListeners(chats); //Listen to each of the messages_index.ttl
    this.setChatIndexListener(); //Listen to chat_index.ttl
  }

  private async updateChat(chat: Chat) {
    let index = this.state.chats.indexOf(chat);
    let lastMessage = await this.chatService.loadLastMessage(chat);
    let chats = this.state.chats;
    chats[index] = chat.updateMessage(lastMessage);

    this.setState({ chats: chats });
  }
  private setConversationsListeners(chats: Chat[]) {
    for (let chat of chats) {
      let direction = this.chatService.resolveChatMetadataFile(chat);
      let directionForSocket = "wss" + direction.split("https")[1];

      let socket = new WebSocket(directionForSocket);

      socket.onopen = function() {
        this.send("sub " + direction);
      };
      let updateChat = (chat: Chat) => this.updateChat(chat);

      socket.onmessage = async function(msg) {
        if (msg.data && msg.data.slice(0, 3) === "pub") {
          updateChat(chat);
        }
      };
    }
  }
  private setChatIndexListener() {
    //TODO
    //Load conversations
  }

  handleChatSelect = (id: string) => {
    this.setState({
      selectedChat: this.state.chats.filter((chat) => chat._id === id)[0],
    });
  };

  handleMessageSubmit = async (text: string) => {
    let currentSelectedChat = this.state.selectedChat;
    if (currentSelectedChat) {
      //sends the message to solid, returns a "temporary message" to be added to the array
      //Sockets will retrieve the real message and subtitude the temporary with the final one
      let sentMessage = await this.chatService.sendMessage(
        currentSelectedChat,
        text
      );

      this.sendTemporaryMessage(sentMessage, currentSelectedChat);
    }
  };

  private sendTemporaryMessage(message: Message, currentChat: Chat) {
    currentChat.messages.push(message);
    this.setState({ selectedChat: currentChat });
  }
  handleCreateNewChatButtonClick = () => {
    this.setState({ createChatWindowIsOpen: true });
  };

  handleCreateChat = async (users: ChatUser[]) => {
    this.setState({ createChatWindowIsOpen: false });
    await this.chatService.createChat(users);
    this.loadChats();
  };

  closeNewChatWindow = () => {
    this.setState({ createChatWindowIsOpen: false });
  };

  render() {
    return (
      <Fragment>
        <ChatWrapper>
          <ChatListComponent
            newChatClickHandler={this.handleCreateNewChatButtonClick}
            chatSelectedHandler={this.handleChatSelect}
            selectedChat={this.state.selectedChat}
            chats={this.state.chats}
          ></ChatListComponent>
          <ChatDisplayComponent
            messageSubmitHandler={this.handleMessageSubmit}
            selectedChat={this.state.selectedChat}
          ></ChatDisplayComponent>
        </ChatWrapper>
        {this.renderNewChatWindow()}
      </Fragment>
    );
  }
  renderNewChatWindow() {
    const { createChatWindowIsOpen: openCreateChatWindow } = this.state;

    return (
      <Fragment>
        {openCreateChatWindow ? (
          <NewChatWindowComponent
            closeWindowHandler={this.closeNewChatWindow}
            createChatHandler={this.handleCreateChat}
            chatService={this.chatService}
          ></NewChatWindowComponent>
        ) : (
          undefined
        )}
      </Fragment>
    );
  }
}

const me = new ChatUser(
  "https://javifake3.solid.community/profile/card#me",
  "Javier García" + Math.trunc(Math.random() * 20),
  "https://javifake3.solid.community/profile/descarga%20(3).jpg"
);
