import auth from "solid-auth-client";
import * as rdf from "rdflib";

//Declaration of namespaces
const VCARD = rdf.Namespace("http://www.w3.org/2006/vcard/ns#");
const FOAF = rdf.Namespace("http://xmlns.com/foaf/0.1/");
const RDF = rdf.Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#");
const SCHEMA = rdf.Namespace("http://schema.org/");
const LDP = rdf.Namespace("http://www.w3.org/ns/ldp#");
const RDFN = rdf.Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#");
const TERMS = rdf.Namespace("http://purl.org/dc/terms/");
const STATS = rdf.Namespace("http://www.w3.org/ns/posix/stat#");

//declaration of service constants
const fetcherOptions = {};

export const getSession = async () => {
  let session = await auth.currentSession(localStorage);
  return session;
};

//declaration of service variables
let session = getSession();
let updateManager = rdf.UpdateManager;
let fetcher = rdf.Fetcher;
let store = rdf.graph();

fetcher = new rdf.Fetcher(store, fetcherOptions);
updateManager = new rdf.UpdateManager(store);

/**
 * Gets a node that matches the specified pattern using the VCARD onthology
 *
 * any() can take a subject and a predicate to find Any one person identified by the webId
 * that matches against the node/predicated
 *
 * @param {string} node VCARD predicate to apply to the rdf.any()
 * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
 * @return {string} The value of the fetched node or an emtpty string
 * @see https://github.com/solid/solid-tutorial-rdflib.js
 */
export const getValueFromVcard = (node, webId) => {
  return getValueFromNamespace(node, VCARD, webId);
};

/**
 * Gets a node that matches the specified pattern using the FOAF onthology
 * @param {string} node FOAF predicate to apply to the rdf.any()
 * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
 * @return {string} The value of the fetched node or an emtpty string
 */
export const getValueFromFoaf = (node, webId) => {
  return getValueFromNamespace(node, FOAF, webId);
};

/**
 * Gets a node that matches the specified pattern using the LDP onthology
 * @param {string} node LDP predicate to apply to the rdf.any()
 * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
 * @return {string} The value of the fetched node or an emtpty string
 */
export const getValueFromLdp = (node, webId) => {
  return getValueFromNamespace(node, SCHEMA, webId);
};

/**
 * Gets a node that matches the specified pattern using the Schema onthology
 * @param {string} node Schema predicate to apply to the rdf.any()
 * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
 * @return {string} The value of the fetched node or an emtpty string
 */
export const getValueFromSchema = (node, webId) => {
  return getValueFromNamespace(node, SCHEMA, webId);
};

export const getAddress = () => {
  const linkedUri = getValueFromVcard("hasAddress");

  if (linkedUri) {
    return {
      locality: getValueFromVcard("locality", linkedUri),
      country_name: getValueFromVcard("country-name", linkedUri),
      region: getValueFromVcard("region", linkedUri),
      street: getValueFromVcard("street-address", linkedUri)
    };
  }

  return {};
};

// Function to get email. This returns only the first email, which is temporary
export const getEmail = () => {
  const linkedUri = getValueFromVcard("hasEmail");

  if (linkedUri) {
    return getValueFromVcard("value", linkedUri).split("mailto:")[1];
  }

  return "";
};

// Function to get phone number. This returns only the first phone number, which is temporary. It also ignores the type.
export const getPhone = () => {
  const linkedUri = getValueFromVcard("hasTelephone");

  if (linkedUri) {
    return getValueFromVcard("value", linkedUri).split("tel:+")[1];
  }
};

export const getProfile = async () => {
  if (!session) {
    await getSession();
  }
  console.log("Wait for it...");
  if (session === null) {
    console.log("NULL SESSION!!!");
  }

  try {
    await fetcher.load(session.webId);

     return {
      fn: await getProfileField("fn"),
      company: await getProfileField("organization-name"),
      phone: getPhone(),
      role: await getProfileField("role"),
      image: await getProfileField("hasPhoto"),
      address: getAddress(),
      email: getEmail()
    };
  } catch (error) {
    console.log(`Error fetching data: ${error}`);
  }
};

