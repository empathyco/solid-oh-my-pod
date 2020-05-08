import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoBlock = styled.div`
  background-color: #f4f4f4 !important;
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%);
`;

export const MyLogo = styled.div`
  margin-top: 17px;
  max-width: 14em;
  padding-right: 3em;
`;

export const NavSection = styled.section`
  ul {
    li {
      a:hover,
      a:active,
      button:hover,
      button:active {
        background: rgb(196, 230, 237) !important;
      }
      .active {
        background: #f4f4f4 !important;
      }
    }
  }
`;

export const MyLink = styled(Link)`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 34px;
  background: white;
  &:link {
    text-decoration: none;
    color: #083575;
  }
  &:visited {
    text-decoration: none;
    color: #083575;
  }
  &:hover {
    text-decoration: none;
    color: #083575;
  }
  &:active {
    text-decoration: none;
    color: #083575;
  }
`;
