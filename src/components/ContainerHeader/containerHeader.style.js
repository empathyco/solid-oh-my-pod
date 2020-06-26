import styled from "styled-components";

export const Title = styled.section`
  align-items: right;
  justify-content: right;
  bottom: 50px;

  h2 {
    font-family: Montserrat, sans-serif;
    font-size: 50px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: normal;
    color: #243d48;
  }
`;

export const Header = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: lighter;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: left;
  background-color: white;
  flex-wrap: wrap;
  border-radius: 4px;
  /* padding: 1em 0; */
  padding: 0;
  padding-left: 400px !important;
  top: -20px;
  @media (max-width: 900px) {
    padding-left: 0px !important;
    justify-content: center;
  }

  .edit-button {
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid white;
    color: white;
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 1rem;
  }

  .floating-header-item {
    transform: translateY(40px);
    z-index: 100;
  }
`;
