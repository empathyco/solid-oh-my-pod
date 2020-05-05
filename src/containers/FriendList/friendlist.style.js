import styled from "styled-components";

export const FriendListWrapper = styled.section`
  width: 100%;

  background: #f4f4f4;
  div.iconaddfriend {
    position: fixed;
    left: 85%;
    bottom: 48%;
  }
`;

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

export const FriendList = styled.div`
  margin: 10px;
  font-family: Montserrat;
  .friends {
    display: grid;
    grid-gap: 1rem;
  }
  @media (min-width: 800px) {
    .friends {
      grid-template-columns: repeat(2, 1fr);
    }
  }
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
export const Friend = styled.div`
  border: none;
  display: grid;
  grid-template-columns: 30% 70%;
  align-items: center;
  justify-content: center;
  margin: 2.5em;
  width: auto;
  min-height: 25%;
  max-height: 30%;

  img {
    width: 8em;
    height: 8em;
    border-radius: 50%;
  }
`;

export const FriendInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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

  h2 {
    font-family: Montserrat, sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.13;
    letter-spacing: 1px;
    color: #2c4653;
    justify-self: center;
  }

  h3 {
    font-family: Montserrat, sans-serif;
    font-weight: normal;
    font-size: 12px;
    justify-self: center;
  }

  button {
  }
`;
