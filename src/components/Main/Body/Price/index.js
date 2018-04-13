import React, {PureComponent} from 'react';
import cx from 'classnames'
import styles from './styles.module.sass'
import Media from 'react-media';

class Price extends PureComponent {
  render() {
    const renderItem = (className, title, lines) => {
      return (
        <div className={cx(className)}>
          <h1 className={styles.title}>{title.map(a =>
            <Media query="(min-width: 820px)">
              {m => m ?
                a
                :
                <div>{a}</div>
              }
            </Media>)}</h1>
          {lines && lines.map(item => (
            <div className={styles.text}>{item}</div>
          ))}
        </div>
      );
    };


    const infoItems = [
      renderItem(cx(styles.cell), ['Карандаш, уголь'], ['А4 - 600', 'А3 - 1000', 'А2 - 1400']),
      renderItem(styles.cell, ['Картина маслом'], ['30х40 - 2500', '40х50 - 3500', '50х60 - 4500']),
      renderItem(cx(styles.cell), ['Акварель техника'], ['А4 - 700', 'А3 - 1100', 'А2 - 1500']),
      renderItem(styles.cell, ['Цифровая картина', ' на холсте'], ['30х40 - 1500', '40х50 - 1600', '50х60 - 1700', '60х80 - 1800', '70х80 - 1900'])
    ];

    return (
      <div className={styles.component}>
        <Media query="(min-width: 820px)">
          {m => m
            ?
            <div className={styles.table}>
              <div className={styles.row}>
                {infoItems[0]}
                {infoItems[1]}
              </div>
              <div className={styles.row}>
                {infoItems[2]}
                {infoItems[3]}
              </div>
            </div>
            :
            <div className={styles.tableMin}>
              {infoItems[0]}
              {infoItems[1]}
              {infoItems[2]}
              {infoItems[3]}
            </div>
          }
        </Media>
        <div className={styles.info}>
          <h1 className={styles.title}>Когда вы получите свою картину?</h1>
          <div className={styles.text}>Доставка осуществляется почтой России. Картину Вам домой принесет курьер.</div>
          <ul className={styles.ul}>
            <li className={styles.text}>После отправки посылки мы высылаем вам СМС с трек кодом для отслеживания вашей
              посылки на сайте почты России.
            </li>
            <li className={styles.text}>При отправке каждый модуль надежно упаковывается, что исключает любое
              повреждение во время пересылки.
            </li>
            <li className={styles.text}>Стоимость доставки по России составляет от 450 рублей. (рассчитывается по
              тарифам вашего населенного пункта)
            </li>
            <li className={styles.text}>Срок доставки от двух дней.</li>
          </ul>
          <div className={styles.text}>Возможна отправка картин любой другой транспортной компанией на выбор клиента.
          </div>
          <div className={styles.text}>Просьба уточнять эту возможность заранее.</div>
        </div>
      </div>
    );
  }
}

export default Price;