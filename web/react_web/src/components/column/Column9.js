import React, { Component, PropTypes } from 'react';
import './Column.css'

import SignImage from '../../../public/src/image/publishing/sign.JPG'
import testImage0 from '../../../public/src/image/publishing/gardener.jpg'
import liberty_img from '../../../public/src/image/publishing/liberty.jpeg'

const propTypes = {
};
const defaultProps = {
};

class Column9 extends Component {
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
                <h1 className="column-text-title">REAL FREEDOM</h1>
                <h3 className="column-text-subtitle">FREEDOM & RESPONSIBILITY</h3>
              </div>

              <div className="column-image-container">
                <img className="column-image" key={liberty_img} src={liberty_img}/>
              </div>

              <div className="column-text-container" style={{ borderBottom : 'none', marginBottom : '0px'}}>
                <b className="column-body-title">FREEDOM</b>
                <p className="column-body-desc">
                  한번 사는 인생 뭣하러 남의 눈치 보며 사나..<br/>
우리는 남에게 피해 주지 않는 선에서 모든 자유를 누릴 권리가 있다.<br/>
 자신이 선택한 것에 대한 책임만 질 수 있다면 말이다. 어릴 때부터 부모님께 귀에 못이 박히게 들은 얘기가 있다.
<br/><br/>
<strong>"남의 눈치 보며 살 필요 없어.. 남한테 피해주는 것만 아니라면.. 스스로가 책임질 수 있다면.. 어떤 행동을 해도 좋아."</strong>
<br/><br/>

양아치들은 스스로가 굉장히 자유로운 사람이라도 된 마냥 행동하지만,
그들이 누리는 것은 진짜 자유가 아니다.<br/>
 그들은 남에게 피해를 주는 것은 기본이고 자신의 행동에 대해 책임지지 않기 때문이다. </p>
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
Column9.propTypes = propTypes;
Column9.defaultProps = defaultProps;
export default Column9;
