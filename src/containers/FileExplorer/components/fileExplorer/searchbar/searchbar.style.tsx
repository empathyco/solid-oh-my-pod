import styled from "styled-components";
export const SearchBar = styled.input`
  background-color: transparent;

  height: 60px;
  font-size: 1em !important;
  border: none !important;
  border-bottom: 1px solid #d3d3d3 !important;
  padding-left: 30px !important;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 80%;
`;

export const PlaceholderIcon = styled.img`
  position: absolute;
  left: 0;
  top: 18px;
`;
