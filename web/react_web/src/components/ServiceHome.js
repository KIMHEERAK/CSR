import React, { Component, PropTypes } from 'react'
import { BrowserRouter as Router, Route, Link, IndexRoute } from 'react-router-dom'
import ServicePPC from './ServicePPC'
import ServiceRR from './ServiceRR'
import ServiceStyle from './ServiceStyle'
import { slide as Menu } from 'react-burger-menu'
import './ServiceHome.css'

const propTypes = {
};
const defaultProps = {
};

class ServiceHome extends Component {
    constructor(props) {
        super(props);

        this.handLink=this.handLink.bind(this);
    }

    handLink() {
       //console.log('work');
      Router.push();
    }
    render() {
        return(
            <div>
              <div>
              <Router>
                <div>
                  <div className="burger-box">
                    <b> SERVICE</b>
                  </div>
                    <div className="Branding-container">
                      <div className="Branding-text-block">
                        <b className="Branding-text-title"> Human Branding</b>
                        <b className="Branding-text-subtitle"> 전환의 시작이자 완성</b>
                        <b> <Link className="Branding-text-link" to="/service/branding" onClick={this.handLink}>자세히 보기</Link> </b>
                      </div>
                    </div>
                    <div className="Branding-text-block-mobile">
                      <b className="Branding-text-title-mobile"> Human Branding</b>
                      <b className="Branding-text-subtitle-mobile"> 전환의 시작이자 완성</b>
                      <b> <Link className="Branding-text-link-mobile" to="/service/branding" onClick={this.handLink}>자세히 보기</Link> </b>
                    </div>

                    <div className="Homerun-container">
                      <div className="Homerun-text-block">
                        <b className="Homerun-text-title"> PU-101</b>
                        <b className="Homerun-text-subtitle">이성관계의 기초 가이드</b>
                        <b> <Link className="Branding-text-link" to="/service/run" onClick={this.handLink}>자세히 보기</Link> </b>
                      </div>
                    </div>
                    <div className="Branding-text-block-mobile">
                      <b className="Branding-text-title-mobile"> PU-101</b>
                      <b className="Branding-text-subtitle-mobile">이성관계의 기초 가이드</b>
                      <b> <Link className="Branding-text-link-mobile" to="/service/run" onClick={this.handLink}>자세히 보기</Link> </b>
                    </div>

                      <div className="Recovery-container">
                        <div className="Branding-text-block">
                          <b className="Recovery-text-title"> Relastionship Recovery</b>
                          <b className="Recovery-text-subtitle"> 균형의 재정립</b>
                          <b> <Link className="Branding-text-link-black" to="/service/rr" onClick={this.handLink}>자세히 보기</Link> </b>
                        </div>
                      </div>
                      <div className="Branding-text-block-mobile">
                        <b className="Branding-text-title-mobile"> Relastionship Recovery</b>
                        <b className="Branding-text-subtitle-mobile"> 균형의 재정립</b>
                        <b> <Link className="Branding-text-link-mobile" to="/service/rr" onClick={this.handLink}>자세히 보기</Link> </b>
                      </div>

                      <div className="Styling-container">
                        <div className="Branding-text-block">
                          <b className="Branding-text-title"> Male Styling</b>
                          <b className="Branding-text-subtitle"> 수컷의 모습을 입히다</b>
                          <b> <Link className="Branding-text-link" to="/service/styling" onClick={this.handLink}>자세히 보기</Link> </b>
                        </div>
                      </div>
                      <div className="Branding-text-block-mobile">
                        <b className="Branding-text-title-mobile"> Male Styling</b>
                        <b className="Branding-text-subtitle-mobile"> 수컷의 모습을 입히다</b>
                        <b> <Link className="Branding-text-link-mobile" to="/service/styling" onClick={this.handLink}>자세히 보기</Link> </b>
                      </div>
                </div>
              </Router>
            </div>

            </div>
        );
    }
}

ServiceHome.propTypes = propTypes;
ServiceHome.defaultProps = defaultProps;

export default ServiceHome;
