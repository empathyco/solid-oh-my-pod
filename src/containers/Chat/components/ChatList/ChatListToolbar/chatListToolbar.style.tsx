import styled from "styled-components";
export const Toolbar = styled.div`
  height: 80px;
  width: 100%;
  flex-shrink: 0;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
  border-bottom: solid 1px #f4f4f4;
  align-content: center;
  * {
    margin: auto;
  }
`;

export const SearchInput = styled.input.attrs({ type: "text" })`
  background-color: #f4f4f4;

  height: 40px;
`;
export const NewChatButton = styled.button`
  width: 40px;
  background-color: gray !important;
  height: 40px;
`;
export const ClearButton = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: gray;
`;

export const SearchInputWrapper = styled.div`
  margin-left: 10px;
  margin-right: 0px;
  position: relative;
  width: 70%;
`;
