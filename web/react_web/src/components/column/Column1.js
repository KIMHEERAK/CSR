import React, { Component, PropTypes } from 'react';
import './Column.css'

import testImage0 from  '../../../public/src/image/publishing/c_1.jpg';
import SignImage from '../../../public/src/image/publishing/sign.JPG'

const propTypes = {
};
const defaultProps = {
};

class Column1 extends Component {
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
                  <h1 className="column-text-title">STORY</h1>
                    <h3 className="column-text-subtitle">ERIC WHITE, 진리를 찾아서</h3>
                </div>

                <div className="column-image-container">
                  <img className="column-image" key={testImage0} src={testImage0}/>
                </div>

                <div className="column-text-container">
                  <b className="column-body-title">탐구심이 강한 아이. ERIC WHITE</b>
                  <p className="column-body-desc"> 자유분방한 성격으로 틀에 얽매이기보단 호기심을 갖게 하는 무언가를 발견하면 꼭 해봐야만 직성이 풀리는 그런 아이였습니다.</p>
                  <p className="column-body-desc"> 그를 호기심으로 이끌었던 분야 중 하나는 인간에 대한 탐구심이었고 어린 시절의 그는 결심하였습니다.</p>
                  <p className="column-body-desc"> <strong>관계성의 진리</strong>를 발견하자.</p>
                    <p className="column-body-desc"> 순수한 열정 하나만으로 미친 과학자처럼 관계성의 법칙의 핵심적인 진리를 찾는 것에 몰두하였고 10여 년 간의 고민과 연구 끝에 중요한 3요소를 발견하였습니다.</p>
                    <p className="column-body-desc"> 3ELEMENTZ 연구원들은 ERIC WHITE의 뜻을 따라 지금도 계속해서 3요소를 연구 중이고 그의 관계론은 많은 이들에게 도움을 주고 있습니다.</p>
                    <p className="column-body-desc"> 전 세계에 그가 정립한 철학의 실용성을 전파하여 많은 사람들이 더욱 풍요롭고 행복한 삶을 영위하는 것이 <strong>ERIC WHITE의 꿈</strong>입니다. </p>
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
Column1.propTypes = propTypes;
Column1.defaultProps = defaultProps;
export default Column1;
