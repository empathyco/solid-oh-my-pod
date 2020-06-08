/* eslint-disable constructor-super */
import { FAQComponent } from "@components";
import React from "react";
import { useTranslation } from "react-i18next";
import { LoginWrapper } from "./login.style";

const LoginComponent = () => {
  const { t } = useTranslation();
  return (
    <LoginWrapper data-testid="login-wrapper">
      {/* <CenterContainer data-testid="title">
          <img className="podlogo" src="/img/pod_logo.svg" alt="Empathy" />

          <LoginPanel className="login-panel">


            <PanelBody className="panel-body">
            <ProviderLogin
                selectPlaceholder={t("login.selectPlaceholder")}
                inputPlaholder={t("login.inputPlaholder")}
                formButtonText={t("login.formButtonText")}
                btnTxtWebId={t("login.btnTxtWebId")}
                btnTxtProvider={t("login.btnTxtProvider")}
                className="provider-login-component"
                callbackUri={`${window.location.origin}/welcome`}
                errorsText={{
                  unknown: t("login.errors.unknown"),
                  webIdNotValid: t("login.errors.webIdNotValid"),
                  emptyProvider: t("login.errors.emptyProvider"),
                  emptyWebId: t("login.errors.emptyWebId")
                }}
                theme={{
                  buttonLogin: "ids-link",
                  inputLogin: "",
                  linkButton: ""
                }}
              />
              <MyLink to="/register">{t("login.signUp")}</MyLink>
            </PanelBody>
          </LoginPanel>
        </CenterContainer> */}
      <FAQComponent isLogin></FAQComponent>
    </LoginWrapper>
  );
};

export default LoginComponent;
