import React from 'react';
import Icon from '../Icon';
import image from './img/email.png';
import cx from 'classnames';
import styles from './styles.module.sass';

const Email = props => <a href={'mailto:zem.valerjewna@yandex.ru'}><Icon {...{...props, src: image, boxClass: cx(styles.email, props.class) }} /></a>;
export default Email;