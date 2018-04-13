import React, {Component} from 'react';
import Gallery from './Gallery';

import img1 from './img/modularPictures/preview_1024x1024/1.jpg'
import img2 from './img/modularPictures/preview_1024x1024/2.jpg'
import img3 from './img/modularPictures/preview_1024x1024/3.jpg'

import pimg1 from './img/modularPictures/preview_150x150/1.jpg'
import pimg2 from './img/modularPictures/preview_150x150/2.jpg'
import pimg3 from './img/modularPictures/preview_150x150/3.jpg'


const IMAGES = [{
  src: img1,
  thumbnail: pimg1,
}, {
  src: img2,
  thumbnail: pimg2,
}, {
  src: img3,
  thumbnail: pimg3,
}];

class ModularPictures extends Component {
  render() {
    return (
      <Gallery
        {...this.props}
        images={IMAGES}
      />
    );
  }
}

export default ModularPictures;