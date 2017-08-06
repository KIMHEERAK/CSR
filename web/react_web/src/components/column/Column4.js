import React, { Component, PropTypes } from 'react';
import './Column.css'

import SignImage from '../../../public/src/image/publishing/sign.JPG'
import testImage0 from '../../../public/src/image/publishing/gardener.jpg'
import sea_image from '../../../public/src/image/publishing/sea.jpg'
import sea2_image from '../../../public/src/image/publishing/sea3.jpg'

const propTypes = {
};
const defaultProps = {
};

class Column4 extends Component {
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
                <h1 className="column-text-title">SAFE</h1>
                  <h3 className="column-text-subtitle"> NATURAL & HUMAN</h3>
              </div>

              <div className="column-image-container">
                <img className="column-image" key={sea_image} src={sea_image}/>
              </div>

              <div className="column-text-container" style={{ borderBottom : 'none', marginBottom : '0px'}}>
                <b className="column-body-title"> Naturalism </b>
                <p className="column-body-desc"> 바다는 인간으로 하여금 경외감과 함께 아름답다는 감정을 느끼게 한다.</p>
                <p className="column-body-desc"> 인간에게 있어서 <strong>매력적인 존재</strong>임에 틀림없다.</p>
              </div>

              <div className="column-image-container">
                <img className="column-image" key={sea2_image} src={sea2_image}/>
              </div>

              <div className="column-text-container">
                <b className="column-body-title"> Humanism </b>
                <p className="column-body-desc"> 하지만, 바다는 <strong>매력</strong>적인 동시에 <strong>두려움</strong>의 대상이기도 하다. </p>
                <p className="column-body-desc"> 언제든지 집어 삼킬 수 있기 때문이다. 그러한 사실은 인간으로 하여금 선뜻 다가가지 못하게 만드는 요인으로 작용한다. </p>
                <p className="column-body-desc"> 바다는 언제나 맹수와 같은 <strong>흉폭함</strong>을 지니고 있지만, 인간에 의해 개척되고 가꾸어진 바다는 인간으로 하여금 <strong>안전</strong>하다는 착각을 불러 일으킨다.</p>
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
Column4.propTypes = propTypes;
Column4.defaultProps = defaultProps;
export default Column4;
