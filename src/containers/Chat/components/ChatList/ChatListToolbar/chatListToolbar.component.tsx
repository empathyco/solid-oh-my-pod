import * as React from "react";
import { Component } from "react";
import {
  Toolbar,
  SearchInput,
  NewChatButton,
  ClearButton,
  SearchInputWrapper,
} from "./chatListToolbar.style";

type Props = {
  newChatClickHandler: () => void;
  searchInputUpdateHandler: (value: string) => void;
};
type State = {
  searchValue: string;
};
export default class ChatListToolbar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { searchValue: "" };
  }

  updateSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: event.target.value });
    this.props.searchInputUpdateHandler(event.target.value);
  };

  clearSearch = () => {
    this.setState({ searchValue: "" });
    this.props.searchInputUpdateHandler("");
  };

  handleKeyPress = (event: any) => {
    if (event.key === "Escape") {
      this.clearSearch();
      event.target.blur(); //make it lose focus
    }
  };
  render() {
    return (
      <Toolbar>
        <SearchInputWrapper>
          <SearchInput
            onChange={this.updateSearchValue}
            value={this.state.searchValue}
            onKeyDown={this.handleKeyPress}
          ></SearchInput>
          {this.state.searchValue.trim() !== "" ? (
            <ClearButton onClick={this.clearSearch}>𝗫</ClearButton>
          ) : (
            undefined
          )}
        </SearchInputWrapper>

        <NewChatButton onClick={this.props.newChatClickHandler}></NewChatButton>
      </Toolbar>
    );
  }
}
