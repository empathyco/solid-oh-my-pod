import React from 'react';

import { Image } from './info-image-background.style';

type Props = {
  children: React.Node,
  className: String
};

const InfoImageBackground = ({ children, className }: Props) => (
  <Image className={className} image = {""} >{children}</Image>
);

export default InfoImageBackground;
