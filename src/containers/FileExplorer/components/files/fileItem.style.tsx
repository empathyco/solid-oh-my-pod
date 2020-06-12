import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const FileMenuTrigger = styled.div`
  width: 300px;
  height: 60px;
  display: grid;
  grid-template-columns: 55px auto;
  font-family: "Lato", sans-serif;
  margin-bottom: 35px;
  &:hover {
    opacity: 0.25;
    cursor: pointer;
  }

  &.active {
    opacity: 0.25;
  }

  img {
    justify-self: left;
    align-self: center;
    width: 40px;
    height: 40px;
  }
`;

export const AwesomeIcon = styled(FontAwesomeIcon)`
  align-self: center;
  justify-self: center;
`;

export const FileInfo = styled.div`
  h2 {
    font-size: 16px;

    text-overflow: ellipsis;
    white-space: initial;
    overflow: hidden;
  }
  h3 {
    font-size: 12px;
  }
  display: flex;
  flex-direction: column;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;




