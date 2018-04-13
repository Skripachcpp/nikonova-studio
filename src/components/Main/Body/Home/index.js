import React, {PureComponent} from 'react';
import styles from './styles.module.sass';
import {CheckMark} from '../../../common/Icon'

class Home extends PureComponent {
  render() {

    const renderItem = (text) => (
      <div className={styles.item}>
        <CheckMark className={styles.itemIcon}/>
        <div className={styles.text}>{text}</div>
      </div>
    );

    return (
      <div className={styles.component}>
        <div className={styles.info}>
          <div>
            <h1 className={styles.title}>Портреты по фотографии</h1>
            {renderItem('Качественно и красиво')}
            {renderItem('Приемлемые цены')}
            {renderItem('На ваш вкус')}
          </div>
        </div>
        <div className={styles.info}>
          <div>
            <h1 className={styles.title}>Картины на заказ</h1>
            {renderItem('Репродукции')}
            {renderItem('Натюрморты')}
            {renderItem('Пейзажи')}
            {renderItem('Постановки')}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;