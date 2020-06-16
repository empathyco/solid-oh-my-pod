import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const RouteContainer = styled.div`
  border: none;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export const RoutePart = styled.span`
  font-family: "Montserrat", sans-serif;

  font-weight: lighter;
  font-stretch: normal;
  font-style: normal;

  letter-spacing: 2px;
  color: var(--main);
  text-transform: uppercase;

  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export const Separator = styled.span`
  margin: 0 10px;

  font-weight: lighter;
  font-stretch: normal;
  font-style: normal;

  letter-spacing: 1px;
  color: var(--main);
`;

