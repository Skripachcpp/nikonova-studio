import React, {PureComponent} from 'react';
import Navigation from '../Navigation'
import styles from './styles.module.sass'
import Email from "../../common/Network/Email";
import Vk from "../../common/Network/Vk";
import Media from 'react-media';

class Footer extends PureComponent {
  render() {
    return (
      <div className={styles.component}>
        <Media query="(max-width: 880px)">
          {matches => matches ? (null) : (
              <Navigation
                componentClass={styles.navigation}
                buttonClass={styles.button}
                lastButtonClass={styles.lastButton}
              />
            )
          }
        </Media>
        <div className={styles.network}>
          <Media query="(max-width: 1900px)">
            <div className={styles.networkTitle}>Связаться со мной:</div>
          </Media>
          <div className={styles.networkLinks}>
            <Email boxClass={styles.networkLink}/>
            <Vk boxClass={styles.networkLink}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;