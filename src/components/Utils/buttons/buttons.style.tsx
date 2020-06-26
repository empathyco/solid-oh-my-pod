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

export const Delete = styled.button`
  margin: 0 !important;
  width: 16px;
  height: 16px;
  font-size: 9px;
  padding: 0 !important;
  border-radius: 100px !important;
  background-color: var(--light-blue-grey);
  color: white !important;
  font-weight: bolder !important;

  &:hover {
    background-color: var(--error) !important;
    color: white !important;
  }
`;

export const TextButton = styled.button`
  width: fit-content;
  p {
    margin: auto;
  }
  * {
    display: inline;
    font-weight: bolder;
  }

  :active {
    background-color: inherit !important;
  }
  &.error * {
    color: var(--error) !important;
  }
  &.main * {
    color: var(--main) !important;
  }
  &.success * {
    color: var(--success) !important;
  }
  &.info * {
    color: var(--info) !important;
  }
`;
