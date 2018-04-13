import React, {PureComponent} from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Body from "./Body/Body";
import styles from './styles.module.sass';
import {Route} from 'react-router-dom'

class Main extends PureComponent {
  render() {
    return (
      <div className={styles.component}>
        <div>
          <Header/>
          <Route component={Body}/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Main;