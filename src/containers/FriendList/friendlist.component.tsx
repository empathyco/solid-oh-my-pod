import { ToasterService } from "components";
import { DeleteButton, OMPButton } from "components/Utils";
import React, { Fragment } from "react";
import { WithTranslation } from "react-i18next";
import { ldflexService } from "services";
import {
  ContainerHeader,
  LoaderService,
  UserInformation,
} from "../../components";
import ButtonWithImage from "../../components/Utils/buttons/ButtonWithImage/buttonWithImage";
import {
  AddFriendDialogBackground,
  Content,
  FormattedFiendNameWrapper,
  Friend,
  FriendCountDisplay,
  FriendInfo,
  FriendList,
  FriendListWrapper,
} from "./friendlist.style";

interface Props extends WithTranslation {}
type State = {
  openFriendDialog: boolean;
  friends: any[];
  webId: string;
  friendid: string;
  pimage: string;
};
const defaultProfilePhoto = "/img/icon/empty-profile.svg";
export default class FriendListComponent extends React.Component<Props, State> {
  defaultImage: string;
  constructor(props: Props) {
    super(props);
    this.defaultImage = "/img/icon/empty-profile.svg";

    this.state = {
      friends: [],
      webId: "",
      friendid: "",

      openFriendDialog: false,
      pimage: this.defaultImage,
    };
    this.myChangeHandler = this.myChangeHandler.bind(this);

    this.addFriend = this.addFriend.bind(this);
  }

  handleOpen = () => {
    this.setState({ openFriendDialog: true });
  };

  handleClose = () => {
    this.setState({ openFriendDialog: false });
  };

  async validateURI(url) {
    let num;
    await fetch(url).then((res) => {
      num = res.status;
    });
    return num;
  }

  async addFriend(event) {
    const { t } = this.props;
    let username: string = event.target.elements[0].value;
    event.preventDefault();

    console.log(username);
    const regex = new RegExp(
      // eslint-disable-next-line no-useless-escape
      /((https?:\/\/)?(?:localhost|[\w-]+(?:\.[\w-]+)+)(:\d+)?(\/\S*)?)(me)/,
      "i"
    );
    if (!regex.test(username)) {
      ToasterService.addPopUpToast({
        buttonLabel: "OKAY :(",
        onButtonClick: () => {},
        subtitle: t("friendlist.nameerror.description"),
        title: t("friendlist.nameerror.title"),
        type: "error",
      });
    } else {
      let exists = await this.validateURI(username);
      console.log("exists", exists);
      if (exists.toString() !== "200") {
        ToasterService.addPopUpToast({
          buttonLabel: t("friendlist.notfounderror.button"),
          onButtonClick: () => {},
          subtitle: t("friendlist.notfounderror.description"),
          title: t("friendlist.notfounderror.title"),
          type: "error",
        });
      } else {
        if (
          username.includes(this.state.webId) ||
          this.state.friends.find((friend) => username.includes(friend.url))
        ) {
          ToasterService.addPopUpToast({
            buttonLabel: t("friendlist.notfounderror.button"),
            onButtonClick: () => {},
            subtitle: t("friendlist.notfounderror.description"),
            title: t("friendlist.notfounderror.title"),
            type: "error",
          });
          return;
        }
        await ldflexService.addFriend(username);
        console.log("friend added succesfully");

        let friendData = await ldflexService.getFriendData(username);
        await this.setState({
          friends: [...this.state.friends, friendData],
        });
        this.setState({ friendid: "" });
        this.handleClose();
        ToasterService.addPopUpToast({
          buttonLabel: "OK",
          onButtonClick: () => {},
          subtitle: "",
          title: t("friendlist.friendAdded"),
          type: "success",
        });
      }
    }
  }

  async myChangeHandler(event) {
    this.setState({ friendid: event.target.value });
  }
  async getFriends() {
    let me = await ldflexService.getWebId();
    let friends = await ldflexService.getFriends(me);
    return friends;
  }

