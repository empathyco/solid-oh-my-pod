import * as React from "react";
import { Component } from "react";
import { MessageDisplay } from "./messageDisplay.style";
import { Message } from "../../../models/message";
import MessageComponent from "./Message";
import { ldflexService } from "services";

type Props = {
  messages: Message[];
};
type State = { messages: Message[]; myWebId: string };
export default class MessageDisplayComponent extends Component<Props, State> {
  messagesEnd: HTMLDivElement | null;
  constructor(props: Props) {
    super(props);
    this.state = { messages: props.messages, myWebId: "" };
  }

  async componentDidMount() {
    //TODO user context in this case
    let webId = await ldflexService.getWebId();
    this.setState({ myWebId: webId });
    this.scrollToBottom();

  }
  componentDidUpdate() {
    this.scrollToBottom();
  }

  componentWillReceiveProps(newProps: Props) {
    this.setState({ messages: newProps.messages });
  }

  scrollToBottom = () => {
    if (this.messagesEnd) {
      this.messagesEnd.scrollIntoView({ behavior: "auto" });
    }
  };

  render() {
    const { messages, myWebId } = this.state;
    return (
      <MessageDisplay>
        {messages.map((message) => (
          <MessageComponent
            key={message._id}
            message={message}
            myWebId={myWebId}
          ></MessageComponent>
        ))}
        <div 
          style={{ float: "left", clear: "both" }}
          ref={(el) => {
            this.messagesEnd = el;
          }}
        ></div>
      </MessageDisplay>
    );
  }
}
