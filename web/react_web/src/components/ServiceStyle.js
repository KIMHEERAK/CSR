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

            <div className="styling-animal-container">
              <div className="styling-text-container">
                <p className="styling-title-text"> CONQUER </p>
                <span className="styling-description"> 비합리성을 자극하는 형상 </span>
              </div>
            </div>

            <div className="hair-styling-container">
              <div className="styling-text-container">
                <p className="styling-title-text"> HAIR STYLING </p>
                <p className="styling-body-text">  Partner With </p>
                <p className="styling-description"> @BillycatBarberShopSeoul</p>
              </div>
            </div>

            <div className="grooming-styling-container">
              <div className="styling-text-container">
                <p className="styling-title-text"> GROOMING </p>
                <p className="styling-body-text">  Partner With </p>
                <p className="styling-description"> @BillycatBarberShopSeoul</p>
                <a className="request-text" onClick={this.handleRequest}>문의하기</a>
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
                 <Product handleModalClose={this.handleModalClose} open_number={3}/>
            </Modal>
          </div>
        );
    }
}
ServiceStyle.propTypes = propTypes;
ServiceStyle.defaultProps = defaultProps;
export default ServiceStyle;
