import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.sass';
import Button from '../../common/Button';
import cx from 'classnames';
import {Link} from 'react-router-dom';

class Navigation extends PureComponent {
  render() {
    const {
      componentClass,
      buttonClass,
      lastButtonClass
    } = this.props;
    return (
      <div className={cx(styles.component, componentClass)}>
        <Link to='/'><Button className={cx(styles.button, buttonClass)}>Главная</Button></Link>
        <Link to='/info'><Button className={cx(styles.button, buttonClass)}>О студии</Button></Link>
        <Link to='/portfolio'><Button className={cx(styles.button, buttonClass)}>Портфолио</Button></Link>
        <Link to='/price'><Button className={cx(styles.button, buttonClass)}>Услуги и цены</Button></Link>
        <Link to='/contact'><Button className={cx(styles.button, buttonClass, lastButtonClass)}>Контакты</Button></Link>
      </div>
    );
  }
}

Navigation.propTypes = {
  componentClass: PropTypes.string,
  buttonClass: PropTypes.string,
  lastButtonClass: PropTypes.string,
};

Navigation.defaultProps = {};

export default Navigation;