import { CenterContainer, Panel } from "@util-components";
import styled from "styled-components";

export const RegisterWrapper = styled.section`
  h1 {
    font-family: "Monserrat", sans-serif;
    font-weight: bold;
    font-size: 55px;
    color: #083575;
  }
  
  .btn-solid{
  background-color: blue;
  }
`;

export const MyCenterContainer = styled(CenterContainer)`
  margin: 0;
  height: 100%;
`;

export const RegisterPanel = styled(Panel)`
  justify-content: space-between;
  background: none;
  border: none;
  box-shadow: none;
  height: 60%;
  align-self: center;
`;

export const PanelHeader = styled.div`
  position: relative;

  h2 {
    position: relative;
    padding: 0;
<<<<<<< HEAD

    font-size: 20px;
=======
      text-decoration: underline
>>>>>>> search
    font-weight: bold;
     line-height: 24px;
    text-align: center;
    margin: 0;
    font-family: Montserrat, sans-serif;
     
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
     text-align: center;
    color: #243d48;
  }
`;

export const PanelBody = styled.div`
  height: 100% !important;
  animation: fadeIn 0.2s ease-in;
  width: 453px;
  height: 50px;
  font-family: Montserrat, sans-serif;
<<<<<<< HEAD
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 3px;
  text-align: center;
  color: #243d48;

  a {
    font-weight: bold;
    display: block;

    text-align: center;
    text-decoration: none;
    margin: 50px 0;
=======
    font-size: 16px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
     
    text-align: center;
    color: #243d48;
    
  a {
     font-weight: bold;
     display: block;
     text-decoration: underline
    text-align: center;
     margin: 50px 0;
    
    
>>>>>>> search

    &:link {
       color: #083575;
    }
    &:visited {
       color: #083575;
    }
    &:hover {
       color: #083575;
    }
    &:active {
       color: #083575;
    }
  }

  .a-with-spacing {
    margin: 24px 0;
  }

  ul {
    font-family: Montserrat, sans-serif;
    font-size: 1em;
    color: #666;
  }
`;

export const Actions = styled.div`
  height: 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;

  button {
    height: 32px;
    width: 150px;
    border-radius: 4px;
   
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 0.89px;
    line-height: 11px;
    text-align: center;
    text-transform: uppercase;
    border: solid 2px #449df5;
    box-sizing: border-box;
    
    font-size: 1em;
    display: inline-block;

    font-family: Montserrat-SemiBold, sans-serif;
    
    background-color: #243d48 !important;
    color: white; 
    font-weight: bold;
    
    border-radius: 2.5em;
    height: 43px;
    text-transform: uppercase;
    
  }

  .btn-solid { 
    font-weight: bold;
    font-size: 25px;
     
    font-size: 1em;
    display: inline-block

    font-family: Montserrat-SemiBold, sans-serif;
    
    background-color: #243d48;
    color: white; 
    font-weight: bold;
    
    border-radius: 2.5em;
    height: 43px;
    text-transform: uppercase;
    
  }

  .btn-outlined {
    background-color: #ffffff;
     
    
    font-size: 1em;
    display: inline-block

    font-family: Montserrat-SemiBold, sans-serif;
    
    background-color: #243d48;
    color: white; 
    font-weight: bold;
    
    border-radius: 2.5em;
    height: 43px;
    text-transform: uppercase;
    
  }
`;
