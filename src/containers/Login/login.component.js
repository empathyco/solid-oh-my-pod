/* eslint-disable constructor-super */
import { FAQComponent } from "@components";
import React from "react";
import { LoginWrapper } from "./login.style";

const LoginComponent = () => {
  return (
    <LoginWrapper data-testid="login-wrapper">
      <FAQComponent isLogin></FAQComponent>
    </LoginWrapper>
  );
};

export default LoginComponent;
