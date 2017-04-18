import React, { Component, PropTypes } from 'react';
import './ServiceRR.css'

const propTypes = {
};
const defaultProps = {
};

class ServiceRR extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
              <div className="X-container">
                <div className="X-text-container">
                  <p className="X-title-text"> Relastionship </p>
                  <p className="X-body-text"> 다시 보고 싶은 나의 여자친구,남자친구 </p>
                  <p className="X-description"> 상대방도 당신이 보고 싶을까요?</p>
                </div>
              </div>

              <div className="sick-container">
                <div className="sick-text-container">
                  <p className="sick-title-text"> Recovery </p>
                  <p className="sick-body-text"> 당신에게 스며든 안될놈의 습관 </p>
                  <p className="sick-description"> 잔인하지만, 그대로라면 살려도 의미 없어요.</p>
                </div>
              </div>
            </div>
        );
    }
}

ServiceRR.propTypes = propTypes;
ServiceRR.defaultProps = defaultProps;

export default ServiceRR;
