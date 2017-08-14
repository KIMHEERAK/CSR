import React, { Component, PropTypes } from 'react';
import './ServiceRR.css'
import Modal from 'react-modal'
import Product from './Product'

const propTypes = {
};
const defaultProps = {
};

class ServiceRR extends Component {
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

    render() {
        return(
            <div>
              <div className="burger-box">
                <b>Relationship Recovery</b>
              </div>
              <div className="X-container">
                <div className="X-text-container">
                  <p className="X-text-title"> RELATIONSHIP </p>
                  <p className="X-text-subtitle">처음부터 나쁘진 않았습니다.</p>
                  <p className="X-text-desc">좋았던 그 시절로 돌아가고 싶으신가요?</p>
                </div>
              </div>
              <div className="text-container-mobile">
                <p className="text-title-mobile"> RELATIONSHIP </p>
                <p className="text-subtitle-mobile">처음부터 나쁘진 않았습니다.</p>
                <p className="text-desc-mobile">좋았던 그 시절로 돌아가고 싶으신가요?</p>
                <br/>
              </div>

              <div className="sick-container">
                <div className="sick-text-container">
                  <p className="sick-text-title"> RECOVERY </p>
                  <p className="sick-text-subtitle"> 당신에게 스며든 패배자의 습관 </p>
                  <p className="sick-text-desc"> 잔인하지만, 지금 상태로는 어렵겠네요.</p>
                  <a className="request-text-black" onClick={this.handleRequest}>문의하기</a>
                </div>
              </div>
              <div className="text-container-mobile">
                <p className="text-title-mobile"> RECOVERY </p>
                <p className="text-subtitle-mobile"> 당신에게 스며든 패배자의 습관</p>
                <p className="text-desc-mobile"> 잔인하지만, 지금 상태로는 어렵겠네요. </p>
                <a className="request-text-mobile" onClick={this.handleRequest}>문의하기</a>
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
                   <Product handleModalClose={this.handleModalClose} open_number={2}/>
              </Modal>
            </div>
        );
    }
}

ServiceRR.propTypes = propTypes;
ServiceRR.defaultProps = defaultProps;

export default ServiceRR;
