import React, { Component, PropTypes } from 'react';
import './ServicePPC.css'
import Modal from 'react-modal'
import Product from './Product'
const propTypes = {
};
const defaultProps = {
};

import drawing_src from '../../public/src/image/publishing/drawing.jpg'
import circle_src from '../../public/src/image/publishing/bokeh.jpg'
import sun_src from '../../public/src/image/publishing/HB_3.jpg'


class ServicePPC extends Component {
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
    // <div className="intro-container"  style={{backgroundImage: "url(" + circle_src + ")"}}>
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
              <div className="intro-container" style={{backgroundImage: "url(" + drawing_src + ")"}}>
                <div className="intro-text-container">
                  <p className="intro-text-title"> HUMAN BRANDING </p>
                  <p className="intro-text-subtitle"> 3ELEMENTZ는 내적, 외적의 근본적인 변화를 추구합니다.</p>
                  <p className="intro-text-subtitle"> 당신이 상상할 수도 없었던 삶을 앞으로 그려나갈 것을 약속합니다.</p>
                </div>
              </div>

              <div className="intro-container" style={{backgroundImage: "url(" + circle_src + ")"}}>
                <div className="intro-text-container" style={{'color': '#ffffff'}}>
                  <p className="intro-text-title"  style={{'color': '#ffffff', }}> <strong>HUMAN BRANDING</strong>의 기대효과 </p>
                  <p className="intro-text-desc"  style={{'color': '#ffffff','fontWeight' : '600'}}>건강한 인간관계 구축, 원하는 이성과의 교제, 관계의 주도권 획득</p>
                  <p className="intro-text-desc"  style={{'color': '#ffffff', 'fontWeight' : '600'}}> 쉽게 흔들리지 않는 사람, 자기표현이 확실한 사람, 객관적으로도 괜찮은 사람</p>
                  <p className="intro-text-subtitle" style={{'marginTop' : "18px", 'color': '#ffffff'}}> 3ELEMENTZ를 체득한 당신의 모습</p>
                </div>
              </div>
              <div className="looser-container">
                <div className="looser-text-container">
                  <div className="text-center-box">
                    <p className="looser-text-subtitle-first"> <strong>HUMAN BRANDING</strong>이 필요하신 분 </p>
                    <p className="looser-text-subtitle"> 1. 이성관계에 매번 실패하시는 분</p>
                    <p className="looser-text-subtitle"> 2. 이성관계를 시작하기가 망설여지는 분</p>
                    <p className="looser-text-subtitle"> 3. 성공적인 인간관계를 구축하고 싶으신 분</p>
                    <p className="looser-text-subtitle"> 4. 매사에 자신감이 부족하신 분</p>
                    <p className="looser-text-subtitle"> 5. 찌질한 이미지를 극복하고 싶으신 분</p>
                    <p className="looser-text-subtitle"> 6. 무엇을 해야 할지 모르시는 분</p>
                    <p className="looser-text-subtitle"> 7. 타 업체 수강 후, 효과를 느끼지 못하신 분</p>
                    <p className="looser-text-subtitle"> 8. 진정한 변화가 간절하신 분</p>
                  </div>
                </div>
              </div>

              <div className="consulting-container">
                <div className="consulting-text-container">
                  <p className="consulting-text-title"> HUMAN BRANDING </p>
                  <p className="consulting-text-desc"> 근본적인 변화 없이는 기적도 마법도 일어나지 않습니다.</p>
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
                   <Product handleModalClose={this.handleModalClose} open_number={1}/>
              </Modal>
            </div>
        );
    }
}

ServicePPC.propTypes = propTypes;
ServicePPC.defaultProps = defaultProps;

export default ServicePPC;
