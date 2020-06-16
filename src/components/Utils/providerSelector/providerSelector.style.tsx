import styled from "styled-components";
export const CurrentSelectedProvider = styled.div`
  width: 269px;
  height: 35px;
  border-radius: 21.5px;
  border: solid 2.3px var(--pale-blue);
  background-color: white;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  padding: 0 20px;
  margin: auto;
  margin-bottom: 5px;

  * {
    margin: auto 0;
    float: left;
  }
  img {
    height: 25px;
    width: 25px;
  }

  p {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    margin-left: 20px;
    color: var(--main);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ProvidersWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
`;
export const SelectProvider = styled(CurrentSelectedProvider)`
  background-color: var(--main);
  cursor: pointer;
  border: solid 2.3px var(--main);
  p {
    color: white;
  }
`;

export const Arrow = styled.img`
  margin: 0 auto;
  cursor: pointer;
  height: 25px;
  width: 25px;
  &.open {
    transform: rotateZ(180deg);
  }
`;

export const ProviderSelectorWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`;
