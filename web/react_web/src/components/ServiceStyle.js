import React, { Component, PropTypes } from 'react';
import './ServiceStyle.css'
import Modal from 'react-modal'
import Product from './Product'

const propTypes = {
};
const defaultProps = {
};

class ServiceStyle extends Component {
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
              <b> Male Styling</b>
            </div>
            <div className="styling-animal-container">
              <div className="styling-text-container" style={{float: "left", marginTop: "10%",marginLeft:"15%"}}>
                <p className="styling-title-text"> CONQUER </p>
                <span className="styling-description"> 비합리성을 자극하는 형상 </span>
              </div>
            </div>
            <div className="text-container-mobile">
              <p className="text-title-mobile"> CONQUER </p>
              <p className="text-subtitle-mobile"> 비합리성을 자극하는 형상</p>
              <br/>
            </div>

            <div className="hair-styling-container">
              <div className="styling-text-container">
                <p className="styling-title-text"> HAIR STYLING </p>
                <p className="styling-body-text">  Partner With </p>
                <p className="styling-description"> @BillycatBarberShopSeoul</p>
              </div>
            </div>
            <div className="text-container-mobile">
              <p className="text-title-mobile"> HAIR STYLING </p>
              <p className="text-subtitle-mobile"> Partner With</p>
              <p className="text-desc-mobile">  @BillycatBarberShopSeoul </p>
            </div>

            <div className="grooming-styling-container">
              <div className="styling-text-container">
                <p className="styling-title-text"> GROOMING </p>
                <p className="styling-body-text">  Partner With </p>
                <p className="styling-description"> @BillycatBarberShopSeoul</p>
                <a className="request-text" onClick={this.handleRequest}>문의하기</a>
              </div>
            </div>
            <div className="text-container-mobile">
              <p className="text-title-mobile"> GROOMING </p>
              <p className="text-subtitle-mobile"> Partner With</p>
              <p className="text-desc-mobile"> @BillycatBarberShopSeoul </p>
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
                 <Product handleModalClose={this.handleModalClose} open_number={3}/>
            </Modal>
          </div>
        );
    }
}
ServiceStyle.propTypes = propTypes;
ServiceStyle.defaultProps = defaultProps;
export default ServiceStyle;
