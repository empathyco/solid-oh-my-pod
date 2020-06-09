import styled from "styled-components";
export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  .subtitle {
    margin-left: 50px;
    color: white;
    max-width: 200px;
    font-size: 3em;
    white-space: normal;
    font-weight: lighter;
  }
`;
export const ProviderSigin = styled.div`
  margin: auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    text-align: center;
  }
`;
export const CreateAccountMessage = styled.p`
  cursor: pointer;
  text-align: center;
  margin-bottom: 20px;
  margin-top: auto;
  &:hover {
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.p`
  color: var(--error);
  text-align: center;
`;

export const Title = styled.img`
  margin-left: 50px;
  margin-top: 50px;
`;
export const Shape = styled.img`
  position: absolute;
  left: 20px;
  bottom: 70px;
  width: 90%;
  opacity: 0.51;
  object-fit: contain;

  mix-blend-mode: multiply;
`;
export const Girl = styled.img`
  position: absolute;
  height: 60%;
  bottom: 110px;

  right: 5%;
`;
export const Note1 = styled.img`
  width: 20px;
  position: absolute;
  bottom: 110px;

  top: 25%;
  left: 55%;

  animation: noteAnimation ease-in 1.5s;
  animation-iteration-count: infinite;
  transform-origin: 50% 50%;

  @keyframes noteAnimation {
    0% {
      transform: translate(0px, 0px) rotate(0deg);
    }
    12% {
      transform: translate(-6px, -10px) rotate(10deg);
    }
    24% {
      transform: translate(0px, 0px) rotate(0deg);
    }
    40% {
      transform: translate(-9px, -14px) rotate(-19deg);
    }
    56% {
      transform: translate(0px, 0px) rotate(0deg);
    }
    100% {
      transform: translate(0px, 0px) rotate(0deg);
    }
  }
`;
export const Note2 = styled.img`
  width: 10px;
  position: absolute;
  bottom: 110px;
  top: 15%;
  right: 5%;
  animation: noteAnimation ease-in 1.9s;
  animation-delay: 0.3s;
  animation-iteration-count: infinite;
  transform-origin: 50% 50%;

  @keyframes noteAnimation {
    0% {
      transform: translate(0px, 0px) rotate(0deg);
    }
    12% {
      transform: translate(-6px, -8px) rotate(10deg);
    }
    24% {
      transform: translate(0px, 0px) rotate(0deg);
    }
    40% {
      transform: translate(-9px, -10px) rotate(-9deg);
    }
    56% {
      transform: translate(0px, 0px) rotate(0deg);
    }
    100% {
      transform: translate(0px, 0px) rotate(0deg);
    }
  }
`;
