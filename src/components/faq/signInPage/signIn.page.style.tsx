import styled from "styled-components";
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
