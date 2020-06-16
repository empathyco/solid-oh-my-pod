import styled from "styled-components";
import { media } from "../../utils";

export const ProfileWrapper = styled.section`
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #f4f4f4;
  margin: 0;

  .marginprofile {
  }
  h2 {
    font-family: Montserrat, sans-serif;
    font-size: 50px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: normal;
    color: #243d48;
  }
  h3,
  h4 {
    font-family: Montserrat, sans-serif;
    font-size: 16px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: 3.73px;
    color: #243d48;
  }
  a {
    color: #53b9c9 !important;
  }
`;
export const ProfileContainer = styled.div`
  background-color: #f4f4f4;
  width: 100%;
  flex: 1 0 auto;
`;

export const Form = styled.form`
  padding: 20px 40px;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px 40px;
  ${media.tablet`
    grid-template-columns: 1fr 1fr;
  `}
`;

export const Button = styled.button`
  max-width: 120px;
  display: inline-block;

  &:first-child {
    margin-right: 10px;
  }
`;

export const FullGridSize = styled.div`
  grid-column: span 1;
  text-align: right;
  ${media.tablet`
    grid-column: span 2;
  `}
`;

export const WebId = styled.div`
  padding: 20px 40px 0px 40px;
  position: relative;
  &:after {
    background-color: #d8d8d8;
    display: block;
    content: "";
    height: 1px;
    width: 100%;
    margin: 25px 0 0 0;
  }
  a {
    display: inline-block;
    word-break: break-all;
    margin-left: 10px;
  }
`;

export const ShexForm = styled.div`
  border: none !important;
  label {
    clear: both;
  }

  & .shexForm {
    border: none;
    padding: 0 12px;
  }

  & .shexPanel {
<<<<<<< HEAD
    border: none;
    padding: 12px;
=======
     border:none !important;
      padding: 12px;
>>>>>>> search
    position: relative;
  }

  & .shexRoot {
    border: none !important;
    background: transparent;
    h4 {
      margin-top: 4em;
    }
  }

  & .deleteButton {
    margin: 0 4px 0 12px;
    position: relative;
    float: right;
    width: 100px;
    color: #fb4a3e;
    border-color: #fb4a3e;
    &:hover {
      background: rgba(251, 74, 62, 0.8);
      color: #fff;
    }
  }

  & .addButton {
    width: 210px;
    color: rgb(145, 194, 250);
    border-color: rgb(145, 194, 250);
    background: #fff;
    padding: 5px 30px;
    &:hover {
      background: rgba(145, 194, 250, 0.8);
      color: #fff;
    }
  }
  & .inputContainer {
    float: left;
    width: 75%;

    padding: 12px;
    input {
      background-color: #f4f4f4 !important;
      &:hover {
        background-color: #ffffff !important;
      }
    }
  }
`;

export const AutoSaveNotification = styled.section`
  margin-bottom: 0px !important;

  background-color: transparent !important;
  max-width: none !important;
  width: auto !important;
  color: #53b9c9 !important;
  .banner-wrap--warning {
    margin-top: 2em !important;
  }
`;

export const SectionProfile = styled.section`
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 1em 0;
  background-color: #f4f4f4;
`;

export const Submitdelete = styled.section`
  align-items: right;
  justify-content: right;
  padding: 1em;
  max-width: 60em !important;
  div {
    align-content: center;
    display: flex;
    flex-direction: column;
  }
`;

export const RemovePodBtn = styled.button`
  color: #fb4a3e;
  margin-bottom: 0px !important;
`;
