import data from "@solid/query-ldflex";
import auth from "solid-auth-client";
import Cache from "./Cache";
import { namedNode } from "@rdfjs/data-model";

const cache = new Cache();

const getSession = async () => {
  let session = await auth.currentSession(localStorage);
  return session;
};

export const getWebId = async () => {
  let session = await getSession();
  let webId = session.webId;
  return webId;
};

export const getProfileImage = async () => {
  let session = await getSession();
  let webId = session.webId;
  let me = await data[webId];
  let pic = `${await me["vcard:hasPhoto"]}`;
  let img = `${pic}`;
  return img;
};

export const getFriends = async (webId) => {
  const me = data[webId];
  let returnFriends = [];
  for await (const name of me.friends) {
    if (cache.contains(`${name}`)) {
      returnFriends.push(cache.get(`${name}`));
    } else {
      returnFriends.push(cache.add(`${name}`, await getFriendData(name)));
    }
  }
  return returnFriends;
};

export const getProfileData = async () => {
  // TODO this could be refactor to do not have to await for each of the individual promises
  const webId = (await getSession()).webId;
  let userData = {};
  let me = data[webId];
  userData.fn = `${await me.vcard_fn}`; // Fullname
  userData.url = `${await me["solid:account"]}`.concat("profile/card#");
  userData.image = `${await me["vcard:hasPhoto"]}`;
  userData.emails = [];
  userData.phones = [];
  for await (const email of me["vcard:hasEmail"]) {
    let mail = data[email];
    let value = await mail["vcard:value"];
    value = `${value}`;
    if (value !== undefined) {
      userData.emails.push(value.split(":")[1]);
    }
  }
  for await (const phone of me["vcard:hasTelephone"]) {
    let pho = data[phone];
    let value = await pho["vcard:value"];
    value = `${value}`;
    if (value !== undefined) {
      userData.phones.push(value.split(":")[1]);
    }
  }
  userData.company = `${await me["vcard:organization-name"]}`;
  userData.role = `${await me["vcard:role"]}`;
  return userData;
};

export const updateProfileData = async (userData) => {
  const webId = (await getSession()).webId;
  let me = await data[webId];
  await me.vcard_fn.set(userData.fn);
  let emailIndex = 0;
  for await (const email of me["vcard:hasEmail"]) {
    console.log("guardar mail " + emailIndex);
    let mail = data[email];
    await mail["vcard:value"].set(namedNode(userData.emails[emailIndex]));
    emailIndex++;
  }
  // let phoneIndex = 0;
  // for await (const phone of me["vcard:hasTelephone"]) {
  //   console.log("guardar phone " + phoneIndex);
  //   let pho = data[phone];
  //   await pho["vcard:value"].set(userData.phones[phoneIndex]);
  //   phoneIndex++;
  // }
  console.log("guardar org");
  await me["vcard:organization-name"].set(userData.organization);
  console.log("guardar role");
  await me["vcard:role"].set(userData.role);
};

export const getFriendData = async (webId) => {
  let friendData = {};
  let friend = data[webId];
  friendData.fn = `${await friend.vcard_fn}`;
  friendData.url = `${await friend["solid:account"]}`.concat("profile/card#");
  friendData.image = `${await friend["vcard:hasPhoto"]}`;
  for await (const email of friend["vcard:hasEmail"]) {
    let mail = data[email];
    let value = await mail["vcard:value"];
    value = `${value}`;
    if (value !== undefined) {
      friendData.email = value.split(":")[1];
      break;
    }
  }
  for await (const phone of friend["vcard:hasTelephone"]) {
    let pho = data[phone];
    let value = await pho["vcard:value"];
    value = `${value}`;
    if (value !== undefined) {
      friendData.phone = value.split(":")[1];
      break;
    }
  }
  friendData.company = `${await friend["vcard:organization-name"]}`;
  friendData.role = `${await friend["vcard:role"]}`;
  return friendData;
};

export const addFriend = async (friendId) => {
  let me = data[await getWebId()];
  let friend = data[friendId];
  await me.friends.add(friend);
  cache.add(friendId, await getFriendData(friendId));
};

export const removeFriend = async (friendId) => {
  let me = data[await getWebId()];
  console.log(me);
  let friend = data[friendId.concat("me")];
  console.log(friend);
  let friends = me["foaf:knows"];
  console.log(friends);
  await friends.delete(friend);
  cache.remove(friendId);
};
