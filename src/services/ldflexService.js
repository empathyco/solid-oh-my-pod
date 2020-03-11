import data from "@solid/query-ldflex";
import auth from "solid-auth-client";
import Cache from "./Cache";

const VCARD = "http://www.w3.org/2006/vcard/ns#";
const FOAF = "http://xmlns.com/foaf/0.1/";
const RDF = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
const SCHEMA = "http://schema.org/";
const LDP = "http://www.w3.org/ns/ldp#";
const RDFN = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
const TERMS = "http://purl.org/dc/terms/";
const STATS = "http://www.w3.org/ns/posix/stat#";

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

export const getFriends = async webId => {
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

export const getFriendData = async webId => {
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

export const addFriend = async friendId => {
  let me = data[await getWebId()];
  let friend = data[friendId];
  await me.friends.add(friend);
  cache.add(friendId, await getFriendData(friendId));
};

export const removeFriend = async friendId => {
  let me = data[await getWebId()];
  console.log(me);
  let friend = data[friendId.concat("me")];
  console.log(friend);
  let friends = me["foaf:knows"];
  console.log(friends);
  await friends.delete(friend);
  cache.remove(friendId);
};



