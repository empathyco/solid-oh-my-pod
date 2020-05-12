import React from 'react';

import { Image } from './image-background.style';



const ImageBackground = ({ children, className }) => (
  <Image className={className} image = {' '} >{children}</Image>
);

export default ImageBackground;
