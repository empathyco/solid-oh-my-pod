import styled from "styled-components";

export const Label = styled.div`
  display: inline;
  margin-left: 11px;
`;

export const Button = styled.div`
  justify-content: center;
  display: flex !important;
  flex-wrap: nowrap !important;
  color: #354866;
  border: 1px solid transparent !important;
  border-radius: 0px !important;
  cursor: pointer;
  font-size: 0.8em;
  padding: 0.5em 1em;
  -webkit-transition: 0.25s all ease-in-out;
  transition: 0.25s all ease-in-out;
  outline: none;
  text-transform: uppercase;
  background-color: transparent !important;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;

  &:hover {
    border: 1px solid #dae0e6 !important;
    color: #25354a !important;
  }
  &:active {
    border: 1px solid #dae0e6 !important;
    background-color: #25354a !important;
    color: white !important;
  }
`;
