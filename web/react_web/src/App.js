import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import ColumnSmart from './components/ColumnSmart'
import YoutubeSmart from './components/YoutubeSmart'
import ServiceSmart from './components/ServiceSmart'
import DoorSlider from './DoorSlider'
import MainSmart from './components/MainSmart'
import './App.css'

import SignImage from '../public/src/image/publishing/sign.JPG'
const propTypes = {
};
const defaultProps = {
};

const Home = () => (
  <div className="test">
      <div className="door-company-sign-container">
        <img src={SignImage}/>
      </div>

      <div>
        <DoorSlider/>
      </div>

      <div className="door-list-container">
        <ul className="door-list-ul">
          <li className="door-list-li"><Link className="door-list-text-first" to='/service'>SERVICE</Link></li>
          <li className="door-list-li"><Link className="door-list-text-first" to='/column'>COLUMN</Link></li>
          <li className="door-list-li"><Link className="door-list-text-first" to='/media'>MEDIA</Link></li>
        </ul>
      </div>

      <div>
        <p className="door-company-text-desc"> 3ELEMENTZ LAB IS A LABOTARY THAT STUDIES DEEP INTO NATURE AND ESSENTIALS <br/>OF HUMAN RELASTIONSHIP BY ERIC WHITE AND ITS RESEARCHERS.</p>
      </div>

      <div className="door-company-title-container">
        <b className="door-company-title-text">3ELEMENTZ</b>
      </div>
  </div>
)

class HomeNav extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route path='/service' component={MainSmart}/>
                  <Route path='/column' component={MainSmart}/>
                  <Route path='/media' component={MainSmart}/>
                </Switch>
            </div>
        );
    }
}

class App extends Component {
    constructor(props) {
        super(props);

    }

    handLink() {
      console.log('work')
    }

    shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
    return true;
    }

    render() {
        return(
            <div>
              <Router>
                <Route component={HomeNav} />
              </Router>
            </div>
        );
    }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
