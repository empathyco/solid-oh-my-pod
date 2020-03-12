/**
 * Object mapping of known possible inboxes for the user
 */
export const NavigationItems = [
  {
    id: 'welcome',
    icon: '/img/icon/targetman.svg',
    label: 'navBar.welcome',
    to: '/welcome'
  },
  {
    id: 'profile',
    icon: '/img/icon/proman.svg',
    label: 'navBar.profile',
    to: '/profile'
  },
  {
    id: 'friendlist',
    icon: '/img/icon/friendsicon.svg',
    label: 'navBar.friends',
    to: '/friendlist'
  },
  {
    id: 'fileExplorer',
    icon: '/img/icon/fileman.svg',
    label: 'navBar.myfiles',
    to: '/fileexplorer'
  },
  {
    id: 'shop',
    icon: 'img/icon/things.svg',
    label: 'Shop',
    to: '/shop'
  }


];

export const ProfileOptions = [
  {
    label: 'navBar.profile',
    onClick: 'profileRedirect',
    icon: 'cog'
  },
  {
    label: 'navBar.logOut',
    onClick: 'logOut',
    icon: 'lock'
  }

];
