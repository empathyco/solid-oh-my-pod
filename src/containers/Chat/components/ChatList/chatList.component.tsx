import * as React from "react";
import { Component } from "react";
import { ChatList, ChatsWrapper, ChatsWrapperScroll } from "./chatList.style";
import ChatListToolbar from "./ChatListToolbar";
import { Chat } from "../../models/chatModel";
import ChatPreviewComponent from "./ChatPreview";

type Props = {
  chats: Chat[];
  chatSelectedHandler: (id) => void;
  selectedChat: Chat | undefined;
  newChatClickHandler: () => void;
};
type State = {
  chats: Chat[];
  selectedId: string | undefined;
  searchInputValue: string;
};

export default class ChatListComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      chats: props.chats,
      selectedId: props.selectedChat ? props.selectedChat._id : undefined,
      searchInputValue: "",
    };
  }

  componentWillReceiveProps(newProps: Props) {
    this.setState({
      chats: newProps.chats,
      selectedId: newProps.selectedChat ? newProps.selectedChat._id : undefined,
    });
  }

  handleSearchInputUpdate = (value: string) => {
    this.setState({ searchInputValue: value });
  };
  render() {
    return (
      <ChatList>
        <ChatListToolbar
          searchInputUpdateHandler={this.handleSearchInputUpdate}
          newChatClickHandler={this.props.newChatClickHandler}
        ></ChatListToolbar>
        <ChatsWrapperScroll>
          <ChatsWrapper>{this.getChats()}</ChatsWrapper>
        </ChatsWrapperScroll>
      </ChatList>
    );
  }

  handleChatClick = (id: string) => {
    this.props.chatSelectedHandler(id);

    //
  };
  getChats(): React.ReactNode {
    const { chats, selectedId } = this.state;
    return (
      <React.Fragment>
        {chats
          .filter((chat) =>
            chat.getChatName().includes(this.state.searchInputValue)
          )
          .map((chat) => (
            <ChatPreviewComponent
              isSelected={chat._id === selectedId}
              key={chat._id}
              handleChatClick={this.handleChatClick}
              chat={chat}
            ></ChatPreviewComponent>
          ))}
      </React.Fragment>
    );
  }
}
