import React from 'react';
import Icon from './Icon';
import checkMark from './img/checkMark.png';

export default function CheckMark(props) {
  return <Icon {...{...props, src: checkMark}} />;
}