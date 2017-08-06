import React, { Component, PropTypes } from 'react';
import './Effect.css'
import Modal from 'react-modal'
import Product from './Product'

const propTypes = {
};
const defaultProps = {
};

class Effect extends Component {
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
                <b>EFFECT</b>
              </div>
              <div className="E-container">
                <div className="E-text-container">
                  <p className="E-text-title">COMING SOON</p>
                </div>
              </div>
              <div className="E-container-mobile">
                <p className="E-text-mobile">COMING SOON</p>
                <br/>
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

Effect.propTypes = propTypes;
Effect.defaultProps = defaultProps;

export default Effect;
