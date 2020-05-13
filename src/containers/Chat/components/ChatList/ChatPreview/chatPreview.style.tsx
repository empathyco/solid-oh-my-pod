import styled from "styled-components";
export const ChatPreview = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  height: 85px;
  border-bottom: solid 1px #f4f4f4;
  padding: 10px;
  cursor: pointer;
  :hover {
    background-color: #f4f4f4;
  }
  &.selected {
    background-color: var(--light-blue);
  }
`;

export const ChatImage = styled.div`
  height: 65px;
  width: 65px;
  border-radius: 100px;
  flex-shrink: 0;
  margin-right: 10px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ChatPreviewInfo = styled.div`
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  h3 {
    font-size: 16px;
    margin-bottom: 0.6em;

    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 0;
    }
  }

  .last-message {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    p {
      margin: 0;
      font-size: 14px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 60%;
    }

    .timestamp {
      margin-left: auto;
      font-size: 0.8em;
    }
  }
`;
