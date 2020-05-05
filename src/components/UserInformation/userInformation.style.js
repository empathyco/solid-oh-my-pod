import styled from "styled-components";

export const ProfileName = styled.h3`
  margin-top: 0px;
  justify-items: center;
  text-align: center;
  & * {
    font-size: 1.5rem;
    margin: 0;
    text-transform: uppercase;
    color: var(--light-blue) !important;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;
