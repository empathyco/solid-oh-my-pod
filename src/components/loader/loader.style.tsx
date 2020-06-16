import styled from "styled-components";

export const LoaderScreen = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 10000;
  background-color: white;
  display: flex;
  justify-content: center;
`;

export const LoaderWrapper = styled.div`
  align-self: center;
  position: relative;
  height: 41px;
  width: 41px;
  .outer-loader {
    height: 41px;
    width: 41px;
    z-index: 10002;
    position: absolute;
    animation: spin-outer 4s alternate ease-in-out infinite;
  }

  .inner-loader {
    height: 23px;
    position: absolute;
    z-index: 10001;
    top: 8px;
    left: 13px;
    transform-origin: 32% 50%;
    transform-style: preserve-3D;
    animation: spin-inner 4s alternate ease-in-out infinite;
  }

  @keyframes spin-outer {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(2160deg);
    }
  }

  @keyframes spin-inner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(1080deg);
    }
  }
`;
