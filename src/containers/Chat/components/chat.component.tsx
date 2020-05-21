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

    //TODO with web sockets
    this.setConversationsListeners(chats); //Listen to each of the messages_index.ttl
    this.setChatIndexLister(); //Listen to chat_index.ttl
    //TODO clean notifications.ttl
  }

  private setConversationsListeners(chats: Chat[]) {
    //TODO
    //Get las message
    //Add to conversation
    //Set estate
    //Clean notifications.ttl
  }
  private setChatIndexLister() {
    //TODO
    //Load conversations 
  }

  handleChatSelect = (id: string) => {
    this.setState({
      selectedChat: this.state.chats.filter((chat) => chat._id === id)[0],
    });
  };

  handleMessageSubmit = async (text: string) => {
    let currentChats = this.state.chats;
    let currentSelectedChat = this.state.selectedChat;
    if (currentSelectedChat) {
      //TODO when sockets available, this wont be neccesary
      let sentMessage = await this.chatService.sendMessage(
        currentSelectedChat,
        text
      );
      currentSelectedChat.messages.push(sentMessage);
      this.setState({ chats: currentChats });
    }
  };
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
