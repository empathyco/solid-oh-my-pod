import styled from "styled-components";

export const ImageProfileWrapper = styled.div`
  margin: auto;
  position: relative;
  height: 128px;
  width: 128px;
  background-size: cover;
  overflow: hidden;
  border-radius: 360px !important;
  border: solid 6px #f4f4f4;
  img {
    width: 100%;
    height: 100%;
    border-radius: 8000px;
    box-sizing: border-box;
  }
  &:hover {
    button {
      opacity: 1;
    }
  }
  .upload-icon {
    display: block;
    margin: 0 auto 10px auto;
    font-size: 1.6rem;
    opacity: 0.7;
  }
`;

export const ButtonStyled = styled.button`
  padding: 0 1em !important;
  border: none;
  background: rgba(23, 20, 34, 0.73);
  border-radius: 360px;
  display: block;
  transition: all 0.3s ease-in;
  opacity: 0;
  position: absolute;
  width: 100%;
  padding: 20px;
  bottom: 0;
  top: 0;
  left: 0;
  &:hover {
    border: 3px solid white;
    color: white;
    transform: none !important;
  }
`;

export const ImageProfileLoader = styled.div`
  background: rgba(23, 20, 34, 0.73);
  border-radius: 360px;
  position: absolute;
  padding: 20px;
  top: 0;
  left: 0;
  border: 3px solid white;
  color: white;
  right: 0;
  bottom: 0;
  text-align: center;
`;

export const LoaderText = styled.p`
  color: white;
`;
