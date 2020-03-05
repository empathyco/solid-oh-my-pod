import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { withWebId } from "@inrupt/solid-react-components";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 100%;
`;

const NotLoggedInLayout = props => {
  const { component: Component, webId, ...rest } = props;

  const ComponentWrapper = styled(Component)`
    padding-bottom: 60px;
    height: 100%;
    padding-top: 60px;
  `;
  return !webId ? (
    <Route
      {...rest}
      component={matchProps => (
        <Container>
          <ComponentWrapper {...matchProps} />
        </Container>
      )}
    />
  ) : (
    <Redirect to="/welcome" />
  );
};

export default withTranslation()(withWebId(NotLoggedInLayout));
