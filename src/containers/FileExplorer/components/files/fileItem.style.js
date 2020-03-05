import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const FileMenuTrigger = styled.div`
  margin: 0px 5px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 30% 70%;
  font-family: "Lato", sans-serif;
  justify-content: center;
  align-items: center;
  &:hover {
      opacity: 0.25;
   
  }

  &.active {
          opacity: 0.25;

  }

  img {
    justify-self: center;
    align-self: center;
  }
`;

export const AwesomeIcon = styled(FontAwesomeIcon)`
  align-self: center;
  justify-self: center;
`;

export const FileInfo = styled.div`
  h2 {
    font-size: 24px;
    font-wieght: bold;
    text-overflow: ellipsis;
    white-space: nowrap;
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

export const CustomContext = styled.div`
  position: absolute;
  top: ${props => props.y || 0};
  left: ${props => props.x || 0};
  display: flex;
  flex-direction: column;
`;

export const CustomContextOption = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  font-family: "Lato", sans-serif;
  font-size: 12px;
`;
