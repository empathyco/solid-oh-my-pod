import styled from "styled-components";
import media from "../../utils";

export const HeaderFriend = styled.div`
  transform: translateY(40px);
  z-index: 100;
  background-color: transparent;

  display: flex !important;
  position: relative;
  align-items: center;
  justify-content: center;

  .imagefriend {
    height: 8em;
    width: 8em;
    min-height: 25%;
    max-height: 30%;
    border-radius: 600px;
    overflow: hidden;
  }
  padding: 0;
`;

export const FriendCardTop = styled.div`
  background-color: #fff;
  margin: 0px;
  border: none;

  //Overriding the style guide card flexbox settings
  max-width: 100% !important;
  flex-direction: row !important;
  padding: 0 !important; //temporary fix to a style guide bug
  top: -20px;

  font-family: Montserrat;
  font-size: 50px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  img {
    vertical-align: bottom !important;
    align: left;
    height: 8em;
    width: 8em;
  }
  h3 {
    font-family: Montserrat, sans-serif;
    font-size: 50px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: normal;
    margin-left: 10px;
  }
`;

export const FriendListWrapper = styled.section`
  background: #f4f4f4;
  width: 100%;
`;
export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  margin-top: 40px;
  margin-left: 8em;
  @media (max-width: 900px) {
    flex-wrap: wrap;
    margin-left: 0px;
    justify-content: center;
  }
`;
export const FriendList = styled.div`
  font-family: Montserrat;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-end;
`;
export const Friend = styled.div`
  border: none;
  display: grid;
  grid-template-columns: 86px auto;
  width: 500px;
  height: 70px;
  text-align: left;
  align-items: center;
  margin-bottom: 30px;
  h2 {
    justify-self: left;
    margin-top: 0;
    margin-bottom: 5px;
    font-weight: 700;
    text-transform: uppercase;
  }

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
`;

export const FormattedFiendNameWrapper = styled.div`
  h2 {
    font-family: Montserrat, sans-serif;
    font-size: 16px;
    font-weight: bolder;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.13;
    letter-spacing: 1px;
    color: #2c4653;
    justify-self: center;
    display: inline;
  }

  h3 {
    font-family: Montserrat, sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.13;
    letter-spacing: 1px;
    color: #2c4653;
    justify-self: center;
    display: inline;
    text-transform: uppercase;
  }
`;

export const FriendInfo = styled.div`
  align-items: center;

  a {
    text-decoration: none;
    align-items: center;
    justify-content: space-evenly;

    font-family: Montserrat;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #929fa5;
  }
  p {
    font-size: 12px;
    margin: 5px auto;
    color: #41596a;
  }

  button {
    margin-left: 30px;
    color: #fb4a3e;
  }
`;

export const FriendCountDisplay = styled.div`
  h2 {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bolder;
    letter-spacing: 4px;
    margin: 0px;
    text-align: center;
  }
  p {
    font-size: 47px;
    color: #243d48;
    text-align: center;
    margin: 0;
    margin-bottom: 20px;
  }
`;
