import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles.module.sass';

class Logo extends PureComponent {
  render() {
    const {className} = this.props;
    return (
      <div className={cx(className, styles.component)}>
        <div className={styles.image}></div>
      </div>
    );
  }
}

Logo.propTypes = {
  className: PropTypes.string
};

export default Logo;