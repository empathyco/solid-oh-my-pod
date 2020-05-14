import styled from "styled-components";
export const MessageInputWrapper = styled.div`
  padding: 10px;
  width: 100%;
  align-self: flex-end;
  border-left: 1px solid #f4f4f4;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  * {
    margin: auto 0;
  }
`;

export const MessageInput = styled.input.attrs({ type: "text" })`
  max-width: 600px;
  height: 40px;
`;

export const SendButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 100px !important;
  background-color: grey !important;
  margin-left: 10px;
`;
