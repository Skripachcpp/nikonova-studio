import React from 'react';
import Icon from '../Icon';
import image from './img/vk.png';
import cx from 'classnames';

const Vk = props => <a href={'https://vk.com/nikonovastudio'}><Icon {...{...props, src: image, class: cx(props.class) }} /></a>;
export default Vk;