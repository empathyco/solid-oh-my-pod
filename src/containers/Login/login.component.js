/* eslint-disable constructor-super */
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ProviderLogin, ProviderSelect } from "@components/Utils";
import {
  LoginWrapper,
  LoginPanel,
  PanelBody,
  LoginTitle,
  LoginSubtitle,
  InfoWrapper,
  AllLoginWrapper,
  InfoHeader,
  InfoHeaderText,
  InfoTitle,
  InfoTextWrapper,
  InfoTextImageWrapper,
  InfoText,
  InfoImage,
  MyLink
} from "./login.style";
import { CenterContainer } from "@util-components";

const LoginComponent = () => {
  const { t } = useTranslation();
  return (
    <AllLoginWrapper>
      <LoginWrapper data-testid="login-wrapper">
        <CenterContainer>
          <LoginPanel className="login-panel">
            <LoginTitle data-testid="title">empathy.co</LoginTitle>
            <LoginSubtitle data-testid="subtitle">POD Management</LoginSubtitle>
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
              <MyLink to="/register">Sign up</MyLink>
            </PanelBody>
          </LoginPanel>
        </CenterContainer>
      </LoginWrapper>
      <InfoWrapper>
        <InfoHeader>
          <InfoHeaderText>empathy.co</InfoHeaderText>
          <InfoHeaderText>POD Management</InfoHeaderText>
        </InfoHeader>
        <InfoTextWrapper>
          <InfoTitle>The privacy revolution has arrived!</InfoTitle>
          <InfoTextImageWrapper>
            <InfoText>
              Change the way Web Applications work today, with true personal
              data control and improved privacy for all your daily needs.
            </InfoText>
            <InfoImage src="img\icon\login1.png"></InfoImage>
          </InfoTextImageWrapper>
        </InfoTextWrapper>
        <InfoTextWrapper>
          <InfoTitle>Decentralized data for everyone</InfoTitle>
          <InfoTextImageWrapper>
            <InfoText>
              Get full control of your data, know at any moment how and when
              it’s used and store everything safely.{" "}
              <b>Share only what you want with whom you want.</b>
            </InfoText>
            <InfoImage src="img\icon\login2.png"></InfoImage>
          </InfoTextImageWrapper>
        </InfoTextWrapper>
        <InfoTextWrapper>
          <InfoTitle>Empower your personal data</InfoTitle>
          <InfoTextImageWrapper>
            <InfoText>
              Solid empowers users and organizations to separate their data from
              the applications that use it. It allows people to look at the same
              data with different apps at the same time.{" "}
              <b>
                It opens brand new avenues for creativity, problem-solving and
                commerce.
              </b>
            </InfoText>
            <InfoImage src="img\icon\login3.png"></InfoImage>
          </InfoTextImageWrapper>
        </InfoTextWrapper>
      </InfoWrapper>
    </AllLoginWrapper>
  );
};

export default LoginComponent;
