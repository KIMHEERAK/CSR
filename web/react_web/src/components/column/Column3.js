import React, { Component, PropTypes } from 'react';
import './Column.css'

import SignImage from '../../../public/src/image/publishing/sign.JPG'
import testImage0 from '../../../public/src/image/publishing/gardener.jpg'
import ring_image from '../../../public/src/image/publishing/ring2.jpg'

const propTypes = {
};
const defaultProps = {
};

class Column3 extends Component {
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
                <h1 className="column-text-title">MIND</h1>
                  <h3 className="column-text-subtitle"> 실전에 임하는 마음가짐</h3>
              </div>

              <div className="column-image-container">
                <img className="column-image" key={ring_image} src={ring_image}/>
              </div>

              <div className="column-text-container">
                <b className="column-body-title"> 연습과 본게임 </b>
                <p className="column-body-desc"> 연습때는 모든 것을 쥐고 있어도 되지만 본게임에서는 모든 것을 내려놓아야 한다. </p>
                <p className="column-body-desc"> 모든 것을 내려놓아야 비로소 <strong>자유</strong>를 얻을수 있고 자유로워 졌을때 진정한 <strong>자신</strong>을 찾을 수 있다.</p>
                <p className="column-body-desc"> 무얼하든 가장 나다울 때 가장 큰 성과가 나타난다.</p>
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
Column3.propTypes = propTypes;
Column3.defaultProps = defaultProps;
export default Column3;
