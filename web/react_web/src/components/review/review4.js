import React, { Component, PropTypes } from 'react';
import './review.css'

import testImage0 from  '../../../public/src/image/publishing/c_intro.png';
import SignImage from '../../../public/src/image/publishing/sign.JPG'
import flower_image from '../../../public/src/image/publishing/flower.jpg'
const propTypes = {
};
const defaultProps = {
};

class Review4 extends Component {
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
                  <h1 className="review-text-title">HUMAN BRANDING - GARDENER</h1>
                </div>

                <div className="review-image-container">
                  <img className="review-image" key={flower_image} src={flower_image}/>
                </div>
                <div className="review-text-container">
                  <b className="review-body-title"> 제발.. 제발.. 한 번만..</b>
                  <p className="review-body-desc">
                                            2017년 2월 제가 여자친구에게 했던 마지막 통화내용입니다. <br/><br/>
                                            이랬던 제 자신이 <strong>3ELEMENTZ</strong>를 통해 느낀 점들을 공유하고자 이 글을 쓰게 되었습니다.<br/>
                                            저는 준수한 외모로 괜찮은 이성들을 만나 남부럽지 않은 삶을 살아가고 있었습니다. <br/>
                                            타인이 보기에 겉으로는 이성들과 연애를 하고 좋은 사람들과 인간관계를 이뤄나갔기 때문에 괜찮아 보였겠지만, 내적으로는 관계의 불균형을 이룬 상태였기에
                                            건강한 인간관계라고 느껴지지 않았습니다. <br/>
                                            그래서 저는 3ELEMENTZ를 찾아 <strong>HUMAN BRANDING - MASTER COURSE</strong>에 참여하게 되었습니다. <br/><br/>
                                            그전 까지는 그동안 살아온 직감으로 생각하고 행동하였기 때문에, 올바른 기준이 없었습니다. 하지만, <strong>MASTER ERIC WHITE</strong>의 가이드를 통해 여태까지 보이지 않았던
                                            인간관계의 3요소가 보이기 시작합니다. <br/>
                                          제가 해당 코스를 통해 느낀 근본적인 변화는 지금까지 제 자신의 경험과 직감에 의존하여 관계를 이어 나갔다면,
                                            <strong> 3ELEMENTZ</strong>라는 무기가 생김으로써 매 순간 삶이라는 여행 속에 <strong>가이드</strong>가 함께하는 느낌을 받으며,
                                               그 이전 보다 나은 선택을 하며 살아가게 되었다는 것입니다. <br/>
                                            <br/>
                                            그리고 <strong>3ELEMENTZ</strong>는 다른 이론들과 달리 굉장히 <strong>직관적인 시스템</strong>이기 때문에, 활자만 장황하고 화려하게 늘어놓는 이론에서
                                            끝나는 탁상공론식 이론이 아닌 실생활에서 <strong>보이고 느껴지며 사용</strong>할 수 있을뿐더러 <strong>효과적</strong>입니다.
                                            <br/>
                                            <br/>
                                            앞으로도 교육이 남아있기에 <strong>HUMAN BRANDING</strong>을 통해 업그레이드돼있을 제 자신의 모습이 하루하루 <strong>기대</strong>됩니다.<br/>


                                        </p>
                </div>



                <div className="empty-container">
                </div>
            </div>
        );
    }
}
Review4.propTypes = propTypes;
Review4.defaultProps = defaultProps;
export default Review4;
