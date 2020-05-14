import * as React from "react";
import { Component } from "react";
import { Toolbar, SearchInput, NewChatButton } from "./chatListToolbar.style";

type Props = {
  newChatClickHandler: () => void;
};
export default class ChatListToolbar extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <Toolbar>
        <SearchInput></SearchInput>
        <NewChatButton onClick={this.props.newChatClickHandler}></NewChatButton>
      </Toolbar>
    );
  }
}
