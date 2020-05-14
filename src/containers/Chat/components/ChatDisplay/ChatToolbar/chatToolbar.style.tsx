import styled from "styled-components";

export const ChatToolbar = styled.div`
  height: 80px;
  width: 100%;

  display: flex;
  flex-wrap: nowrap;

  border: 1px solid #f4f4f4;
`;
export const ChatImageWrapper = styled.div`
  height: 100%;
  width: 90px;
  display: flex;
  align-content: center;
`;

export const ChatImage = styled.div`
  height: 70px;
  width: 70px;
  margin: auto;
  border-radius: 100px;

  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const ChatInfo = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  align-content: center;
  h3 {
    margin: auto;
    margin-left: 0px;
    max-width: 400px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
