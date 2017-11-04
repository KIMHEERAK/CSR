import React, { Component, PropTypes } from 'react';
import './Column.css'

import SignImage from '../../../public/src/image/publishing/sign.JPG'
import testImage0 from '../../../public/src/image/publishing/gardener.jpg'
import fear_imag from '../../../public/src/image/publishing/octagon.jpg'

const propTypes = {
};
const defaultProps = {
};

class Column6 extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
          <div>
            <div className="burger-box">
              <b>COLUMN</b>
            </div>
              <div className="column-title-container">
                <h1 className="column-text-title">ANXIETY</h1>
                <h3 className="column-text-subtitle">EVASTION & RECOGNITION</h3>
              </div>

              <div className="column-image-container">
                <img className="column-image" key={fear_imag} src={fear_imag}/>
              </div>

              <div className="column-text-container" style={{ borderBottom : 'none', marginBottom : '0px'}}>
                <b className="column-body-title"> Anxiety </b>
                <p className="column-body-desc"> 떨림을 <strong>인정</strong>하라.</p>
                <p className="column-body-desc"> <strong>부정</strong>하면 <strong>부정</strong>할수록 너의 마음속 부담감은 가중될 것이다,</p>
              </div>
              <div>
                <img className="column-bottom-sign" src={SignImage}/>
              </div>
              <div className="empty-container">
              </div>
          </div>
        );
    }
}
Column6.propTypes = propTypes;
Column6.defaultProps = defaultProps;
export default Column6;
