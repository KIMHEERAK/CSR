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
              <div className="X-container">
                <div className="X-text-container">
                  <p className="X-text-title"> RELASTIONSHIP </p>
                  <p className="X-text-subtitle"> 다시 보고 싶은 나의 여자친구,남자친구 </p>
                  <p className="X-text-desc"> 상대방도 당신이 보고 싶을까요?</p>
                </div>
              </div>

              <div className="sick-container">
                <div className="sick-text-container">
                  <p className="sick-text-title"> RECOVERY </p>
                  <p className="sick-text-subtitle"> 당신에게 스며든 패배자의 습관 </p>
                  <p className="sick-text-desc"> 잔인하지만, 지금 상태로는 의미 없어요.</p>
                  <a className="request-text-black" onClick={this.handleRequest}>문의하기</a>
                </div>
              </div>

              <Modal
                   isOpen={this.state.modal_flag}
                   contentLabel="Product_Page"
                   onRequestClose={this.handleModalClose}
                   style={{
                    overlay: {
                      backgroundColor: ''
                    },
                    content: {
                      position: "absolute",
                      top: (window.innerHeight*0.1)+"px",
                      left: (window.innerWidth*0.2)+"px",
                      right: (window.innerWidth*0.2)+"px",
                      bottom: (window.innerHeight*0.1)+"px",
                      padding: 0
                    }
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
