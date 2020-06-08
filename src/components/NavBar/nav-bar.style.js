import { Link } from "react-router-dom";
import styled from "styled-components";

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
      position: relative;

      a:hover,
      a:active,
      button:hover,
      button:active {
        background: transparent !important;
      }

      .active {
        background: white !important;
        &:before {
          content: "";
          position: absolute;

          left: calc(1em - 2px);
          bottom: -2px;

          width: calc(100% - 2em);
          border-bottom: 4px solid var(--greyblue);
        }

        &.mobile-link::before {
          content: "";
          position: absolute;

          left: 0;
          top: 0;
          width: 1px;
          height: 100%;
          border-bottom: none;
          border-left: 4px solid var(--greyblue);
        }
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
