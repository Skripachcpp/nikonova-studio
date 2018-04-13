import React, {PureComponent} from 'react';
import styles from './styles.module.sass';

class Contact extends PureComponent {
  render() {
    return (
      <div className={styles.box}>
        <div className={styles.text}>Так же можно ознакомиться с творческими работами в соц сетях <a href={'https://vk.com/nikonovastudio'}>https://vk.com/nikonovastudio</a></div>
        <div className={styles.text}>Чтобы узнать больше информации или сразу заказать картину пишите на почту <a href="mailto:zem.valerjewna@yandex.ru">zem.valerjewna@yandex.ru</a><br/></div>
      </div>
    );
  }
}

export default Contact;