  async deletefriend(profile, t) {
    
      let index = 0;

      for (var i = 0; i < this.state.friends.length; i++) {
        if (this.state.friends[i].url === profile) {
          index = i;
          break;
        }
      }
      await ldflexService.removeFriend(profile);

      let newFriends = this.state.friends;

      newFriends.splice(index, 1);

      await this.setState({
        friends: newFriends,
      });
      ToasterService.addPopUpToast({
        buttonLabel: "OK",
        onButtonClick: () => {},
        subtitle: "",
        title: t("friendlist.friendRemoved"),
        type: "success",
      });
      // await this.forceUpdate();
    
  }

  async componentDidMount() {
    LoaderService.nowLoading();
    const friends = await this.getFriends();
    const webId = await ldflexService.getWebId();
    this.setState({ friends: friends, webId: webId });
    LoaderService.completeLoad();
  }

  getAddFriendDialog() {
    const { t } = this.props;
    return (
      this.state.openFriendDialog && (
        <AddFriendDialogBackground>
          <form className="createFilePopUp" onSubmit={this.addFriend}>
            <h2>{t("friendlist.addFriend")}</h2>

            <input type="text" id="fileName" name="fileName" autoFocus />
            <div className="popUpButtons">
              <OMPButton
                {...{
                  type: "button",
                  action: this.handleClose,
                  color: "error",
                  label: t("friendlist.cancel"),
                }}
              ></OMPButton>
              <OMPButton
                {...{
                  type: "submit",
                  action: () => {},
                  color: "main",
                  label: t("friendlist.addFriend"),
                }}
              ></OMPButton>
            </div>
          </form>
        </AddFriendDialogBackground>
      )
    );
  }

  getProfileCard(webId) {
    const { t } = this.props;
    return (
      <ContainerHeader
        {...{
          webId,
          defaultProfilePhoto,
          title: t("friendlist.yourFriends"),
        }}
      ></ContainerHeader>
    );
  }

  getFormattedFriendName(name) {
    const { t } = this.props;
    name = `${name || ""}`;
    if (name) {
      return (
        <Fragment>
          <h2>{name.split(" ")[0] + " "}</h2>
          <h3>
            {name
              .split(" ")
              .slice(1)
              .join(" ")}
          </h3>
        </Fragment>
      );
    }
    return <h2>{t("friendlist.unknownName")}</h2>;
  }

  getFriendsList() {
    const { t } = this.props;

    return (
      <FriendList>
        {this.state.friends.map((friend) => {
          if (friend.image === "undefined") friend.image = undefined;
          if (friend.company === "undefined") friend.company = undefined;
          if (friend.role === "undefined") friend.role = undefined;
          return (
            <Friend key={friend.url}>
              <img src={friend.image || this.defaultImage} alt="friend" />
              <FriendInfo>
                <a href={friend.url}>
                  <FormattedFiendNameWrapper>
                    {this.getFormattedFriendName(friend.fn)}
                  </FormattedFiendNameWrapper>
                </a>
                <p>
                  {`${friend.company || ""}${
                    friend.company && friend.role ? " · " : ""
                  }${friend.role || ""}`}
                </p>

                <DeleteButton
                  tooltip={t("friendlist.deletefriend")}
                  onClick={async () => await this.deletefriend(friend.url, t)}
                ></DeleteButton>
              </FriendInfo>
            </Friend>
          );
        })}

        {this.getAddFriendDialog()}
      </FriendList>
    );
  }

  getFriendCountDisplay() {
    const { t } = this.props;
    return (
      <FriendCountDisplay>
        <h2>{t("friendlist.friends")}</h2>
        <p>{this.state.friends.length}</p>
      </FriendCountDisplay>
    );
  }
  getUserInformation() {
    const { t } = this.props;
    const handleOpen = this.handleOpen;
    return (
      <UserInformation>
        {this.getFriendCountDisplay()}
        <ButtonWithImage
          {...{
            style: { margin: "0 auto" },
            onClick: handleOpen,
            icon: "/img/icon/icon-add.svg",
            label: t("friendlist.addFriend"),
            useCustomIcon: true,
          }}
        ></ButtonWithImage>
      </UserInformation>
    );
  }

  render() {
    const { webId } = this.state;
    return (
      <FriendListWrapper>
        <div>
          {this.getProfileCard(webId)}
          <Content>
            {this.getUserInformation()}
            {this.getFriendsList()}
          </Content>
        </div>
      </FriendListWrapper>
    );
  }
}
