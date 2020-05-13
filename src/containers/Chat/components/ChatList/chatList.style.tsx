import styled from "styled-components";

export const ChatList = styled.div`
  width: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const ChatsWrapperScroll = styled.div`
  padding: 8px;
  overflow-y: auto;
  height: 400px;
  max-height: 90%;
  min-height: 90%;
`;

export const ChatsWrapper = styled.div`
  overflow: hidden;
`;
