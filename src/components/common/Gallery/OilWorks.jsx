import React, {Component} from 'react';
import Gallery from './Gallery';

import img1 from './img/oilWorks/preview_1024x1024/1.jpg'
import img2 from './img/oilWorks/preview_1024x1024/2.jpg'
import img3 from './img/oilWorks/preview_1024x1024/3.jpg'
import img4 from './img/oilWorks/preview_1024x1024/4.jpg'
import img5 from './img/oilWorks/preview_1024x1024/5.jpg'
import img6 from './img/oilWorks/preview_1024x1024/6.jpg'
import img7 from './img/oilWorks/preview_1024x1024/7.jpg'
import img8 from './img/oilWorks/preview_1024x1024/8.jpg'
import img9 from './img/oilWorks/preview_1024x1024/9.jpg'
import img10 from './img/oilWorks/preview_1024x1024/10.jpg'
import img11 from './img/oilWorks/preview_1024x1024/11.jpg'
import img12 from './img/oilWorks/preview_1024x1024/12.jpg'
import img13 from './img/oilWorks/preview_1024x1024/13.jpg'
import img14 from './img/oilWorks/preview_1024x1024/14.jpg'
import img15 from './img/oilWorks/preview_1024x1024/15.jpg'
import img16 from './img/oilWorks/preview_1024x1024/16.jpg'

import pimg1 from './img/oilWorks/preview_150x150/1.jpg'
import pimg2 from './img/oilWorks/preview_150x150/2.jpg'
import pimg3 from './img/oilWorks/preview_150x150/3.jpg'
import pimg4 from './img/oilWorks/preview_150x150/4.jpg'
import pimg5 from './img/oilWorks/preview_150x150/5.jpg'
import pimg6 from './img/oilWorks/preview_150x150/6.jpg'
import pimg7 from './img/oilWorks/preview_150x150/7.jpg'
import pimg8 from './img/oilWorks/preview_150x150/8.jpg'
import pimg9 from './img/oilWorks/preview_150x150/9.jpg'
import pimg10 from './img/oilWorks/preview_150x150/10.jpg'
import pimg11 from './img/oilWorks/preview_150x150/11.jpg'
import pimg12 from './img/oilWorks/preview_150x150/12.jpg'
import pimg13 from './img/oilWorks/preview_150x150/13.jpg'
import pimg14 from './img/oilWorks/preview_150x150/14.jpg'
import pimg15 from './img/oilWorks/preview_150x150/15.jpg'
import pimg16 from './img/oilWorks/preview_150x150/16.jpg'

const IMAGES = [{
  src: img1,
  thumbnail: pimg1,
}, {
  src: img2,
  thumbnail: pimg2,
}, {
  src: img3,
  thumbnail: pimg3,
}, {
  src: img4,
  thumbnail: pimg4,
}, {
  src: img5,
  thumbnail: pimg5,
}, {
  src: img6,
  thumbnail: pimg6,
}, {
  src: img7,
  thumbnail: pimg7,
}, {
  src: img8,
  thumbnail: pimg8,
}, {
  src: img9,
  thumbnail: pimg9,
}, {
  src: img10,
  thumbnail: pimg10,
}, {
  src: img11,
  thumbnail: pimg11,
}, {
  src: img12,
  thumbnail: pimg12,
}, {
  src: img13,
  thumbnail: pimg13,
}, {
  src: img14,
  thumbnail: pimg14,
}, {
  src: img15,
  thumbnail: pimg15,
}, {
  src: img16,
  thumbnail: pimg16,
}];

class OilWorks extends Component {
  render() {
    return (
      <Gallery
        {...this.props}
        images={IMAGES}
      />
    );
  }
}

export default OilWorks;