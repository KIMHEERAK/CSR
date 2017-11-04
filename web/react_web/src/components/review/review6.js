import React, { Component, PropTypes } from 'react';
import './review.css'

import testImage0 from  '../../../public/src/image/publishing/c_intro.png';
import SignImage from '../../../public/src/image/publishing/sign.JPG'
import spinner_image from '../../../public/src/image/publishing/spinner.jpg'

const propTypes = {
};
const defaultProps = {
};

class Review6 extends Component {
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
                  <h1 className="review-text-title">HUMAN BRANDING - SPINNER</h1>
                </div>

                <div className="review-image-container">
                  <img className="review-image" key={spinner_image} src={spinner_image}/>
                </div>
                <div className="review-text-container">
                  <b className="review-body-title">SPINNER</b>
                  <p className="review-body-desc">
                    저는 PLAYER의 추천으로 3ELEMENTZ의 HUMAN BRANDING 코스를 수강한 SPINNER입니다.

                    저 또한 PUA1출신으로써 PUA1 사람들에게 영향을 많이 받았습니다. 흔히 픽업을 잘하는 회원들을 보며 부러움과 배우고 싶다는 마음이 가득 차 있었기 때문에,

                    그들을 흉내 냈고, <strong>알파인 척</strong> 자위하면서 삶을 보냈었습니다.
                    <br/><br/>
                    당연하게도 그들을 따라 하게 되다 보니, 흔히 <strong>픽아 스타일</strong>로 알려진 <strong>셔츠</strong>, <strong>청바지</strong>, <strong>구두</strong>의 삼위일체가 저의 트레이드 마크가 되어 있었고,

                    키가 커 보여야 했기 때문에, <strong>깔창</strong>도 착용하고 머리도 정말 옛날 스타일인 <strong>올림머리</strong>를 <strong>멍청</strong>하게도 저는 고집해 왔었습니다.

                    제 고민은 누군가를 모방하면서 행동하고 말했기 때문에, 이 모습은 제 모습이 아니라는 것을 느꼈습니다.

                    누군가가 알려준 멘트, 누군가가 정형화해 놓은 스타일. 그것은 제 모습이 될 수 없었으니까요.
                    <br/><br/>
                    하지만, 마스터 에릭을 만남으로 인해, <strong>3요소</strong>에 기반을 둔 제 모습을 만들어가는 시발점이 되었습니다.

                    에릭은 정형화된 자신의 틀에 수강생들을 끼워 맞추려고 하기 보다 <strong>3요소</strong> 기반 안에서 수강생들을 자유롭게 풀어놓고, 그들이 인지하지 못했던 진짜 매력을 찾아주었습니다.
                    <br/><br/>
                    단순히 누군가 만들어 놓은 멘트를 앵무새처럼 외우고, 시대를 역행하는 스타일을 추구하시는 게 아니라,

                    진짜 <strong>자신의 모습</strong>을 만들어 나가고, <strong>건강한 인간관계</strong>를 구축해 나가길 희망하시는 분이 있다면, <strong>3ELEMENTZ</strong>에서 길을 찾을 수 있을 것이라 생각됩니다.
</p>
                </div>



                <div className="empty-container">
                </div>
            </div>
        );
    }
}
Review6.propTypes = propTypes;
Review6.defaultProps = defaultProps;
export default Review6;
