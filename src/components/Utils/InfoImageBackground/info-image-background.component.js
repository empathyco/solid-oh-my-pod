import React from 'react';

import { Image } from './info-image-background.style';
import BackgroundImage from '../../../images/info-background-image.png'

type Props = {
  children: React.Node,
  className: String
};

const InfoImageBackground = ({ children, className }: Props) => (
  <Image className={className} image = {BackgroundImage} >{children}</Image>
);

export default InfoImageBackground;
