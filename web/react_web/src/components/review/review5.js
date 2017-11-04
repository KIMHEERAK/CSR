import React, { Component, PropTypes } from 'react';
import './review.css'

import testImage0 from  '../../../public/src/image/publishing/c_intro.png';
import SignImage from '../../../public/src/image/publishing/sign.JPG'
import runner_image from '../../../public/src/image/publishing/runner.jpg'

const propTypes = {
};
const defaultProps = {
};

class Review5 extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div>
              <div className="burger-box">
                <b>REVIEW</b>
              </div>
                <div className="review-title-container">
                  <h1 className="review-text-title">HUMAN BRANDING - RUNNER</h1>
                </div>

                <div className="review-image-container">
                  <img className="review-image" key={runner_image} src={runner_image}/>
                </div>
                <div className="review-text-container">
                  <b className="review-body-title">RUNNER</b>
                  <p className="review-body-desc">
                    저는 연애 관계에 초점을 두고 휴먼 브랜딩을 수강한 수강생입니다.
                  단지 여성에게 인기 많은 남자를 목표로 에릭 선생님을 만났고 큰 깨달음을 얻었습니다. 연애 관계 즉 <strong>남녀의 관계</strong>에 있어 필요한 것은 무엇일까요?
                  <strong>이성적 매력</strong>입니다. 서로 남자로서, 여자로서 매력을 느끼고 서로 만나게 되는 것이지요.
                  <br/><br/>
                   하지만 저는 이런 간단하고도 중요한 핵심을 간과하고 있었습니다. 저를 포함한 많은 분들이 이러 할지도 모릅니다.
                   요즘 길에 나가면 여성들이 좋아한다고 인식되는 흔히 훈남 스타일의 남성들이 많고 실제로 이런 스타일이 여성들에게 크게 어필이 된다고 생각하는 것이지요.
                   물론 훈남 스타일이 여성에게 매력 어필이 되지 않는다는 아닙니다.
                   다만 훈남 스타일에만 포커스를 두어 정작 중요한 <strong>핵심</strong>인 <strong>남자다움</strong>을 놓치게 되는 것이 문제가 되는 것입니다.
                   <br/><br/>
                   이성간의 만남에서 매력의 <strong>핵심</strong>은 <strong>이성적 매력</strong>인데 다른 곳에 중점을 두고 정작 중요한 핵심을 놓치고 있다는 것입니다.
에릭 선생님을 만남으로써 저는 이런 중요한 핵심을 인지하게 되었고 남성성에 초점을 두어 제 자신을 바꿔가지 시작했습니다.
에릭 선생님은 스타일링부터 시작하여 제 내적인 부분까지 하나하나 조언을 해주셨습니다.
저에게 어울리는 스타일을 제시해주고 제 장점을 부각시키고 단점을 보완하기 위한 방법 등
단순하고 뻔한 얘기가 아닌 저에게 맞춘 <strong>맞춤형 조언</strong>을 해주셨고 제가 알지 못했던 부분을 알게 되었습니다.

<br/><br/> 또한 <strong>제 현실과 문제를 인정하는 것</strong>이 <strong>먼저</strong>라는 말씀에 제 자존심을 버리고 저를 인정하고 바꾸기 위해 선생님의 조언을 빠짐없이 이행하였습니다.
  그 결과, 단순히 훈남 스타일만을 추구했던 과거와 달리 진정한 <strong>남자의 매력</strong>을 어필하기 시작하는 저를 발견할 수 있었습니다.
  <br/><br/>
물론 이런 변화가 하루 아침에 이루어진 것은 아닙니다. 휴먼 브랜딩을 수강하면서 제게 지적하셨던 문제점 그리고 개선해야할 점과
방법들 등을 모두 기억하고 이를 꾸준히 시행함으로써 이런 결과를 얻게 된 것입니다.
하지만 에릭 선생님의 조언이 없었다면 저는 아직도 방법을 모르고 헤매고 있었을 것입니다.
 이런 변화의 길을 제시해주고 도와주신 에릭 선생님께 감사드리며 다른 분들도 에릭 선생님과 함께 잃어버린 자신의 <strong>남성성</strong>을 찾으시길 바랍니다!</p>
                </div>



                <div className="empty-container">
                </div>
            </div>
        );
    }
}
Review5.propTypes = propTypes;
Review5.defaultProps = defaultProps;
export default Review5;
