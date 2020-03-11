import React from "react";
import { ldflexService, Provider, rdfService } from "@services";
import {
  FriendList,
  Friend,
  FriendInfo,
  AwesomeIcon,
  FriendListWrapper
} from "./friendlist.style";
//import {   } from "/i18n";
import {  useTranslation } from 'react-i18next';

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";



export default class FriendListComponent extends React.Component {

  constructor() {


    super();

    this.state = {
      friends: [],
      user: "",
      friendid: "",
      platformValue: Provider.getIdentityProviders()[0].card,
      open: false
    };
    this.myChangeHandler = this.myChangeHandler.bind(this);
    this.mySubmitHandler = this.mySubmitHandler.bind(this);
    this.handleChangeSelector = this.handleChangeSelector.bind(this);
    this.handleSubmitProvider = this.handleSubmitProvider.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.addFriend = this.addFriend.bind(this);

  }
  async handleChangeSelector(event) {

    this.setState({ platformValue: event.target.value });
  }
  async handleSubmitProvider(event) {
    let t = useTranslation();

    alert(  t('friendlist.adding')+ this.state.platformValue);
    event.preventDefault();
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

    let provider = await this.state.platformValue;
    let name = (await "https://") + this.state.friendid + ".";
    console.log(this.state.friendid);
    let username = name.toString().concat(provider.toString());
    console.log(this.state.platformValue);
    console.log(provider.toString());
    console.log(username);
    if (/\s/.test(username)) {
      alert(   "Name should not contain spaces");
    } else {
      const exits = await ldflexService.validateURI(username);

      if (exits === "error") {
        alert(   "Name should not contain spaces");
      } else {
        // const friendsname = await rdfService.getAUserName(username);
        if (window.confirm(  "Adding friend named" + username)) {
          await ldflexService.addFriend(username);
          let friendData = await ldflexService.getFriendData(username);
          await this.setState({
            friends: [...this.state.friends, friendData]
          });
          // await this.forceUpdate();
        }
      }
    }
  }

  async addFriend(t) {
    let provider = await this.state.platformValue;
    let name = (await "https://") + this.state.friendid + ".";
    let username = name.toString().concat(provider.toString());
    if (/\s/.test(username)) {
      alert(  t('friendlist.nameerror'));
    } else {
      const exits = await ldflexService.validateURI(username);
      console.log(exits);

      if (exits === "Error") {
        console.log("error!!!!!!!!1");
        alert(  t('friendlist.urierror'));
      } else {
        console.log("adding confirming!!");
        if (window.confirm(  t('friendlist.adding')+ username)) {
          await ldflexService.addFriend(username);
          let friendData = await ldflexService.getFriendData(username);
          await this.setState({
            friends: [...this.state.friends, friendData]
          });
        }
      }
    }
    this.handleClose();
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

    if (
      window.confirm(
        t('friendlist.deleteq') + profile + " ?"
      )
    ) {
      let index = 0;
      console.log(this.state.friends);
      for (var i = 0; i < this.state.friends.length; i++) {
        console.log(this.state.friends[i].value);
        console.log(profile);
        if (this.state.friends[i].url === profile) {
          index = i;
          break;
        }
      }
      await ldflexService.removeFriend(profile);

      let newFriends = this.state.friends;

      newFriends.splice(index, 1);
      console.log(newFriends);
      await this.setState({
        friends: newFriends
      });
      // await this.forceUpdate();
    }
  }

  async componentDidMount() {
    const frs = await this.getFriends();
    const us = await ldflexService.getWebId();
    this.setState({ friends: frs, user: us });
  }

  /* jshint ignore:start */
  render() {
    const { t } = this.props;

    const addFriendDialog = (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-display-media"
        // fullWidth={true}
        // maxWidth={"lg"}
      >
        <DialogTitle id="form-dialog-display-media">  {t('friendlist.adding')}
        </DialogTitle>
        <DialogContent>
          <h2> {t('friendlist.selectp')}</h2>
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
          <h2>{t('friendlist.insertid')}</h2>
          <input type="text" onChange={this.myChangeHandler} />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={async () => await this.addFriend(t)}
            color="primary"
          >
            {t('friendlist.adding')}
          </Button>
          <Button onClick={this.handleClose} color="primary" type="button">
            {t('friendlist.close')}
          </Button>
        </DialogActions>
      </Dialog>
    );



    const friendsList = (
      <FriendList>
        {this.state.friends.map(friend => {
          return (
            <Friend>
              <img src={friend.image} />
              <FriendInfo>
                <a href={friend.url}>
                  <h2>{friend.fn}</h2>
                </a>
                <a href={friend.url}>
                  <h3>{friend.url.split("//")[1]}</h3>
                </a>
                <button
                  onClick={async () => await this.deletefriend(friend.url, t)}
                >
                  {t('friendlist.deletefriend')}
                </button>
              </FriendInfo>
            </Friend>
          );
        })}
        {addFriendDialog}
      </FriendList>
    );
    return (
      <FriendListWrapper>
      <div>
        {friendsList}
         <AwesomeIcon icon={faPlusCircle} onClick={this.handleOpen}></AwesomeIcon>
      </div>
      </FriendListWrapper>
    );
  }
  /* jshint ignore:end */
}
