import styled from "styled-components";
export const GeneralButton = styled.button`
  all: unset;
  color: white !important ;
  background-color: var(--main);
  border-radius: 100px !important;
  padding: 15px 25px;
  display: inline-block;
  text-align: center;
  font-weight: bolder;
  text-transform: uppercase;
  margin: 10px auto;
  min-width: 100px;
  cursor: pointer;

  :disabled {
    filter: brightness(110%);
  }

  &.main,
  &.main:active {
    background-color: var(--main);
  }

  &.error,
  &.error:active {
    background-color: var(--error);
  }
  &.success,
  &.success:active {
    background-color: var(--success);
  }

  &.info,
  &.info:active {
    background-color: var(--info);
  }

  :hover,
  :active {
    transform: none !important;
    color: white !important;
  }
`;
