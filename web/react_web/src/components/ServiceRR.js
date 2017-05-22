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
                  <p className="X-text-title"> Relastionship </p>
                  <p className="X-text-subtitle"> 다시 보고 싶은 나의 여자친구,남자친구 </p>
                  <p className="X-text-desc"> 상대방도 당신이 보고 싶을까요?</p>
                </div>
              </div>

              <div className="sick-container">
                <div className="sick-text-container">
                  <p className="sick-text-title"> Recovery </p>
                  <p className="sick-text-subtitle"> 당신에게 스며든 패배자의 습관 </p>
                  <p className="sick-text-desc"> 잔인하지만, 지금 상태로는 의미 없어요.</p>
                </div>
              </div>
            </div>
        );
    }
}

ServiceRR.propTypes = propTypes;
ServiceRR.defaultProps = defaultProps;

export default ServiceRR;
