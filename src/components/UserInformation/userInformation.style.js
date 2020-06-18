import styled from "styled-components";

export const ProfileName = styled.h3`
  margin-top: 0px;
  justify-items: center;
  text-align: center;
  letter-spacing: 3.73px;
  & * {
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 1.5rem;
    margin: 0;
    text-transform: uppercase;
    color: var(--light-blue) !important;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  padding: 0;
  position: relative;
  margin-right: 20px;
  width: 250px;
  flex-basis: 250px; /** For the display flex */
  flex-grow: 0;
  flex-shrink: 0;

  @media (max-width: 900px) {
    margin-right: 0;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -150px);
  @media (max-width: 900px) {
    position: static;
    left: unset;
    transform: none;
  }
`;