/**
 * Gets any resource that matches the node, using the provided Namespace
 * @param {string} node The name of the predicate to be applied using the provided Namespace
 * @param {rdf.namespace} namespace The RDF Namespace
 * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
 */
export const getValueFromNamespace = (node, namespace, webId) => {
  const st = store.any(rdf.sym(webId || session.webId), namespace(node));
  if (st) {
    return store.value;
  }
  return "";
};

// * * * * * * * * * * * * * * * * * * * * * //
// Our methods go down here :D
//
//  |   |   |   |   |   |   |
//  v   v   v   v   v   v   v

export const getProfileField = async field => {
  return await getField(session.webId, field, VCARD);
};

/**
 * This method is used for retrieving the value of a field as an string.
 * @param webId WebId of the resource from where the field is going to be retrieved.
 * @param field Field to retrieve from the resource.
 * @param namespace Namespace to which the field belongs.
 */
export const getField = async (webId, field, namespace) => {
  try {
    let id = await store.sym(webId);
    await fetcher.load(id.doc(), {
      force: true,
      clearPreviousData: true
    });
    let element = store.any(id, namespace(field));
    if (element !== undefined) {
      return element.value;
    } else {
      return element;
    }
  } catch (err) {
    console.log(`Error while fetching data ${err}`);
  }
};

/**
 * This method is used for retrieving data as an array.
 * @param webId WebId from  which the data is going to be retrieved.
 * @param field Field that is going to be retrieved from the resource.
 * @param namespace Name space to which the field belongs.
 */
export const getFieldArray = async (webId, field, namespace) => {
try {
  const id = await store.sym(webId);
  await fetcher.load(id.doc(), {
    force: true,
    clearPreviousData: true
  });
  return store.each(id, namespace(field));
}
catch(error)
  {
    console.log(`Error fetching data: ${error}`);
  }
};

export const getFieldArrayNoerror = async (webId, field, namespace) => {

  const id = await store.sym(webId);
  await fetcher.load(id.doc(), {
    force: true,
    clearPreviousData: true
  });
  return store.each(id, namespace(field));

};

export const getFriendData = async webId => {
  try {
   // console.log("Profile loaded: " + (await getField(webId, "fn", VCARD)));
    return {
      fn: await getField(webId, "fn", VCARD),
      company: await getField(webId, "organization-name", VCARD),
      phone: await getFriendPhone(webId),
      role: await getField(webId, "role", VCARD),
      image: await getField(webId, "hasPhoto", VCARD),
      address: await getFriendAddress(webId),
      email: await getFriendEmail(webId)
    };
  } catch (error) {
    return 'error'
    console.log(`Error fetching getFriendData: ${error}`);
  }
};



export const getChatData = async chatUrl => {
  try {
   // console.log("Chat loaded: " + (await getField(chatUrl, "name", SCHEMA)));
    return {
      id: await getField(chatUrl, "identifier", SCHEMA),
      name: await getField(chatUrl, "name", SCHEMA),
      administrators: await getFieldArray(chatUrl, "author", SCHEMA),
      users: await getFieldArray(chatUrl, "contributor", SCHEMA),
      picture: await getField(chatUrl, "image", SCHEMA)
    };
  } catch (error) {
    console.log(`Error fetching data : ${error}`);
  }
};

export const getMessageData = async messageUrl => {
  try {
    const identifier = await getField(messageUrl, "identifier", SCHEMA);
    console.log(`Message loaded: ${identifier}`);
    return {
      id: identifier.split("/")[2],
      chatId: identifier.split("/")[0],
      bundleId: identifier.split("/")[1],
      message: await getField(messageUrl, "text", SCHEMA),
      sender: await getField(messageUrl, "sender", SCHEMA),
      date: await getField(messageUrl, "dateSent", SCHEMA)
    };
  } catch (error) {
    console.log(`Error fetching data: ${error}`);
  }
};

