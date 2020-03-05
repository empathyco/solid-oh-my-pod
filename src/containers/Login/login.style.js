import styled from "styled-components";
import { Link } from "react-router-dom";
import { ImageBackground, InfoImageBackground } from "@util-components";
import { ProviderLogin } from "@inrupt/solid-react-components";

export const LoginWrapper = styled(ImageBackground)`
  overflow: hidden;
`;

export const InfoWrapper = styled(InfoImageBackground)`
  width: 100%;
  height: 100%;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0px;
  }

  display: grid;
  grid-template-rows: 10% 100% 100% 100%;
`;

export const InfoHeader = styled.div`
  margin: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 40% 60%;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: white;
  font-size: 36px;
`;

export const InfoHeaderText = styled.p`
  background: linear-gradient(to bottom right, #7c4dff, #18a9e6, #01c9ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  align-self: center;
  margin: 0;
  font-weight: bold;
`;

export const InfoTextWrapper = styled.div`
  display: grid;
  grid-template-rows: 30% 70%;
`;

export const InfoTitle = styled.h2`
  font-size: 55px;
  color: #083575;
  justify-self: center;
  align-self: flex-end;
  font-family: "Raleway", sans-serif;
`;

export const InfoTextImageWrapper = styled.div`
  width: 50%;
  justify-self: center;
  display: grid;
  grid-template-columns: 70% 30%;
`;

export const InfoText = styled.p`
  font-size: 34px;
  align-self: top;
  justify-self: right;
  text-align: left;
  color: #083575;
  font-family: "Raleway", sans-serif;
`;

export const InfoImage = styled.img`
  image-size: 30%;
  align-self: top;
  justify-self: left;
`;

export const AllLoginWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 100% 100%;
  ::-webkit-scrollbar {
    width: 12px;
  }
`;

export const LoginPanel = styled.div`
  background: none;
  border: none;
  box-shadow: none;
  display: grid;
  grid-template-rows: 20% 20% 60%;
  height: 60%;
  align-self: center;
`;

export const LoginTitle = styled.h1`
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  font-size: 55px;
  color: #083575;
`;

export const LoginSubtitle = styled.h2`
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  font-size: 30px;
  color: #083575;
`;

export const MyLink = styled(Link)`
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  font-size: 34px;
  &:link {
    text-decoration: none;
    color: #083575;
  }
  &:visited {
    text-decoration: none;
    color: #083575;
  }
  &:hover {
    text-decoration: none;
    color: #083575;
  }
  &:active {
    text-decoration: none;
    color: #083575;
  }
`;

export const PanelBody = styled.div`
  display: grid;
  flex-direction: column;

  .provider-login-component {
    div[role="option"] {
      text-align: left !important;
      padding-left: 20px;
    }
  }
`;
