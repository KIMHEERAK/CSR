import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import HomeSmart from './components/HomeSmart'
import ColumnSmart from './components/ColumnSmart'
import YoutubeSmart from './components/YoutubeSmart'
import ServiceSmart from './components/ServiceSmart'

class App extends Component {
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
                  <div className="App-header">
                    <b > <Link className="Text-Header" to="/">3.elementz</Link> </b>
                    <b > <Link className="Text-Header" to="/service" onClick={this.handLink}>Service</Link> </b>
                    <b > <Link className="Text-Header" to="/column" onClick={this.handLink}>Column</Link> </b>
                    <b > <Link className="Text-Header" to="/media">Media</Link> </b>
                  </div>
                    <Route exact path="/" component={HomeSmart}/>
                    <Route path="/service" component={ServiceSmart}/>
                    <Route path="/column" component={ColumnSmart}/>
                    <Route path="/media" component={YoutubeSmart}/>
                </div>
              </Router>
            </div>

          <div className="App-footer">
              <div>
                <b className="Text-footer1"> © 3.ELEMENTZ LAB - ALL RIGHTS RESERVED<br/></b>
                <b className="Text-footer2"> 사업자등록번호 : 000-00-0000 | 통신판매업신고번호 : 제 0000-서울강남-00000호 | 대표이사 : ERIC BACK | 주소 : 서울 특별시 강남구 영동대로 0000(삼성동, 될놈타워 0000) | <br/></b>
                <b className="Text-footer2"> 대표전화 : 010-0000-0000</b>
              </div>
          </div>
        </div>
    );
  }
}

export default App;
