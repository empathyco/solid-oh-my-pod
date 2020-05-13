import * as React from "react";
import { Component } from "react";
import { Toolbar, SearchInput, NewChatButton } from "./chatListToolbar.style";

export default class ChatListToolbar extends Component {
  render() {
    return (
      <Toolbar>
        <SearchInput></SearchInput>
        <NewChatButton></NewChatButton>
      </Toolbar>
    );
  }
}
