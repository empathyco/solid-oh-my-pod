import styled from "styled-components";
export const PopupWindow = styled.div`
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  h3 {
    margin-top: 0;
  }
`;
export const FriendsList = styled.div``;
export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 16px;
  padding: 5px;
`;

export const FriendOption = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  cursor: pointer;

  :hover {
    background-color: #f4f4f4;
  }
  * {
    margin: auto 0;
  }
  img {
    border-radius: 100px;
    height: 40px;
    width: 40px;
    margin-left: 10px;
    margin-right: 20px;
  }
  h4 {
  }
`;
