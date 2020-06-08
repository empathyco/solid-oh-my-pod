import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-testing-library";
import LoginComponent from "../login.component";

describe("Login", () => {
  const { container, getByTestId } = render(
    <Router>
      <LoginComponent t={(key) => key} />
    </Router>
  );
  test("mock", () => {});

  // test('renders without crashing', () => {
  //   expect(container).toBeTruthy();
  // });

  // test('renders with styled components', () => {
  //   expect(document.querySelector('.login-panel')).toBeTruthy();
  //   expect(document.querySelector('.panel-body')).toBeTruthy();
  // });
  // test('renders title properly', () => {
  //   expect(getByTestId('title')).toBeTruthy();
  // });

  // test('renders ProviderLogin', () => {
  //   const providerLogin = document.querySelector('.solid-provider-login-component');
  //   expect(providerLogin).toBeTruthy();
  // });
});
