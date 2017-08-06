import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './MainSmart.css'
import App from '../App'
import ColumnSmart from './ColumnSmart'
import ReviewSmart from './ReviewSmart'
import ServiceSmart from './ServiceSmart'
import Effect from './Effect'
import { slide as Menu } from 'react-burger-menu'
import Collapsible from 'react-collapsible'
import Modal from 'react-modal'
import Product from './Product'

class MainSmart extends Component {
  constructor(props) {
      super(props);
      this.state = {
        // modal_flag false => close , true => open
        modal_flag : false,
      }

      this.handleRequest = this.handleRequest.bind(this)
      this.handleModalClose = this.handleModalClose.bind(this)
      this.handLink=this.handLink.bind(this);

  }

  handLink() {
    // console.log('work')
    Router.push()
  }

  handleRequest() {
    this.setState({modal_flag: true})
  }

  handleModalClose() {
    this.setState({modal_flag:false})
  }


  render() {
    return (
          <div>
            <Menu right width={'100%'}>
              <Collapsible
                open = {false}
                trigger="SERVICE">
                <a id="hb" className="menu-item" href="/service/branding">H-BRANDING</a>
                <a id="rr" className="menu-item" href="/service/rr">R-RECOVERY</a>
                <a id="ms" className="menu-item" href="/service/styling">M-STYLING</a>
              </Collapsible>
              <a id="center" className="menu-item-big-first" href="/effect">EFFECT</a>
              <Collapsible
                open = {false}
                trigger="COLUMN">
                <a id="intro" className="menu-item" href="/column/0">3ELEMENTZ</a>
                <a id="stroy" className="menu-item" href="/column/1">ERIC STORY</a>
                <a id="center" className="menu-item" href="/column/2">CENTER</a>
                <a id="MIND" className="menu-item" href="/column/3">MIND</a>
                <a id="MIND" className="menu-item" href="/column/4">SAFE</a>
                <a id="MIND" className="menu-item" href="/column/5">SWAMP</a>
              </Collapsible>
              <Collapsible
                open = {false}
                trigger="REVIEW">
                <a id="intro" className="menu-item" href="/review/0">MASTER</a>
                <a id="stroy" className="menu-item" href="/review/1">PLAYER</a>
                <a id="center" className="menu-item" href="/review/2">DRIVER</a>
                <a id="center" className="menu-item" href="/review/3">CALIBE</a>
                <a id="center" className="menu-item" href="/review/4">GARDENER</a>
              </Collapsible>
                <span id="contact" className="menu-item-big-first" onClick={this.handleRequest}>CONTACT</span>
            </Menu>
            <div>
              <Router>
                <div>
                  <b > <Link className="company-Header" to="/" onClick={this.handLink}>3ELEMENTZ</Link> </b>
                  <div className="App-header">
                    <ul className="header-ul">
                      <li className="header-li"> <Link className="Text-Header" to="/service" onClick={this.handLink}>SERVICE</Link> </li>
                      <li className="header-li"> <Link className="Text-Header" to="/effect">EFFECT</Link> </li>
                      <li className="header-li"> <Link className="Text-Header" to="/column" onClick={this.handLink}>COLUMN</Link> </li>
                      <li className="header-li"> <Link className="Text-Header" to="/review">REVIEW</Link> </li>
                      <li className="header-li"> <span className="Text-Header" onClick={this.handleRequest}>CONTACT</span> </li>
                    </ul>
                  </div>
                    <Route exact path="/" component={App}/>
                    <Route path="/service" component={ServiceSmart}/>
                    <Route path="/effect" component={Effect}/>
                    <Route path="/column" component={ColumnSmart}/>
                    <Route path="/review" component={ReviewSmart}/>
                </div>
              </Router>
            </div>

          <div className="App-footer">
              <div>
                <b className="Text-footer1"> © 3ELEMENTZ LAB - ALL RIGHTS RESERVED<br/></b>
                <b className="Text-footer2"> 사업자등록번호 : 594-03-00637 | 대표이사 : 백세혁 | 주소 : 경기도 의왕시 내손동 664-1 1F | <br/></b>
                <b className="Text-footer2"> 대표전화 : 010-8361-4003</b>
              </div>
          </div>
          <div className="App-footer-mobile">
              <div>
                <b className="Text-footer-mobile"> © 3ELEMENTZ LAB - ALL RIGHTS RESERVED<br/></b>
                <b className="Text-footer-mobile"> 사업자등록번호 : 594-03-00637  <br/></b>
                <b className="Text-footer-mobile"> 대표이사 : 백세혁  <br/></b>
                <b className="Text-footer-mobile"> 주소 : 경기도 의왕시 내손동 664-1 1F  <br/></b>
                <b className="Text-footer-mobile"> 대표전화 : 010-8361-4003</b>
              </div>
          </div>
          <Modal
               isOpen={this.state.modal_flag}
               contentLabel="Product_Page"
               onRequestClose={this.handleModalClose}
               className={{
                  base: 'myClass',
                  afterOpen: 'myClass_after-open',
                  beforeClose: 'myClass_before-close'
                }}
                overlayClassName={{
                  base: 'myOverlayClass',
                  afterOpen: 'myOverlayClass_after-open',
                  beforeClose: 'myOverlayClass_before-close'
                }}>
               <Product handleModalClose={this.handleModalClose}/>
          </Modal>
        </div>
    );
  }
}

export default MainSmart;
