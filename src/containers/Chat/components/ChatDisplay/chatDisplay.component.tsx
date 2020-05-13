import * as React from "react";
import { Component } from "react";

import { ChatDisplayWrapper, ChatDisplay } from "./chatDisplay.style";
import { Chat } from "../../models/chatModel";

type Props = {};
type State = {
  selectedChat: Chat | undefined;
};
export default class ChatDisplayComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { selectedChat: undefined };
  }
  render() {
    return (
      <ChatDisplayWrapper>
        {this.state.selectedChat ? (
          <ChatDisplay>
            {/* <ChatToolbar></ChatToolbar>
            <MessageDisplay></MessageDisplay>
            <MessageInputbar></MessageInputbar> */}
          </ChatDisplay>
        ) : (
          undefined
        )}
      </ChatDisplayWrapper>
    );
  }
}
