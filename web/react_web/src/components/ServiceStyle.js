import React, { Component, PropTypes } from 'react';
import './ServiceStyle.css'
const propTypes = {
};
const defaultProps = {
};
class ServiceStyle extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
          <div>
            <div className="styling-animal-container">
              <div className="styling-text-container">
                <p className="styling-title-text"> CONQUER </p>
                <p className="styling-body-text"> 될놈의 와꾸로 </p>
                <p className="styling-description"> 될놈의 상황을 만들자 좀.</p>
              </div>
            </div>
            <br/>
            <div className="styling-container">
              <div className="styling-text-container">
                <p className="styling-title-text"> Male Styling </p>
                <p className="styling-body-text"> 될놈의 와꾸로 </p>
                <p className="styling-description"> 될놈의 상황을 만들자 좀.</p>
              </div>
            </div>
          </div>
        );
    }
}
ServiceStyle.propTypes = propTypes;
ServiceStyle.defaultProps = defaultProps;
export default ServiceStyle;
