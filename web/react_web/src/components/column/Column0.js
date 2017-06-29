import React, { Component, PropTypes } from 'react';
import './Column.css'

import testImage0 from  '../../../public/src/image/publishing/c_intro.png';
import SignImage from '../../../public/src/image/publishing/sign.JPG'

const propTypes = {
};
const defaultProps = {
};

class Column0 extends Component {
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
                  <h1 className="column-text-title">INTRO</h1>
                  <h3 className="column-text-subtitle"> 3ELEMENTZ는 인간관계의 3요소를 분석하는 연구소입니다.</h3>
                </div>

                <div className="column-image-container">
                  <img className="column-image" key={testImage0} src={testImage0}/>
                </div>
                <div className="column-text-container">
                  <b className="column-body-title"> 인간관계의 본질<br/>
                                                    중심, 자극, 명분 </b>
                  <p className="column-body-desc">
                                                    자유로운 자신으로 정립되는 <strong>중심.</strong> <br/>
                                                    인간의 합리성을 마비시키는 본질적인 끌림, <strong>자극</strong>  <br/>
                                                    비합리성을 받아들이기 위한 합리적 성분, <strong>명분</strong> <br/>
                                                    <br/>
                                                    인간관계를 구성하는 3요소. <br/> </p>
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
Column0.propTypes = propTypes;
Column0.defaultProps = defaultProps;
export default Column0;
