import styled from "styled-components";

export const ExplorerContainer = styled.div`
  background: white;
  width: 100%;
   display: block;
  max-width: 100%;
  max-height: 100%;
  padding: 2em 3em 1em 5em;
   justify-content: center;
  align-items: center;
   align-self:center;
   
    
`;

export const Explorer = styled.div`
  display: block;
  margin: 1em 0.25em;
  width: 100%;
  height: 100%;
  
  span {
    border-right: ipx solid grey;
  }
  
  .fileitems{
   display: grid;
  grid-gap: 1rem;
   
  }
    @media (min-width: 800px) {
  .fileitems { grid-template-columns: repeat(2, 1fr); }
  
`;

export const Route = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  
  font-size: 20px;
  border: none !important;
  margin: 3px 0px;
  span {
    cursor: pointer;
  }
`;
