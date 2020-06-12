import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  margin-top: 40px;
  margin-left: 8em;
  @media (max-width: 900px) {
    .item-count {
      flex-direction: row;
    }
    
    flex-direction: column;
    justify-content: center;
    margin-left: 0;
    & > * {
      margin: auto;
    }

    .file-explorer {
      margin-top: 0;
      & > * {
        margin-left: auto;
        margin-right: auto;
      }
      .explorer .fileitems {
        justify-content: center;
      }
    }
  }
`;
export const FileExplorer = styled.div`
  margin-top: -30px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Explorer = styled.div`
  display: block;
  margin: 1em 0;
  width: 100%;
  height: 100%;

  span {
    border-right: 1px solid grey;
  }

  .fileitems {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
