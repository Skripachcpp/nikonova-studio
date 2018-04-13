import React, {Component} from 'react';
import styles from './styles.module.sass';
import {
  CoalPencil,
  ModularPictures,
  OilWorks,
  Photoshop,
  PhotoshopInStages,
  WatercolorGouache,
} from '../../../common/Gallery';

class Portfolio extends Component {
  onClose() {
  }

  render() {
    return (
      <div className={styles.component}>
        <h1>Уголь, карандаш</h1>
        <div className={styles.block}>
          <CoalPencil boxClass={styles.box} boxItemClass={styles.boxItem}/>
        </div>
        <h1>Модульные картины</h1>
        <div className={styles.block}>
          <ModularPictures boxClass={styles.box} boxItemClass={styles.boxItem}/>
        </div>
        <h1>Работы маслом</h1>
        <div className={styles.block}>
          <OilWorks boxClass={styles.box} boxItemClass={styles.boxItem}/>
        </div>
        <h1>Photoshop</h1>
        <div className={styles.block}>
          <Photoshop boxClass={styles.box} boxItemClass={styles.boxItem}/>
        </div>
        <h1>Photoshop поэтапно</h1>
        <div className={styles.block}>
          <PhotoshopInStages boxClass={styles.box} boxItemClass={styles.boxItem}/>
        </div>
        <h1>Акварель, гуашь</h1>
        <div className={styles.block}>
          <WatercolorGouache boxClass={styles.box} boxItemClass={styles.boxItem}/>
        </div>
      </div>
    );
  }
}

export default Portfolio;