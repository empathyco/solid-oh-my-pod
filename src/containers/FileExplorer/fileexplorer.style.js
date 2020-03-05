import styled from "styled-components";

export const ExplorerContainer = styled.div`
   width: 100%;
  background: rgb(250,182,193);
  background: linear-gradient(30deg, rgba(250,182,193,0.92) 0%, rgba(191,255,251,0.93) 71%);
  background-repeat: repeat; 
  width: 100%;
  overflow: scroll;
  display: grid;
  grid-template-rows: 5% 95%;
  max-width: 100%;
  max-height: 100%;
`;

export const Explorer = styled.div`
  border-bottom: 1px transparent;
  display: grid;
  grid-template-columns: repeat(auto-fill, 20%);
  grid-template-rows: repeat(auto-fill, 10%);
  margin: 2px 0px;
  width: 100%;
  height: 100%;
  span {
    border-right: ipx solid grey;
  }
`;

export const Route = styled.div`
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 20px;
  border-bottom: 2px ;
  margin: 3px 0px;
  span {
    cursor: pointer;
  }
`;
