import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

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
    text-overflow: ellipsis;
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
