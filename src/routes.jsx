import React, { Fragment } from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { FileExplorerContainer, FriendListComponent, Login, PageNotFound, Profile, Register, RegistrationSuccess, ShopComponent, VocabularyComponent, Welcome } from "./containers";
import { NotLoggedInLayout, PrivateLayout, PublicLayout } from "./layouts";


const privateRoutes = [
  {
    id: "welcome",
    path: "/welcome",
    component: Welcome,
  },
  {
    id: "profile",
    path: "/profile",
    component: Profile,
  },
  {
    id: "friendlist",
    path: "/friendlist",
    component: FriendListComponent,
  },
  {
    id: "fileExplorer",
    path: "/fileexplorer",
    component: FileExplorerContainer,
  },
  {
    id: "vocab",
    path: "/v1",
    component: VocabularyComponent,
  },
  {
    id: "shop",
    path: "/shop",
    component: ShopComponent,
  },
];

const Routes = () => (
  <Router>
    <Fragment>
      <Switch>
        <NotLoggedInLayout 
        
        component={Login} path="/login" exact />
        <NotLoggedInLayout component={Register} path="/register" exact />
        <NotLoggedInLayout
          component={RegistrationSuccess}
          path="/register/success"
          exact
        />
        <PublicLayout path="/404" component={PageNotFound} exact />
        <Redirect from="/" to="/welcome" exact />
        <PrivateLayout path="/" routes={privateRoutes} />
        <Redirect to="/404" />
      </Switch>
    </Fragment>
  </Router>
);

export default Routes;
