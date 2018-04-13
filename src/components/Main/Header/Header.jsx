import React, {PureComponent} from 'react';
import Logo from '../../common/Logo'
import Navigation from '../Navigation'
import styles from './styles.module.sass';
import cx from 'classnames';

class Header extends PureComponent {
  render() {
    return (
      <div className={styles.component}>
        <Logo className={styles.logo}/>
        <Navigation
          componentClass={cx(styles.navigation)}
          buttonClass={cx(styles.button)}
        />
      </div>
    );
  }
}

export default Header;