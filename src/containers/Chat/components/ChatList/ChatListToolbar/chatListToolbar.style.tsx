import styled from "styled-components";
export const Toolbar = styled.div`
  height: 55px;
  width: 100%;
  flex-shrink: 0;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
  border-bottom: solid 1px #f4f4f4;
`;

export const SearchInput = styled.input.attrs({ type: "text" })`
  background-color: #f4f4f4;
  width: 70%;
  margin-right: 20px;
`;
export const NewChatButton = styled.button`
  width: 15%;
  background-color: gray !important;
`;
