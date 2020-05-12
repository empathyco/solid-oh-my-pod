import React from 'react';
import { CenterContainerWrapper } from './center-container.style';



const CenterContainer = ({ children, className }) => (
  <CenterContainerWrapper className={className}>
    <div className="wrapper">{children}</div>
  </CenterContainerWrapper>
);

export default CenterContainer;
