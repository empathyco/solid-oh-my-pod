import React from 'react';
import AuthNavBar from './auth-nav-bar.component';


/**
 * AuthBar container
 * @type {{compare, $$typeof, type}}
 */
const AuthNavBarContainer = React.memo(({ location, webId, history }) => (
  <AuthNavBar {...{ location, webId, history }} />
));
export default AuthNavBarContainer;
