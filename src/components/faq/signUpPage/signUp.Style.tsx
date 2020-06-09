import styled from "styled-components";
export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-left: 50px;
  img {
    margin-bottom: 40px;
  }
  .subtitle {
    color: white;

    font-size: 2em;
    white-space: normal;
    font-weight: lighter;
    margin-top: 10px;
    margin-bottom: 0;
  }
  .content {
    z-index: 100;
  }
  p {
    color: white;
  }
`;
export const FAQButton = styled.button`
  color: white;
  background-color: var(--main);
  border-radius: 100px !important;
  padding: 10px 40px;
  cursor: pointer !important;
  z-index: 10;
  opacity: 1;
  :hover {
    color: white;
  }
  :active {
    background-color: var(--main);
  }
`;
export const Shape = styled.img`
  position: absolute;
  left: 20px;
  bottom: 30px;
  width: 90%;
  opacity: 0.51;
  object-fit: contain;

  mix-blend-mode: multiply;
  pointer-events: none;
  z-index: 1;
`;
export const ProviderSigup = styled.div`
  margin: auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    text-align: center;
  }
`;
export const AlreadyHaveAccountMessage = styled.p`
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
  margin-top: 50px;
`;

export const Boy = styled.img`
  position: absolute;
  bottom: 57px;
  height: 200px;
  left: 60%;
`;
export const Ceiling = styled.img`
  position: absolute;
  right: 33px;
  bottom: 160px;
  width: 330px;
`;
export const Star1 = styled.img`
  position: absolute;
  right: 10px;
  top: 38%;

  animation: star1 linear 7s;
  animation-iteration-count: infinite;
  transform-origin: 50% 50%;

  @keyframes star1 {
    0% {
      transform: rotate(0deg) scaleX(1) scaleY(1);
    }
    4% {
      transform: rotate(20deg) scaleX(2) scaleY(2);
    }
    7% {
      transform: rotate(-20deg) scaleX(2) scaleY(2);
    }
    11% {
      transform: rotate(20deg) scaleX(2) scaleY(2);
    }
    14% {
      transform: rotate(-20deg) scaleX(2) scaleY(2);
    }
    16% {
      transform: rotate(0deg) scaleX(1) scaleY(1);
    }
    100% {
      transform: rotate(0deg) scaleX(1) scaleY(1);
    }
  }
`;
export const Star2 = styled.img`
  position: absolute;
  right: 40%;
  bottom: 24%;

  animation: star2 linear 6s;
  animation-delay: 4s;

  animation-iteration-count: infinite;
  transform-origin: 50% 50%;

  @keyframes star2 {
    0% {
      transform: scaleX(1) scaleY(1);
    }
    4% {
      transform: scaleX(1.5) scaleY(1.5);
    }
    8% {
      transform: scaleX(0.3) scaleY(0.3);
    }
    11% {
      transform: scaleX(1.5) scaleY(1.5);
    }
    13% {
      transform: scaleX(0.3) scaleY(0.3);
    }
    16% {
      transform: scaleX(1) scaleY(1);
    }
    100% {
      transform: scaleX(1) scaleY(1);
    }
  }
`;

export const Mote = styled.img`
  position: absolute;
  right: 41%;
  bottom: 46%;

  animation: mote linear 6s;
  animation-iteration-count: infinite;
  transform-origin: 50% 50%;

  @keyframes mote {
    0% {
      transform: scaleX(1) scaleY(1);
    }
    17% {
      transform: scaleX(1.4) scaleY(1.4);
    }
    34% {
      transform: scaleX(0.6) scaleY(0.6) translateY(6px);
    }
    50% {
      transform: scaleX(1.4) scaleY(1.4);
    }
    66% {
      transform: scaleX(0.6) scaleY(0.6);
    }
   
    83% {
      transform: scaleX(1.4) scaleY(1.4) translateX(8px);
    }
    100% {
      transform: scaleX(1.2) scaleY(1.2);
    }
  }
`;
