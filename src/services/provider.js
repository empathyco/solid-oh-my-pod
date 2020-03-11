type ProviderEntity = {
  label: String,
  image: String,
  value: String,
  registerLink: String,
  description: String
};

export default class Provider {
  /*
   *  Function to get providers. This is to mimic the future provider registry
   */
  static getIdentityProviders(): Array<ProviderEntity> {
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
      }
    ];
  }
}
