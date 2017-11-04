import React, { Component, PropTypes } from 'react';
import './Column.css'

import SignImage from '../../../public/src/image/publishing/sign.JPG'
import testImage0 from '../../../public/src/image/publishing/gardener.jpg'
import point_img from '../../../public/src/image/publishing/point.png'

const propTypes = {
};
const defaultProps = {
};

class Column7 extends Component {
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
                <h1 className="column-text-title">YOU</h1>
                <h3 className="column-text-subtitle">LOSER & FANTASY</h3>
              </div>

              <div className="column-image-container">
                <img className="column-image" key={point_img} src={point_img}/>
              </div>

              <div className="column-text-container" style={{ borderBottom : 'none', marginBottom : '0px'}}>
                <b className="column-body-title"> YOU </b>
                <p className="column-body-desc">여자들이 못생긴 남자와 사귀는 경우는 많아도 <strong>찐따느낌</strong> 물씬 풍기는 남자와 사귀는 경우는 <strong>거의 없다</strong>.
물론 찐따남자가 여자를 사귀는 경우가 종종 있긴 하다만 그럴 경우 높은 확률로 상대방도 찐따인 경우가 대부분이다.
<br/><br/>
문제는 <strong>찐따들의 특징</strong>이 자신은 대한민국 <strong>평균</strong>이라고 <strong>착각</strong>한다는 것이다.

아니면 노력은커녕 집안 탓, 재산 탓, 환경 탓, 외모 탓, 부모 탓 등등 주변 탓 남 탓하며 허송세월 하는 경우가 대부분..
그래도 다행인 것은 못난 외모가 잘생겨지는 것은 어려워도(물론 성형수술이란 대안이 있긴 하다만) 찌질함은 <strong>노력</strong>으로 <strong>극복</strong>이 <strong>가능</strong>하다는 점이다.
<br/><br/>
이것은 남녀 불문이지만 여자를 대입했을 때에도 항상 성립되기는 힘든 이유는, 암컷이기만 하면 물불 안 가리는 수컷들이 아주 많기 때문이다.
때문에 여성이란 존재는 번식 경쟁에서 남자들보단 상대적으로 유리하다고 볼 수 있다.
<br/><br/>
이것은 본능이자 <strong>진화론적인 문제</strong>이다.</p>
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
Column7.propTypes = propTypes;
Column7.defaultProps = defaultProps;
export default Column7;
