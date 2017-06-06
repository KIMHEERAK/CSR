import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import './MainSmart.css'
import App from '../App'
import ColumnSmart from './ColumnSmart'
import YoutubeSmart from './YoutubeSmart'
import ServiceSmart from './ServiceSmart'

class MainSmart extends Component {
  constructor(props) {
      super(props);

      this.handLink=this.handLink.bind(this);

  }

  handLink() {
    // console.log('work')
    Router.push()
  }


  render() {
    return (
          <div>
            <div>
              <Router>
                <div>
                  <b > <Link className="company-Header" to="/" onClick={this.handLink}>3ELEMENTZ</Link> </b>
                  <div className="App-header">
                    <ul className="header-ul">
                      <li className="header-li"> <Link className="Text-Header" to="/service" onClick={this.handLink}>SERVICE</Link> </li>
                      <li className="header-li"> <Link className="Text-Header" to="/column" onClick={this.handLink}>COLUMN</Link> </li>
                      <li className="header-li"> <Link className="Text-Header" to="/media">MEDIA</Link> </li>
                    </ul>
                  </div>
                    <Route exact path="/" component={App}/>
                    <Route path="/service" component={ServiceSmart}/>
                    <Route path="/column" component={ColumnSmart}/>
                    <Route path="/media" component={YoutubeSmart}/>
                </div>
              </Router>
            </div>

          <div className="App-footer">
              <div>
                <b className="Text-footer1"> © 3ELEMENTZ LAB - ALL RIGHTS RESERVED<br/></b>
                <b className="Text-footer2"> 사업자등록번호 : 594-03-00637 | 대표이사 : 백세혁 | 주소 : 경기도 의왕시 동부시장5길 54, 101호 | <br/></b>
                <b className="Text-footer2"> 대표전화 : 010-8361-4003</b>
              </div>
          </div>
        </div>
    );
  }
}

export default MainSmart;
