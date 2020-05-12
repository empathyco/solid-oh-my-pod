export class ChatUser {
    webdId: String
    name: String
    photo: String
    constructor(webId: String, name: String, photo: String) {
        this.webdId = webId;
        this.name = name;
        this.photo = photo
    }
}