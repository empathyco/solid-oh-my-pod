import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FriendListWrapper = styled.section`
   
  background: rgb(121,81,209);
  background: linear-gradient(30deg, rgba(121,81,209,0.2) 0%, rgba(183,255,253,0.2) 100%);
  background-repeat: repeat;
  padding: 60px 0;
`;
export const AwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 70px;
  position: absolute;
  right: 5%;
  bottom: 10%;
`;

export const FriendList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 10px;
`;

export const Friend = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 30% 70%;
  align-items: center;
  justify-content: center;
  margin: 10px;
  width: auto;
  min-height: 25%;
  max-height: 30%;

  img {
    height: 100%;
    width: auto;
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
  }

  h2 {
    font-family: "Raleway", sans-serif;
    font-weight: bold;
    font-size: 24px;
    justify-self: center;
  }

  h3 {
    font-family: "Raleway", sans-serif;
    font-weight: normal;
    font-size: 12px;
    justify-self: center;
  }

  button {
  }
`;
