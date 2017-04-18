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
                  <p className="looser-title-text"> Look </p>
                  <p className="looser-body-text"> 당신은 얼마나 안될놈이신가요?</p>
                  <p className="looser-description"> 찌찔하다. 병신같다. 그게 너다.</p>
                </div>
                <br/>
              </div>

              <div className="consulting-container">
                <div className="consulting-text-container">
                  <p className="consulting-title-text"> Consulting </p>
                  <p className="consulting-body-text"> 안될놈의 '안'을 빼다. </p>
                  <p className="consulting-description"> 마법의 멘트, 마법의 데이트 장소...?</p>
                  <p className="consulting-description"> CSR에서는 안될놈에서 뭘 해도 될놈으로 만들어드립니다. </p>
                </div>
              </div>
            </div>
        );
    }
}

ServicePPC.propTypes = propTypes;
ServicePPC.defaultProps = defaultProps;

export default ServicePPC;
