import { ChatUser } from "./chatUser";
export default class NotUserError extends Error {
  nonUsers: ChatUser[];
  constructor(users: ChatUser[]) {
    super("There are nonusers of OhMyPodChat");
    this.nonUsers = users;
  }
}
