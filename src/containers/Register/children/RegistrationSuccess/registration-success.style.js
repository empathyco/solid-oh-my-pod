import styled from 'styled-components';
import { ImageBackground } from '@util-components';
import { CenterContainer } from '@util-components';

export const MyCenterContainer = styled(CenterContainer)`
  margin: 0;
  height: 100%;
`;

export const RegistrationPage = styled(ImageBackground)`
  text-align: center;

  h1 {
    font-family: "Raleway", sans-serif;
    font-weight: bold;
    font-size: 55px;
    color: #083575;
  }

  span {
    color: #083575;
    font-family: "Raleway", sans-serif;
    font-size: 24px;
    font-weight: bold;
    line-height: 20px;
    text-align: center;
    display: block;
    padding: 1.5em 0;
  }

  .rocket {
    width: 250px;
    height: 250px;
    text-align: center;
    padding: 40px 0 40px 0;
    color: #083575;
  }
`;
