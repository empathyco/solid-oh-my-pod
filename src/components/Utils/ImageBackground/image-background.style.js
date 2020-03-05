import styled from 'styled-components';

export const Image = styled.div`
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  margin: 0;
`;
