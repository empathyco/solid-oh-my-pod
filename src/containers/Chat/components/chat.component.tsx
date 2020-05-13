import React, { Component, Fragment } from "react";
import ChatListComponent from "./ChatList";
import ChatDisplayComponent from "./ChatDisplay";
import { ChatWrapper } from "./chat.style";

export default class ChatComponent extends Component {

    render() {
        return (<Fragment>
            <ChatWrapper>
                <ChatListComponent></ChatListComponent>
                <ChatDisplayComponent></ChatDisplayComponent>
            </ChatWrapper>

        </Fragment>)

    }

}