export class ChatUser {
  webdId: string;
  name: string;
  photo: string | undefined;
  constructor(webId: string, name: string, photo: string) {
    this.webdId = webId;
    this.name = name;
    this.photo = photo;
  }

  static mock() {
    let user = new ChatUser(
      "https://astrid.solid.community/profile/card#me",
      "Astrid Gamoneda" + Math.trunc(Math.random() * 20),
      "https://astrid.solid.community/profile/icons8-romance-64.png"
    );
    return user;
  }
}
