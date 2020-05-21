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
    let setChats = (chats: Chat[]) => {
      this.setState({ chats: chats });
      console.log("ESTADO", this.state);
    };
    this.chatService.loadChats(setChats);
    // let conversations: Chat[] = [];
    // for (let i = 0; i < 30; i++) {
    //   conversations.push(Chat.mock());
    // }

    // this.setState({ chats: conversations });
  }

  handleChatSelect = (id: string) => {
    this.setState({
      selectedChat: this.state.chats.filter((chat) => chat._id === id)[0],
    });
  };

  handleMessageSubmit = (text: string) => {
    //TODO send to solid
    let currentChats = this.state.chats;
    let currentSelectedChat = this.state.selectedChat;
    if (currentSelectedChat) {
      currentSelectedChat.messages.push(
        Message.buildOwnMessage(text, "text", me)
      );
      this.setState({ chats: currentChats });
    }
  };
  handleCreateNewChatButtonClick = () => {
    this.setState({ createChatWindowIsOpen: true });
  };

  handleCreateChat = (users: ChatUser[]) => {
    this.setState({ createChatWindowIsOpen: false });
    this.chatService.createChat(users);
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
