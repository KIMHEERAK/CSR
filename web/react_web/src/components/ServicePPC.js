import React, { Component, PropTypes } from 'react';
import './ServicePPC.css'

import backImage from  '../../public/src/image/images.jpg';


const propTypes = {
};
const defaultProps = {
};

class ServicePPC extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
              <div className="looser-container">
                <div className="looser-text-container">
                  <p className="looser-text-title"> LOOK </p>
                  <p className="looser-text-subtitle"> 당신은 얼마나 안될놈이신가요?</p>
                  <p className="looser-text-desc"> 지금까지 그래왔으니, 앞으로도 그럴 거예요. </p>
                </div>
              </div>

              <div className="consulting-container">
                <div className="consulting-text-container">
                  <p className="consulting-text-title"> BRANDING </p>
                  <p className="consulting-text-subtitle"> 안될놈의 '안'을 빼다. </p>
                  <p className="consulting-text-desc"> 근본적인 변화없이는 기적도 마법도 일어나지 않습니다.</p>
                  <a className="request-text">Relationship-Recovery 문의하기 ></a>
                </div>
              </div>
            </div>
        );
    }
}

ServicePPC.propTypes = propTypes;
ServicePPC.defaultProps = defaultProps;

export default ServicePPC;
