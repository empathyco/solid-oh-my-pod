import * as React from "react";
import { Component } from "react";
import {
  MessageInputWrapper,
  MessageInput,
  SendButton,
} from "./messageInput.style";

type Props = { messageSubmitHandler: (text: string) => void };
type State = {
  inputValue: string;
};
export default class MessageInputComponent extends Component<Props, State> {
  clearMessage() {
    this.setState({ inputValue: "" });
  }
  constructor(props: Props) {
    super(props);
    this.state = { inputValue: "" };
  }
  handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };
  handleSubmitMessage = () => {
    if (this.state.inputValue.trim() !== "") {
      this.props.messageSubmitHandler(this.state.inputValue.trim());
      this.clearMessage();
    }
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.handleSubmitMessage();
    }
  };
  render() {
    return (
      <MessageInputWrapper>
        <MessageInput
          onChange={this.handleValueChange}
          value={this.state.inputValue}
          onKeyPress={this.handleKeyPress}
        ></MessageInput>
        <SendButton onClick={this.handleSubmitMessage}></SendButton>
      </MessageInputWrapper>
    );
  }
}
