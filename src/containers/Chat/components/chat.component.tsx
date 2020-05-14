import React, { Component, Fragment } from "react";
import ChatListComponent from "./ChatList";
import ChatDisplayComponent from "./ChatDisplay";
import { ChatWrapper } from "./chat.style";
import { Chat } from "../models/chatModel";
import { Message } from "../models/message";
import { ChatUser } from "../models/chatUser";

type Props = {};
type State = {
  chats: Chat[];
  selectedChat: Chat | undefined;
};

export default class ChatComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { chats: [], selectedChat: undefined };
  }

  componentDidMount() {
    let conversations: Chat[] = [];
    for (let i = 0; i < 30; i++) {
      conversations.push(Chat.mock());
    }
    this.setState({ chats: conversations });
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
  handleCreateNewChat = () => {
    console.log("Crear chat nuevo");
  };

  render() {
    return (
      <Fragment>
        <ChatWrapper>
          <ChatListComponent
            newChatClickHandler={this.handleCreateNewChat}
            chatSelectedHandler={this.handleChatSelect}
            selectedChat={this.state.selectedChat}
            chats={this.state.chats}
          ></ChatListComponent>
          <ChatDisplayComponent
            messageSubmitHandler={this.handleMessageSubmit}
            selectedChat={this.state.selectedChat}
          ></ChatDisplayComponent>
        </ChatWrapper>
      </Fragment>
    );
  }
}

const me = new ChatUser(
  "https://javifake3.solid.community/profile/card#me",
  "Javier García" + Math.trunc(Math.random() * 20),
  "https://javifake3.solid.community/profile/descarga%20(3).jpg"
);
