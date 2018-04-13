import React, {PureComponent} from 'react';
import {Switch, Route} from 'react-router-dom';
import Contact from "./Contact";
import Home from "./Home";
import Info from "./Info";
import Portfolio from "./Portfolio";
import Price from "./Price";

class Body extends PureComponent {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/info' component={Info}/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/price' component={Price}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/' component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default Body;