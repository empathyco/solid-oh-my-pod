import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const RouteContainer = styled.div`
  border : none;
  display: flex;
  flex-direction: row;
`;

export const RoutePart = styled.span`
   font-family: "Montserrat", sans-serif;
  font-weight: bold;
   
   font-size: 1.5em;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: 1px;
  color: #2c4653;
  font-weight: bold;
   margin: 3px 0px;
  cursor: pointer;
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
`;

export const RouteIcon = styled(FontAwesomeIcon)`
  align-self: center;
  justify-self: center;
`;
