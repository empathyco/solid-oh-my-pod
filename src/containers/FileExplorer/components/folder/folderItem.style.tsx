import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const FolderMenuTrigger = styled.div`
  margin: 0px 5px;
  border-radius: 5%;
  display: grid;
  grid-template-columns: 30% 70%;
  font-family: "Montserrat", sans-serif !important;
  justify-content: center;
  align-items: center;
  &:hover {
         opacity: 0.25;

  }

  &.active {
          opacity: 0.75;
          text-decoration: underline;
  }
  &.visited {
         text-decoration: underline;

  }
  &.focus {
         text-decoration: underline;
          border: 1px  rgba(145,194,250,0.8);
            outline-color: rgba(145,194,250,0.8);

  }
 
  img{
   align-self: center;
  justify-self: center;
  }
`;

export const AwesomeIcon = styled(FontAwesomeIcon)`
  align-self: center;
  justify-self: center;
`;

export const FolderInfo = styled.div`
  overflow: hidden;
  padding-right: 20px;
  h2 {
    font-size: 16px;
    white-space: initial !important;
    overflow: hidden;
       font-family: "Montserrat", sans-serif !important;

      
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
