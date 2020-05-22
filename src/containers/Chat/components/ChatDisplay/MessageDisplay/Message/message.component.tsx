import * as React from "react";
import { Component } from "react";
import { Message } from "../../../../models/message";
import { MessageWrapper } from "./message.style";
import { DateUtils } from "../../../../../../utils/dateUtils";

type Props = {
  message: Message;
  myWebId: string;
};

export default class MessageComponent extends Component<Props> {
  constructor(props: Props) {
    super(props);
    // console.log(props.message);
  }

  render() {
    const { content, sender, timestamp, temporary } = this.props.message;
    const webId = this.props.myWebId;
    return (
      <MessageWrapper className={sender.webId === webId ? "right" : undefined}>
        <p className="content">{content}</p>
        {temporary ? <p className="sendingIcon">...</p> : undefined}
        <p className="sendTime">{DateUtils.formatHH_MM(new Date(timestamp))}</p>
      </MessageWrapper>
    );
  }
}
