import styled from "styled-components";
import { Link } from "react-router-dom";
import { ImageBackground, InfoImageBackground } from "@util-components";
import { ProviderLogin } from "@inrupt/solid-react-components";

export const LoginWrapper = styled.div`
  background: url("/img/empathylines.svg");
   background-repeat: no-repeat; 
   overflow: hidden;
  .podlogo{
   padding-bottom:2em;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0px;
  }

  display: grid;
  grid-template-rows: 10% 100% 100% 100%;
`;

export const InfoHeader = styled.div`
  margin: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 40% 60%;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: white;
  font-size: 36px;
`;

export const InfoHeaderText = styled.p`
  background: linear-gradient(to bottom right, #7c4dff, #18a9e6, #01c9ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  align-self: center;
  margin: 0;
  font-weight: bold;
`;

export const InfoTextWrapper = styled.div`
  display: grid;
  grid-template-rows: 30% 70%;
`;

export const InfoTitle = styled.h2`
  font-size: 55px;
  color: #083575;
  justify-self: center;
  align-self: flex-end;
  font-family: "Raleway", sans-serif;
`;

export const InfoTextImageWrapper = styled.div`
  width: 50%;
  justify-self: center;
  display: grid;
  grid-template-columns: 70% 30%;
`;

export const InfoText = styled.p`
  font-size: 34px;
  align-self: top;
  justify-self: right;
  text-align: left;
  color: #083575;
 `;

export const InfoImage = styled.img`
  image-size: 30%;
  align-self: top;
  justify-self: left;
`;

export const AllLoginWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 100% 100%;
  ::-webkit-scrollbar {
    width: 12px;
  }
`;

export const LoginPanel = styled.div`
  background: none;
  border: none;
  box-shadow: none;
  display: grid;
  grid-template-rows: 20% 20% 60%;
  height: 99%;
  align-self: center;
`;

export const LoginTitle = styled.h1`
  

`;

export const LoginSubtitle = styled.h2`
 
  font-family: Montserrat, sans-serif;
  font-size: 1em;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.25em;
  text-align: center;
  color: var(--dark-grey-blue);
`;

export const MyLink = styled(Link)`
   padding: 0.7em;
  display: inline-block
  font-weight: bold;
  text-align: center;
  border-radius: 2.5em;
  height: 43px;
  width: 181px;
  text-transform: uppercase;
   flex-direction: column;
  font-stretch: normal;
  font-style: normal;
  font-family: Montserrat-SemiBold, sans-serif;
  font-size: 1em;
         
  background-color: #243d48;
  color: white;          
  font-weight: 600;
   
  line-height: normal;
  letter-spacing: normal;
   
  
    
  &:link {
    text-decoration: none;
    color: white;
  }
  &:visited {
    text-decoration: none;
    color: white;
  }
  &:hover {
    text-decoration: none;
    color: white;
  }
  &:active {
    text-decoration: none;
    color: white;
  }
`;

export const PanelBody = styled.div`
  

  .provider-login-component {

    background-color: transparent;
 
    button{
    font-size: 1em;
    display: inline-block

    font-family: Montserrat-SemiBold, sans-serif;
    
    background-color: #243d48;
    color: white; 
    font-weight: bold;
    
    border-radius: 2.5em;
    height: 43px;
    text-transform: uppercase;
    
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
     }
  
  }
`;
