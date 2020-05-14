import * as React from "react";
import { Component } from "react";

import { ChatDisplayWrapper, ChatDisplay } from "./chatDisplay.style";
import { Chat } from "../../models/chatModel";
import ChatToolbarComponent from "./ChatToolbar";
import MessageDisplayComponent from "./MessageDisplay";
import MessageInputComponent from "./MessageInput";

type Props = {
  selectedChat: Chat | undefined;
  messageSubmitHandler: (text: string) => void;
};
type State = {
  selectedChat: Chat | undefined;
};
export default class ChatDisplayComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { selectedChat: props.selectedChat };
  }

  componentWillReceiveProps(newProps: Props) {
    this.setState({ selectedChat: newProps.selectedChat });
  }

  handleMessageSubmit = (text: string) => {
    this.props.messageSubmitHandler(text);
  };
  render() {
    const { selectedChat } = this.state;

    return (
      <ChatDisplayWrapper>
        {selectedChat ? (
          <ChatDisplay>
            <ChatToolbarComponent
              selectedChat={selectedChat}
            ></ChatToolbarComponent>
            <MessageDisplayComponent   messages={selectedChat.messages}>
            
            </MessageDisplayComponent>

            <MessageInputComponent
              messageSubmitHandler={this.handleMessageSubmit}
            ></MessageInputComponent>
          </ChatDisplay>
        ) : (
          undefined
        )}
      </ChatDisplayWrapper>
    );
  }
}
