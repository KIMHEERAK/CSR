import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import ColumnSmart from './components/ColumnSmart'
import YoutubeSmart from './components/YoutubeSmart'
import ServiceSmart from './components/ServiceSmart'
import Effect from './components/Effect'
import DoorSlider from './DoorSlider'
import MainSmart from './components/MainSmart'
import './App.css'
import { slide as Menu } from 'react-burger-menu'
import {Helmet} from "react-helmet";
import SignImage from '../public/src/image/publishing/sign.JPG'

const propTypes = {
};
const defaultProps = {
};

const Home = () => (
  <div className="door-box">
      <Menu right width={'100%'}>
        <a id="3ELEMENTZ" className="menu-item" href="/">3ELEMENTZ</a>
        <a id="SERVICE" className="menu-item" href="/service">SERVICE</a>
        <a id="COLUMN" className="menu-item" href="/column">COLUMN</a>
        <a id="REVIEW" className="menu-item" href="/review">REVIEW</a>

      </Menu>
      <div className="door-company-title-container">
        <b className="door-company-title-text">3ELEMENTZ</b>
      </div>

      <div className="slider-box">
        <DoorSlider/>
      </div>

      <div className="door-list-container">
        <ul className="door-list-ul">
          <li className="door-list-li"><Link className="door-list-text-first" to='/service'>SERVICE</Link></li>
          <li className="door-list-li"><Link className="door-list-text-first" to='/column'>COLUMN</Link></li>
          <li className="door-list-li"><Link className="door-list-text-first" to='/review'>REVIEW</Link></li>

        </ul>
      </div>

      <div>
        <p className="door-company-text-desc"> 3ELEMENTZ LAB IS AN LABOTARY THAT GOES DEEP INTO THE STUDY OF THE NATURE AND ESSENTIALS OF HUMAN RELATIONSHIP BY ERIC WHITE AND HIS RESEARCHERS.</p>
      </div>

      <div className="door-company-sign-container">
        <img src={SignImage}/>
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
                  <Route path='/review' component={MainSmart}/>
                  <Route path='/effect' component={MainSmart}/>
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
    }

    shouldComponentUpdate(nextProps, nextState){
    // console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
    return true;
    }

    render() {
        return(
            <div>
              <Helmet>
                <meta charSet="utf-8" />
                <title>3ELEMENTZ</title>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            </Helmet>
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
