import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ldflexService, Provider } from "@services";
import { ToasterService } from "components";
import { DeleteButton, TextButton } from "components/Utils";
import React, { Fragment } from "react";
import {
  ContainerHeader,
  LoaderService,
  UserInformation,
} from "../../components";
import ButtonWithImage from "../../components/Utils/buttons/ButtonWithImage/buttonWithImage";
import {
  Content,
  FormattedFiendNameWrapper,
  Friend,
  FriendCountDisplay,
  FriendInfo,
  FriendList,
  FriendListWrapper,
} from "./friendlist.style";

const defaultProfilePhoto = "/img/icon/empty-profile.svg";
export default class FriendListComponent extends React.Component {
  constructor() {
    super();
    this.defaultImage = "/img/icon/empty-profile.svg";

    this.state = {
      friends: [],
      webId: "",
      friendid: "",
      platformValue: Provider.getIdentityProviders()[0].card,
      open: false,
      pimage: this.defaultImage,
    };
    this.myChangeHandler = this.myChangeHandler.bind(this);
    this.mySubmitHandler = this.mySubmitHandler.bind(this);
    this.handleChangeSelector = this.handleChangeSelector.bind(this);

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }

  async handleChangeSelector(event) {
    this.setState({ platformValue: event.target.value });
  }

  async handleOpen() {
    this.setState({ open: true });
  }

  async handleClose() {
    this.setState({ open: false });
  }

  async mySubmitHandler(event) {
    event.target.reset();
    event.preventDefault();
  }
  async validateURI(url) {
    let num;
    await fetch(url).then((res) => {

      num = res.status;
    });
    return num;
  }

  async addFriend(t) {
    let provider = await this.state.platformValue;
    let name = (await "https://") + this.state.friendid + ".";
    let username = name.toString().concat(provider.toString());
    if (/\s/.test(username)) {
      ToasterService.addPopUpToast({
        buttonLabel: "OKAY :(",
        onButtonClick: () => {},
        subtitle: t("friendlist.nameerror.description"),
        title: t("friendlist.nameerror.title"),
        type: "error",
      });
    } else {
      let exits = await this.validateURI(username);


      if (exits.toString() !== "200") {
        ToasterService.addPopUpToast({
          buttonLabel: t("friendlist.notfounderror.button"),
          onButtonClick: () => {},
          subtitle: t("friendlist.notfounderror.description"),
          title: t("friendlist.notfounderror.title"),
          type: "error",
        });
      } else {
        if (window.confirm(t("friendlist.adding") + username)) {
          await ldflexService.addFriend(username);
          console.log("friend added succesfully");

          let friendData = await ldflexService.getFriendData(username);
          await this.setState({
            friends: [...this.state.friends, friendData],
          });
          this.setState({ friendid: "" });
          this.handleClose();
        }
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
    if (window.confirm(t("friendlist.deleteq") + profile + " ?")) {
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
      // await this.forceUpdate();
    }
  }

  async componentDidMount() {
    LoaderService.nowLoading();
    const friends = await this.getFriends();
    const webId = await ldflexService.getWebId();
    const accountName = await ldflexService.getProfileName();

    this.setState({ friends: friends, webId: webId, title: accountName });
    LoaderService.completeLoad();
  }

  getAddFriendDialog() {
    const { t } = this.props;
    return (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-display-media"
        // fullWidth={true}
        // maxWidth={"lg"}
      >
        <DialogTitle id="form-dialog-display-media">
          {" "}
          {t("friendlist.adding")}
        </DialogTitle>
        <DialogContent>
          <h2> {t("friendlist.selectp")}</h2>
          <select
            value={this.state.platformValue}
            onChange={this.handleChangeSelector}
          >
            {Provider.getIdentityProviders().map((e, key) => {
              return (
                <option key={key} value={e.card}>
                  {e.label}
                </option>
              );
            })}
          </select>
          <h2>{t("friendlist.insertid")}</h2>
          <input type="text" onChange={this.myChangeHandler} />
        </DialogContent>
        <DialogActions>
          <TextButton
            disabled={this.state.friendid.trim() === ""}
            label={t("friendlist.adding")}
            action={async () => await this.addFriend(t)}
          ></TextButton>

          <TextButton
            label={t("friendlist.close")}
            action={this.handleClose}
          ></TextButton>
        </DialogActions>
      </Dialog>
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
    const { title } = this.state;
    const { t } = this.props;
    const handleOpen = this.handleOpen;
    return (
      <UserInformation {...{ title }}>
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
