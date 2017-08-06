import React, { Component, PropTypes } from 'react';
import './Column.css'

import SignImage from '../../../public/src/image/publishing/sign.JPG'
import testImage0 from '../../../public/src/image/publishing/gardener.jpg'
import swamp_image from '../../../public/src/image/publishing/swamp.jpg'

const propTypes = {
};
const defaultProps = {
};

class Column5 extends Component {
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
                <h1 className="column-text-title">SWAMP</h1>
                <h3 className="column-text-subtitle">PREPARATION & OBJECTIFICATION</h3>
              </div>

              <div className="column-image-container">
                <img className="column-image" key={swamp_image} src={swamp_image}/>
              </div>

              <div className="column-text-container" style={{ borderBottom : 'none', marginBottom : '0px'}}>
                <b className="column-body-title"> Priority </b>
                <p className="column-body-desc"> <strong>늪</strong>에서 아무리 꿩을 잡으려 노력해봐야 될 리 만무하다.</p>
                <p className="column-body-desc"> 늪에서 꿩을 잡는 방법을 연구하는 것보다 늪에서 먼저 나오는 것이 <strong>순서</strong> 아닌가?
                                                물론 어찌어찌해서 될 수는 있다만 매우 비효율적이고 확률이 낮다고 보면 된다.</p>
                <p className="column-body-desc"> 안될 놈은 뭘 해도 안된다라는게 저런 상황을 가리킨다고 보면 딱 맞다.</p>
                <p className="column-body-desc"> 일에는 <strong>우선순위</strong>라는 것이 있다. </p>
                <p className="column-body-desc"> 꿩 사냥법을 알아도 늪에 빠진 상황이면 꿩이 제 맘대로 잡힐 리가 없다. </p>
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
Column5.propTypes = propTypes;
Column5.defaultProps = defaultProps;
export default Column5;
