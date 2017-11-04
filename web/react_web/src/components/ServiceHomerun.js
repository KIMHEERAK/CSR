import React, { Component, PropTypes } from 'react';
import './ServiceHomerun.css'
import Modal from 'react-modal'
import Product from './Product'
const propTypes = {
};
const defaultProps = {
};

import deram_src from '../../public/src/image/publishing/dream.jpg'
import growing_src from '../../public/src/image/publishing/growing.jpg'
import baseball_src from '../../public/src/image/publishing/baseball.jpg'


class ServiceHomerun extends Component {
    constructor(props) {
        super(props);

        this.state = {
          // modal_flag false => close , true => open
          modal_flag : false,
        }

        this.handleRequest = this.handleRequest.bind(this)
        this.handleModalClose = this.handleModalClose.bind(this)
    }

    handleRequest() {
      this.setState({modal_flag: true})
    }

    handleModalClose() {
      this.setState({modal_flag:false})
    }

    componentWillMount() {
    }
    // <div className="intro-container"  style={{backgroundImage: "url(" + growing_src + ")"}}>
    //   <div className="intro-text-container">
    //     <p className="intro-text-title"> STARTING POINT </p>
    //     <p className="intro-text-subtitle">3ELEMENTZ 기반의 정확한 진단은 성공적인 변화의 시작을 알립니다.</p>
    //     <p className="intro-text-desc"> Positioning, Naturalism, Humansism에 입각하여 각 요소의 보완점을 개선 </p>
    //   </div>
    // </div>

    render() {
        return(
            <div>
              <div className="burger-box">
                <b> Human Branding</b>
              </div>
              <div className="mobile-margin-top">
              </div>
              <div className="intro-container" style={{backgroundImage: "url(" + deram_src + ")"}}>
                <div className="intro-text-container">
                  <p className="intro-text-title"> PU-101</p>
                  <p className="intro-text-subtitle"> 사람이 단기간에 체화할 수 있는 양은 한정되어 있습니다.</p>
                  <p className="intro-text-subtitle"> 3ELEMENTZ는 단기간에 체화시켜 바로 적용할 수 있는 실질적인 픽업이론으로 당신의 직관적 능력을 향상시켜 드리겠습니다.</p>
                </div>
              </div>

              <div className="intro-container" style={{backgroundImage: "url(" + growing_src + ")"}}>
                <div className="intro-text-container" style={{'color': '#ffffff'}}>
                  <p className="intro-text-title"  style={{'color': '#ffffff', }}> <strong>PU-101</strong>의 기대효과 </p>
                  <p className="intro-text-desc"  style={{'color': '#ffffff','fontWeight' : '600'}}>낮은 확률의 대폭 상승, 스타일 개선, 찌질한 바이브 탈피</p>
                  <p className="intro-text-desc"  style={{'color': '#ffffff', 'fontWeight' : '600'}}>이너 & 아우터 게임의 강화로 인한 필드에서의 아웃풋 도출</p>
                  <p className="intro-text-subtitle" style={{'marginTop' : "18px", 'color': '#ffffff'}}> "3ELEMENTZ가 제안하는 픽업의 베이직 가이드"</p>
                </div>
              </div>
              <div className="default-container">
                <div className="default-text-container">
                  <div className="text-center-box">
                    <p className="default-text-subtitle-first"> <strong>PU-101</strong>가 필요하신 분 </p>
                    <p className="default-text-subtitle"> 1. 낮은 확률로 고통을 겪고 계신 분</p>
                    <p className="default-text-subtitle"> 2. #클로즈는 되는데 F클로즈가 안되시는 분</p>
                    <p className="default-text-subtitle"> 3. 매번 쉴드에 좌절하시는 분</p>
                    <p className="default-text-subtitle"> 4. 경험은 있으나 기본이 부족하신 분</p>
                    <p className="default-text-subtitle"> 5. 제대로된 픽업을 수강하고 싶으신 분</p>
                    <p className="default-text-subtitle"> 6. 여자친구가 없으신 분</p>
                    <p className="default-text-subtitle"> 7. 스타일 개선이 필요하신 분</p>
                    <p className="default-text-subtitle"> 8. 될 때도 있지만, 안 될 때가 더 많으신 분</p>
                  </div>
                </div>
              </div>

              <div className="intro-container"  style={{backgroundImage: "url(" + baseball_src + ")", textShadow: '0.5px 0.5px #000000'}}>
                <div className="intro-text-container">
                  <p className="intro-text-title" style={{marginBottom : '10px'}}> PU-101 </p>
                  <p className="intro-text-desc" style={{marginBottom : '20px'}}> 근본적인 변화 없이는 기적도 마법도 일어나지 않습니다.</p>
                  <a className="request-text" onClick={this.handleRequest}>문의하기</a>
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
                   <Product handleModalClose={this.handleModalClose} open_number={4}/>
              </Modal>
            </div>
        );
    }
}

ServiceHomerun.propTypes = propTypes;
ServiceHomerun.defaultProps = defaultProps;

export default ServiceHomerun;
