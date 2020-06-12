/* eslint-disable constructor-super */
import { FAQComponent } from "@components";
import React from "react";
import { useTranslation } from "react-i18next";
import { LoginWrapper } from "./login.style";

const LoginComponent = () => {
  const { t } = useTranslation();
  return (
    <LoginWrapper data-testid="login-wrapper">
      <FAQComponent isLogin></FAQComponent>
    </LoginWrapper>
  );
};

export default LoginComponent;
