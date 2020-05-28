import styled from "styled-components";
export const FAQ = styled.article`
  //This is temporary
  /* position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */

  margin: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: row;

  background-color: white;
  z-index: 6000;
  box-shadow: 0 0 7px 0 var(--pale-blue);

  & > div {
    width: 500px;
    height: 600px;
  }

  .left {
    background-color: var(--error);
    padding: 20px;
  }

  .right {
    position: relative;
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
    display: inline;
    color: var(--white);
  }
`;

export const PageNavigation = styled.div`
  border-bottom: 1px solid var(--white);
`;
