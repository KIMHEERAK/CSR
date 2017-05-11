import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import ColumnSmart from './components/ColumnSmart'
import YoutubeSmart from './components/YoutubeSmart'
import ServiceSmart from './components/ServiceSmart'
import DoorSlider from './DoorSlider'
import MainSmart from './components/MainSmart'
import './App.css'

import SignImage from '../public/src/image/sign.JPG'
const propTypes = {
};
const defaultProps = {
};

const Home = () => (
  <div>
      <div className="door-company-sign-container">
        <img src={SignImage}/>
      </div>

      <div>
        <DoorSlider/>
      </div>

      <div className="door-list-container">
        <ul>
          <Link className="door-list-text-first" to='/service'>SERVICE</Link>
          <Link className="door-list-text" to='/column'>COLUMN</Link>
          <Link className="door-list-text" to='/media'>MEDIA</Link>
        </ul>
      </div>

      <div>
        <p> 3element Lab은 ERIC WHITE와 그 연구원들이 함께 인간관계의 본질을 탐구하기 위해, 다양한 시각과 면모를 지니고 있습니다. </p>
      </div>

      <div className="door-company-title-container">
        <b className="door-company-title-text">3.ELEMENTZ</b>
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
