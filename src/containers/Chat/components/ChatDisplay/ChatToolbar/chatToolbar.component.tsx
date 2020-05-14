import * as React from "react";
import { Component } from "react";
import {
  ChatToolbar,
  ChatImage,
  ChatImageWrapper,
  ChatInfo,
} from "./chatToolbar.style";
import { Chat } from "../../../models/chatModel";

type Props = { selectedChat: Chat };
type State = { selectedChat: Chat };
export default class ChatToolbarComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { selectedChat: props.selectedChat };
  }

  componentWillReceiveProps(newProps: Props) {
    const { selectedChat } = newProps;
    this.setState({ selectedChat: selectedChat });
  }
  render() {
    const { selectedChat } = this.state;
    return (
      <ChatToolbar>
        <ChatImageWrapper>
          <ChatImage>
            <img src={selectedChat.getImage()} alt="chat-image" />
          </ChatImage>
        </ChatImageWrapper>
        <ChatInfo>
          <h3>{selectedChat.getChatName()}</h3>
        </ChatInfo>
      </ChatToolbar>
    );
  }
}
