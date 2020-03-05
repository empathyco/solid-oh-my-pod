import styled from "styled-components";
import { Panel } from "@util-components";
import { CenterContainer } from "@util-components";

export const RegisterWrapper = styled.section`
  h1 {
    font-family: "Raleway", sans-serif;
    font-weight: bold;
    font-size: 55px;
    color: #083575;
  }
`;

export const MyCenterContainer = styled(CenterContainer)`
  margin: 0;
  height: 100%;
`;

export const RegisterPanel = styled(Panel)`
  justify-content: space-between;
  background: none;
  border: none;
  box-shadow: none;
  height: 60%;
  align-self: center;
`;

export const PanelHeader = styled.div`
  position: relative;

  h2 {
    position: relative;
    padding: 0;
    color: #083575;
    font-family: Raleway;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.75px;
    line-height: 24px;
    text-align: center;
    margin: 0;
  }
`;

export const PanelBody = styled.div`
  height: 100% !important;
  animation: fadeIn 0.2s ease-in;

  a {
    font-family: "Raleway", sans-serif;
    font-weight: bold;
    font-size: 34px;
    display: block;
    color: #449df5;
    letter-spacing: 0.75px;
    line-height: 14px;
    text-align: center;
    text-decoration: none;
    margin: 50px 0;

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
  }

  .a-with-spacing {
    margin: 24px 0;
  }

  ul {
    padding: 0;
    margin: 0;
  }
`;

export const Actions = styled.div`
  height: 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;

  button {
    height: 32px;
    width: 150px;
    border-radius: 4px;
    font-family: Raleway;
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 0.89px;
    line-height: 11px;
    text-align: center;
    text-transform: uppercase;
    border: solid 2px #449df5;
    box-sizing: border-box;
  }

  .btn-solid {
    background: none;
    font-family: "Raleway", sans-serif;
    font-weight: bold;
    font-size: 25px;
    color: #083575;
    border: none;
  }

  .btn-outlined {
    background-color: #ffffff;
    color: #449df5;
    filter: opacity(40%);
  }
`;
