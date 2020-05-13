export class ChatUser {
  webdId: string;
  name: string;
  photo: string | undefined;
  constructor(webId: string, name: string, photo: string) {
    this.webdId = webId;
    this.name = name;
    this.photo = photo;
  }
}
