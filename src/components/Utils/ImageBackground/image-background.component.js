import React from 'react';

import { Image } from './image-background.style';

type Props = {
  children: React.Node,
  className: String
};

const ImageBackground = ({ children, className }: Props) => (
  <Image className={className} image = {' '} >{children}</Image>
);

export default ImageBackground;
