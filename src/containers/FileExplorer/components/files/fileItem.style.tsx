import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const FileMenuTrigger = styled.div`
  width: 300px;
  height: 60px;
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
          border-color: 1px  rgba(145,194,250,0.8) !important;
  }
 
  img {
    justify-self: left;
    align-self: center;
    width: 40px;
    height: 40px;
  }
  .plyr__control 
  {
    background-color: red !important;
    color: green !important;
  }
  
  
`;

export const AwesomeIcon = styled(FontAwesomeIcon)`
  align-self: center;
  justify-self: center;
`;

export const FileInfo = styled.div`
  font-family: "Montserrat", sans-serif !important;

  h2 {
    font-size: 16px;

    text-overflow: ellipsis;
    white-space: initial;
    overflow: hidden;
      font-family: "Montserrat", sans-serif !important;

  }
  h3 {
    font-size: 12px;
      font-family: "Montserrat", sans-serif !important;

  }
  display: flex;
  flex-direction: column;
 
  user-select: none;
`;

export const FileTitle = styled.div`
      
    font-size: 24px;
    font-weight: bold;
    text-overflow: ellipsis;
    white-space: initial;
  font-family: "Montserrat", sans-serif !important;

    
    
    display: flex;
    flex-direction: column;
    padding: 2em 0em 0em 1em;
    margin: 2em 0em 1em;
    user-select: none;
`;

export const TableFile = styled.table`
    color: #243d48;
    border-collapse: collapse !important;
    letter-spacing: 1.75px;
    line-height: 1.29;

 
     tr {
    display: block !important;
    float: left !important;
    padding: 0em;
    }
    td {
    display: block !important;
    border-bottom: 1px solid black ;
    width:100% !important;
    padding: 1em;

     }
    tbody>:nth-child(1){
    font-weight: 600;
    text-transform: uppercase;
    opacity: 1;
    }


`;
export const TableContainer = styled.div`
   padding-left:2em;
   padding-bottom:2em;

   


`;

