import React from 'react';

import { Image } from './info-image-background.style';


const InfoImageBackground = ({ children, className }) => (
  <Image className={className} image = {""} >{children}</Image>
);

export default InfoImageBackground;
