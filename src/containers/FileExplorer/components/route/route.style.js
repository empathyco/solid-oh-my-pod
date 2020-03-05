import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const RouteContainer = styled.div`
  border-bottom: 2px solid black;
  display: flex;
  flex-direction: row;
`;

export const RoutePart = styled.span`
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  font-size: 24px;
  margin: 3px 0px;
  cursor: pointer;
`;

export const RouteIcon = styled(FontAwesomeIcon)`
  align-self: center;
  justify-self: center;
`;
