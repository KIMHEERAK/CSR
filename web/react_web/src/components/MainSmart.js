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
    console.log('work')
    Router.push()
  }

  render() {
    return (
          <div>
            <div>
              <Router>
                <div>
                  <b > <Link className="company-Header" to="/" onClick={this.handLink}>3.ELEMENTZ</Link> </b>
                  <div className="App-header">
                    <b > <Link className="Text-Header" to="/service" onClick={this.handLink}>SERVICE</Link> </b>
                    <b > <Link className="Text-Header" to="/column" onClick={this.handLink}>COLUMN</Link> </b>
                    <b > <Link className="Text-Header" to="/media">MEDIA</Link> </b>
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
                <b className="Text-footer1"> © 3.ELEMENTZ LAB - ALL RIGHTS RESERVED<br/></b>
                <b className="Text-footer2"> 사업자등록번호 : 000-00-0000 | 통신판매업신고번호 : 제 0000-서울강남-00000호 | 대표이사 : ERIC WHITE | 주소 : 서울 특별시 강남구 영동대로 0000(삼성동, 될놈타워 0000) | <br/></b>
                <b className="Text-footer2"> 대표전화 : 010-0000-0000</b>
              </div>
          </div>
        </div>
    );
  }
}

export default MainSmart;
