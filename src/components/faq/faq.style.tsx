import styled from "styled-components";
export const FAQ = styled.article`
  //This is temporary
  /* position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */

  margin: auto;
  margin-top: 20px;
  display: inline-flex;
  flex-direction: row;

  background-color: white;
  z-index: 6000;
  box-shadow: 0 9px 20px 0 rgba(13, 33, 50, 0.29);

  & > div {
    width: 600px;
    height: 600px;
  }

  .left {
    background-color: var(--error);
    padding: 20px;
  }

  .right {
    position: relative;
    display: flex;
    flex-direction: column;
    .closeButton {
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 40px;
      color: var(--light-blue-grey);
      cursor: pointer;
      :hover {
        color: var(--battleship-grey);
      }
    }
  }
`;

export const PageNavigationItem = styled.div`
  display: inline-block;
  margin-right: 40px;
  padding-bottom: 20px;
  margin-bottom: -2px;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid var(--white);
  }
  h3 {
    font-size: 16px;
    font-weight: 600;
    display: inline;
    font-stretch: normal;
    font-style: normal;
    color: var(--white);
    letter-spacing: 3.73px;
  }
`;

export const PageNavigation = styled.div`
  border-bottom: 1px solid var(--white);
`;
