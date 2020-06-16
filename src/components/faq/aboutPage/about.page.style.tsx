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
