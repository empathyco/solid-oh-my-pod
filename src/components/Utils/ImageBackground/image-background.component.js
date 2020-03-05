import React from 'react';

import { Image } from './image-background.style';
import BackgroundImage from '../../../images/background-image.png'

type Props = {
  children: React.Node,
  className: String
};

const ImageBackground = ({ children, className }: Props) => (
  <Image className={className} image = {BackgroundImage} >{children}</Image>
);

export default ImageBackground;
