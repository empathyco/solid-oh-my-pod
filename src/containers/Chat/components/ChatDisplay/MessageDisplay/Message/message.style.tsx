import styled from "styled-components";
export const MessageWrapper = styled.div`
  margin-right: auto;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  padding-bottom: 5px;
  margin-top: 10px;
  min-width: 100px;
  max-width: 400px;
  &.right {
    margin-right: 0;
    margin-left: auto;
  }
  .content {
    margin: 0;
    overflow-wrap: break-word;
  }
  .sendTime {
    margin-bottom: 0;
    display: block;
    float: right;
    color: grey;
    font-size: 0.8em;
  }
  .sendingIcon {
    margin-bottom: 0;
    display: inline-block;
    font-size: 0.8em;
  }
`;
