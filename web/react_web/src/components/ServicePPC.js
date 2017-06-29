import React, { Component, PropTypes } from 'react';
import './ServicePPC.css'
import Modal from 'react-modal'
import Product from './Product'
const propTypes = {
};
const defaultProps = {
};

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

    render() {
        return(
            <div>
              <div className="burger-box">
                <b> Human Branding</b>
              </div>
              <div className="looser-container">
                <div className="looser-text-container">
                  <p className="looser-text-title"> LOOK </p>
                  <p className="looser-text-subtitle"> 당신의 현재모습은 어떠한가요?</p>
                  <p className="looser-text-desc"> 지금까지 그래왔으니, 앞으로도 그럴 거예요. </p>
                </div>
              </div>
              <div className="text-container-mobile">
                <p className="text-title-mobile"> LOOK </p>
                <p className="text-subtitle-mobile"> 당신의 현재모습은 어떠한가요?</p>
                <p className="text-desc-mobile"> 지금까지 그래왔으니, 앞으로도 그럴 거예요. </p>
                <br/>
                <br/>
              </div>

              <div className="consulting-container">
                <div className="consulting-text-container">
                  <p className="consulting-text-title"> HUMAN BRANDING </p>
                  <p className="consulting-text-desc"> 근본적인 변화없이는 기적도 마법도 일어나지 않습니다.</p>
                  <a className="request-text" onClick={this.handleRequest}>문의하기</a>
                </div>
              </div>
              <div className="text-container-mobile">
                <p className="text-title-mobile"> HUMAN BRANDING </p>
                <p className="text-desc-mobile"> 근본적인 변화없이는 기적도 마법도 일어나지 않습니다. </p>
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
                   <Product handleModalClose={this.handleModalClose} open_number={1}/>
              </Modal>
            </div>
        );
    }
}

ServicePPC.propTypes = propTypes;
ServicePPC.defaultProps = defaultProps;

export default ServicePPC;
