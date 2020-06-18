import React from 'react';

import { PanelWrapper } from './panel.style';



const Panel = ({ children, className }) => (
  <PanelWrapper className={className}>{children}</PanelWrapper>
);

export default Panel;