export const requestIsCha = async webId => {
  try {
    const file = await getFieldArray(webId, "type", RDF);
    return file.includes(SCHEMA("Conversation"));
  } catch (err) {
    console.log(`Error while fetching data ${err}`);
  }
};

// Function to get email. This returns only the first email, which is temporary
export const getFriendEmail = async webId => {
  const linkedUri = await getFieldArray(webId, "hasEmail", VCARD);
  for(var i = 0; i< linkedUri.length; i++) {
    const mail = await getField(linkedUri[i], "value", VCARD);
    if (mail !== undefined) {
      return mail.split("mailto:")[1];
    }
  }

  return "";
};

// Function to get phone number. This returns only the first phone number, which is temporary. It also ignores the type.
export const getFriendPhone = async webId => {
  const linkedUri = await getField(webId, "hasTelephone", VCARD);
  //console.log(linkedUri);
  if (linkedUri) {
    const mail = await getField(linkedUri, "value", VCARD);
    console.log(mail);
    const phone = mail.split("tel:")[1];
    return phone;
  }

  return "";
};

export const getFriendAddress = async webId => {
  const linkedUri = await getField(webId, "hasAddress", VCARD);
  //console.log(linkedUri);
  if (linkedUri) {
    return {
      locality: await getField(linkedUri, "locality", VCARD),
      country_name: await getField(linkedUri, "country-name", VCARD),
      region: await getField(linkedUri, "region", VCARD),
      street: await getField(linkedUri, "street-address", VCARD)
    };
  }

  return {};
};

/**
 * This method is used for adding a new friend from your solid profile
 * @param webId WebId of the friend to add.
 */
export const addFriend = async webId => {
 // console.log(webId);
  let myId = await getWebId();
  const me = rdf.sym(myId);
  const friend = rdf.sym(webId);

  const toBeInserted = rdf.st(me, FOAF("knows"), friend, me.doc());
  updateManager.update([], toBeInserted, (response, success, message) => {
    if (success) {
      console.log("Friend added succesfully");
    } else {
      console.log("Something went wrong");
    }
  });
};

/**
 * This method is used to remove a friend from your solid profile.
 * @param webId webId of the friend to remove
 */
export const removeFriend = async webId => {
  let myId = await getWebId();
  const me = rdf.sym(myId);
  const friend = rdf.sym(webId);
  const toBeInserted = rdf.st(me, FOAF("knows"), friend, me.doc());
  updateManager.update(toBeInserted, [], (response, success, message) => {
    if (success) {
      console.log("Friend removed succesfully");
    } else {
      console.log("Something went wrong");
    }
  });
};

export const getContacts = async () => {
  let webId = await getWebId();
  let contacts;
  contacts = await getFieldArray(webId, "knows", FOAF);


  let friends = [];
  for(var i = 0; i<contacts.length;i++){
     let friendData = await getFriendData(contacts[i].value);
     try {
       friendData.url = contacts[i].value;
     }
     catch (error) {
       console.log(`Error fetching data: ${error}`);
     }
     friends.push(friendData);
  }
  return friends;
};

export const getWebId = async () => {
  let session = await getSession();
  let webId = session.webId;
  return webId;
};

export const getUserName = async () => {
  let webId = await getWebId();
  return getField(webId, "fn", VCARD);
};
export const getAUserName = async webId => {
  let myId = await getWebId();
   const friend = rdf.sym(webId);
  return getField(friend, "fn", VCARD);
};

export const validateURI = async webId => {
  try{
    return {
    Person: await getFieldArrayNoerror(webId, "a", FOAF),

  };
}catch (error) {
  return 'error'
  console.log(`Error fetching data validating uri: ${error}`);
}
};
export const getProfilePicture = async () => {
  let webId = await getWebId();
  return getField(webId, "hasPhoto", VCARD);
};

