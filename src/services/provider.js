export default class Provider {
  /*
   *  Function to get providers. This is to mimic the future provider registry
   */
  static getIdentityProviders() {
    return [
      {
        id: "inrupt",
        custom: false,
        label: "Inrupt",
        image: "./img/inrupt.svg",
        value: "https://inrupt.net/auth",
        registerLink: "https://inrupt.net/register",
        card: "inrupt.net/profile/card#me",
        delete: "https://inrupt.net/account/delete",
      },
      {
        id: "solid-community",
        custom: false,
        label: "Solid Community",
        image: "./img/Solid.png",
        value: "https://solid.community",
        registerLink: "https://solid.community/register",
        card: "solid.community/profile/card#me",
        delete: "https://solid.community/account/delete",
      },
      {
        id: "solid-web-prototype",
        custom: false,
        label: "Solid Web Prototype",
        image: "/img/Solid.png",
        value: "https://solidweb.org",
        registerLink: "https://solidweb.org/register",
      },
      {
        id: "solid-authing-prototype",
        custom: false,
        label: "Solid Authing Prototype",
        image: "/img/Solid.png",
        value: "https://solid.authing.cn",
        registerLink: "https://solid.authing.cn/register",
      },
    ];
  }
}
