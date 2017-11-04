import React, { Component, PropTypes } from 'react';
import './Column.css'

import SignImage from '../../../public/src/image/publishing/sign.JPG'
import testImage0 from '../../../public/src/image/publishing/gardener.jpg'
import vans_img from '../../../public/src/image/publishing/vans.jpg'

const propTypes = {
};
const defaultProps = {
};

class Column8 extends Component {
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
                <h1 className="column-text-title">FASHION</h1>
                <h3 className="column-text-subtitle">ATTITUDE & ACTIVITY</h3>
              </div>

              <div className="column-image-container">
                <img className="column-image" key={vans_img} src={vans_img}/>
              </div>

              <div className="column-text-container" style={{ borderBottom : 'none', marginBottom : '0px'}}>
                <b className="column-body-title">FASHION</b>
                <p className="column-body-desc">
                  패션은 좋은 옷 비싼 옷 예쁜 옷으로 온몸을 휘감는 것만 가지고는 완성되지 않는다고 생각한다.
                  패션의 완성이라함은 옷을 입은 사람의 <strong>애티튜드</strong>와 <strong>활동성</strong>까지 포함되어야 한다고 생각한다.
  <br/><br/>이지부스트 신고 벌벌 떠는 사람보단 편안하게 반스 신은 <strong>자유로운 사람</strong>이 더 멋있다.
  반스가 이지부스트보다 낫다는 소리가 아니다. 그만큼 패션에 있어서 애티튜드가 중요하다라는 생각?
<br/><br/>
  물론 이지신고도 막 뛰어댕기고 활동적이고 애티튜드 멋지다면 더할 나위가 없겠지마는..
  옷이 아무리 시크해도 행동이 시크하지 못하다면...
  <br/><br/>
  패션으로써의 <strong>완성도</strong>가 떨어진다고 본다.</p>
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
Column8.propTypes = propTypes;
Column8.defaultProps = defaultProps;
export default Column8;
