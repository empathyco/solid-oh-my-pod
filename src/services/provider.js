export default class Provider {
  /*
   *  Function to get providers. This is to mimic the future provider registry
   */
  static getIdentityProviders(){
    return [
      {
        id: 'inrupt',
        label: 'Inrupt',
        image: '/img/inrupt.svg',
        value: 'https://inrupt.net/auth',
        registerLink: 'https://inrupt.net/register',
        card: 'inrupt.net/profile/card#me',
        delete: 'https://inrupt.net/account/delete'
      },
      {
        id: 'solid-community',
        label: 'Solid Community',
        image: '/img/Solid.png',
        value: 'https://solid.community',
        registerLink: 'https://solid.community/register',
        card: 'solid.community/profile/card#me',
        delete: 'https://solid.community/account/delete'
      },
      {// TODO complete this
        label: "Solid Web Prototype",
        image: '/img/Solid.png',
        value: "https://solidweb.org",
        registerLink: "https://solidweb.org/register",
        description: "This is a prototype implementation of a Solid server",
      },
      {
        label: "Solid Authing Prototype",
        image: '/img/Solid.png',
        value: "https://solid.authing.cn",
        registerLink: "https://solid.authing.cn/register",
        description: "This is a prototype implementation of a Solid server",
    },
    ];
  }
}
