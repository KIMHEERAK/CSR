import React, { Component, PropTypes } from 'react';
import './Column.css'

import testImage0 from  '../../../public/src/image/column_intro/research.jpg';
import SignImage from '../../../public/src/image/publishing/sign.JPG'

const propTypes = {
};
const defaultProps = {
};

class Column2 extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
          <div>
              <div className="column-title-container">
                <h1 className="column-text-title">CENTER</h1>
                  <h3 className="column-text-subtitle">중심에 대한 고찰</h3>
              </div>

              <div className="column-image-container">
                <img className="column-image" key={testImage0} src={testImage0}/>
              </div>

              <div className="column-text-container">
                <b className="column-body-title"> 중심 </b>
                <p className="column-body-desc"> 멘탈이 강한 사람은 자신감도 있지만 자신감 있는 사람이 멘탈도 강한 것은 아니다. </p>
                <p className="column-body-desc"> 멘탈이 강하다는 것은 중심의 문제이기 때문이다</p>
                <p className="column-body-desc"> 중심이 있는 사람은 쉽게 휩쓸리지 않는다. 얽매이지 않는다. 즉 개의치 않는다는 말이다.</p>
                  <p className="column-body-desc"> 고로 모든 면(나는 그것을 에너지로 통칭하고 싶다)에서 주체적인 선택이 가능하고, 어떤 행동에 대한 반작용에 대해 알고 있기에 그에 대한 책임감 또한 무엇인지에 대해 잘 알고 있다. </p>
                  <p className="column-body-desc"> 자유란 어떤 의미에선, 중심이 있고 주체적인 선택이 가능함을 뜻한다. 얽매인다면 중심은 커녕 주체적인 선택이 불가능하다.</p>
                  <p className="column-body-desc"> 고로 융통성, 무소유, 중용의 도, 자유 등의 개념은 통한다. </p>
              </div>

              <div className="empty-container">
              </div>
              <div>
                <img className="column-bottom-sign" src={SignImage}/>
              </div>
          </div>
        );
    }
}

Column2.propTypes = propTypes;
Column2.defaultProps = defaultProps;

export default Column2;
