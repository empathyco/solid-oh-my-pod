import styled from "styled-components";

export const ToasterPopUpScreen = styled.div`
  position: fixed;
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #ffffffad;
  z-index: 10000;
  top: 0px;
  left: 0px;
  justify-content: center;
`;

export const ToasterPopUp = styled.div`
  width: 328px;
  min-height: 328px;

  position: absolute;
  align-self: center;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 7px 0 var(--pale-blue);
  border: solid 1px var(--pale-blue);

  .error {
    background-color: var(--error);
  }
  .success {
    background-color: var(--success);
  }
  .info {
    background-color: var(--info);
  }

  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
      margin-top: 42px;
    }
    h3 {
      text-align: center;
      margin: 20px auto;

      color: white;
    }
  }

  .body {
    background-color: white;
    padding: 0px 10px;
    padding-top: 10px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    .description {
      text-align: center;
      margin-bottom: 0;
      display: flex;
      align-content: center;

      p {
        color: var(--battleship-grey);
        margin: auto;
      }
    }
    .omp-button {
      margin: auto;
      bottom: 10px;
      align-self: flex-end;
    }
  }

  div {
    width: 100%;
    height: 50%;
  }

  //Animations
  &.error {
    animation: slidedown 0.5s;
  }
  &.closing-error {
    animation: fadeout-up 0.5s;
  }
  &.success {
    animation: slideup 0.5s;
  }
  &.closing-success {
    animation: fadeout-down 0.5s;
  }

  &.info {
    animation: slideleft 0.5s;
  }
  &.closing-info {
    animation: fadeout-right 0.5s;
  }
  @keyframes slideleft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  @keyframes fadeout-right {
    from {
      opacity: 1;
      transform: translateX(0px);
    }
    to {
      opacity: 0;
      transform: translateX(-50px);
    }
  }

  @keyframes fadeout-down {
    from {
      opacity: 1;
      transform: translateY(0px);
    }
    to {
      opacity: 0;
      transform: translateY(50px);
    }
  }

  @keyframes fadeout-up {
    from {
      opacity: 1;
      transform: translateY(0px);
    }
    to {
      opacity: 0;
      transform: translateY(-50px);
    }
  }
  @keyframes slidedown {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes slideup {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
