import * as React from "react";
import { Component } from "react";
import { ChatUser } from "../../models/chatUser";
import { ChatService } from "../../services/chatService";
import {
  PopupWindow,
  FriendsList,
  CloseButton,
  FriendOption,
} from "./newChatWindow.style";

type Props = {
  createChatHandler: (users: ChatUser[]) => void;
  chatService: ChatService;
  closeWindowHandler: () => void;
};
type State = {
  friends: ChatUser[];
  loadingFriends: boolean;
};
export default class NewChatWindowComponent extends Component<Props, State> {
  service: ChatService;
  constructor(props: Props) {
    super(props);
    this.state = { friends: [], loadingFriends: true };
    this.service = props.chatService;
  }

  async componentDidMount() {
    let loadFriends = await this.service.getFriends();

    this.setState({ friends: loadFriends, loadingFriends: false });
  }

  handleFriendClick = (friend: ChatUser) => {
    this.props.createChatHandler([friend]);
  };

  closeWindow = () => {
    this.props.closeWindowHandler();
  };
  render() {
    return (
      <PopupWindow>
        <h3>Create new chat...</h3>
        <CloseButton onClick={this.closeWindow}>X</CloseButton>

        {this.state.loadingFriends ? (
          <p>Loading friends...</p>
        ) : (
          <FriendsList>
            {this.state.friends.map((friend) => (
              <FriendOption
                key={friend.webId}
                onClick={() => this.handleFriendClick(friend)}
              >
                <img src={friend.photo} alt="friend_image" />
                <h4>{friend.name}</h4>
              </FriendOption>
            ))}
          </FriendsList>
        )}
      </PopupWindow>
    );
  }
}
