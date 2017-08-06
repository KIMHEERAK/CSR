import React, { Component, PropTypes } from 'react';
import './review.css'

import testImage0 from  '../../../public/src/image/publishing/c_intro.png';
import SignImage from '../../../public/src/image/publishing/sign.JPG'
import calibe_image from '../../../public/src/image/publishing/CALIBE.jpg'

const propTypes = {
};
const defaultProps = {
};

class Review3 extends Component {
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
                  <h1 className="review-text-title">HUMAN BRANDING - CALIBE</h1>
                </div>

                <div className="review-image-container">
                  <img className="review-image" key={calibe_image} src={calibe_image}/>
                </div>
                <div className="review-text-container">
                  <b className="review-body-title"> CALIBE</b>
                  <p className="review-body-desc">
                                        안녕하세요. CALIBE입니다. <br/>
                                       <br/>
                                         제가 휴먼 브랜딩을 수강하게 된 계기는 첫 이별이 주는 충격과 압박감에 하루하루 병들어가고 있었고,
                                         앞으로 더 나은 여자를 못 만날 것 같은 생각, 앞으로 여자를 믿을 수 없을 것 같다는 생각들이 머리에
                                         맴돌았기에 누군가에게라도 도움을 받고 싶은 그런 간절함이 있었습니다.
                                         그러던 와중에 에릭 선생님과의 상담을 통해 느꼈던 <strong>안정감</strong>과 <strong>진중함</strong>에 이곳은 진짜구나라는 느낌이 들어 휴먼 브랜딩을 시작하게 되었습니다.

                                        <br/>
                                        <br/>
                                          처음 휴먼 브랜딩을 시작하고 받은 느낌은 마치 <strong>성적표</strong>를 받아보는 느낌이었습니다.
    이전 연애의 결과에 대해 제가 했던 행동들이 왜 문제가 되었는지 정확하고 명쾌하게 이해가 되었고, 살면서 처음으로 낯선 이성에게 말을 걸어보며 제 현재의 모습을 받아들이는 시간이었기 때문입니다.
                                       <br/><br/>
                                       이후에, 변화의 필요성을 느껴 스타일링을 통해 외적인 모습에 <strong>남성성</strong>을 끌어올렸습니다.
                                        물론 스타일링 진행과정에서 생각보다 많은 비용이 발생했기에 조심스러웠지만, 이로인한 결과를 충분히 얻어가고 있기 때문에  상당히 만족스럽습니다.
                                        <br/>
                                        <br/>
                                          그리고, <strong>3ELEMENTZ</strong>를 학습하고 이해하는 건 마치 새로운 <strong>소프트웨어</strong>를 탑재하는 느낌입니다. <br/>
   새로운 소프트웨어를 최적화하는데 시간이 걸리기 때문에, 지금도 능숙한 수준으로 활용할 순 없지만, 이것을 알고 느낄 수 있고 없고는
   하늘과 땅 차이라 생각됩니다. 만약 이를 몰랐다면, 매번 반복되는 실패 속에서 근본적인 원인을 앞으로도 몰랐을 것이기 때문입니다.
                                        <br/>
                                        <br/>
                                          또, <strong>3ELEMENTZ</strong>를 이해하게 되면 <strong>스위치</strong>가 켜진 것처럼 그동안 안 보이던 것들이 보이고 느끼게 되고
   이를 활용하여 제 자신이 원하는 인간관계의 길을 만들어갈 수 있게 됩니다.
                                       <br/>
                                       <br/>
                                       마지막으로, 제 자신이 제가 생각했던 것 보다 더 멋있는 남자란 것을 깨닫게 해주고,
                                       이별이라는 절망 속에 허우적대던 제 삶을 변화시켜 준 에릭선생님께 감사의 말씀을 올리며 글을 마치고 싶습니다. 감사합니다.



                                        </p>
                </div>



                <div className="empty-container">
                </div>
            </div>
        );
    }
}
Review3.propTypes = propTypes;
Review3.defaultProps = defaultProps;
export default Review3;
