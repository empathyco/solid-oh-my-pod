import styled from "styled-components";

export const QuestionList = styled.ul`
  margin-top: 50px;
`;

export const QuestionTitle = styled.li`
  margin-bottom: 20px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
export const QuestionAnswer = styled.div`
  padding: 50px;
  br {
    color: var(--dark-grey-blue);
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
export const Shape = styled.img`
  position: absolute;
  right: 20px;
  bottom: 120px;
  height: 80%;
  opacity: 0.51;
  object-fit: contain;

  mix-blend-mode: multiply;
`;
export const Girl = styled.img`
  position: absolute;
  height: 60%;
  right: 6px;
  bottom: 23%;
`;
export const QuestionMark = styled.img`
  position: absolute;
  right: 19%;
  top: 8%;

  animation: question linear 2s;
  animation-iteration-count: infinite;
  transform-origin: 50% 100%;

  @keyframes question {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-10deg);
    }
    75% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
