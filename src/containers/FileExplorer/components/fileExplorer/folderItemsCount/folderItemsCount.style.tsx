import styled from "styled-components";
export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-top: 39px;
  .item {
    margin: auto;
    display: inline-flex;
    flex-direction: row;
    margin-bottom: 20px;
    img {
      width: 30px;
      height: 30px;
    }
    p {
      margin: auto 10px;
      display: inline-block;

      font-size: 16px;
      font-weight: 600;
    }
  }
`;
