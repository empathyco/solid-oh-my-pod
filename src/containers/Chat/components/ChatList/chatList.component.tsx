import * as React from "react";
import { Component } from "react";
import { ChatList, ChatsWrapper, ChatsWrapperScroll } from "./chatList.style";
import ChatListToolbar from "./ChatListToolbar";
import { Chat } from "../../models/chatModel";
import ChatPreviewComponent from "./ChatPreview";
type Props = { chats: Chat[] };
type State = { chats: Chat[]; selectedId: string | undefined };
export default class ChatListComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      chats: [
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
        new Chat(),
      ],
      selectedId: undefined,
    };
  }
  render() {
    return (
      <ChatList>
        <ChatListToolbar></ChatListToolbar>
        <ChatsWrapperScroll>
          <ChatsWrapper>{this.getChats()}</ChatsWrapper>
        </ChatsWrapperScroll>
      </ChatList>
    );
  }

  handleChatClick = (id: string) => {
    console.log(`Se ha pulsado ${id}`);
    this.setState({ selectedId: id });

    //
  };
  getChats(): React.ReactNode {
    const { chats, selectedId } = this.state;
    return (
      <React.Fragment>
        {chats.map((chat) => (
          <ChatPreviewComponent
            isSelected={chat._id === selectedId}
            handleChatClick={this.handleChatClick}
            chat={chat}
          ></ChatPreviewComponent>
        ))}
      </React.Fragment>
    );
  }
}
