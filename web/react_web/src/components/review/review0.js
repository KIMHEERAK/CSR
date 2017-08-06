import React, { Component, PropTypes } from 'react';
import './review.css'

import testImage0 from  '../../../public/src/image/publishing/c_intro.png';
import SignImage from '../../../public/src/image/publishing/sign.JPG'
import hood_image from '../../../public/src/image/publishing/hood.jpg'

const propTypes = {
};
const defaultProps = {
};

class Review0 extends Component {
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
                  <h1 className="review-text-title">MASTER</h1>
                </div>

                <div className="review-image-container">
                  <img className="review-image" key={hood_image} src={hood_image}/>
                </div>
                <div className="review-text-container">
                  <b className="review-body-title"> MASTER</b>
                  <p className="review-body-desc">
                                            10여년전부터 여러 업체의 강사 제의를 받아왔으나 그때마다 거절해왔습니다.
                                          <strong>무형의 서비스</strong>를 제공하는 특성 상 사기꾼이 되느냐 은인이 되느냐는 종이한장 차이란 것을 알았기 때문입니다. <br/><br/>
                                        순수한 열정하나만으로 시작했던 제게 있어서 명예와 자존심은 돈을 버는 행위이상으로 중요했습니다.
                                      아직 설익은 철학적 기반으로 돈벌이에 나서는 대신 <strong>진리탐구</strong>에 몰두하였고, 시간은 배신하지 않는다는 말이 있듯이 결국엔 스스로도 만족할 만큼의 결실을 이루어냈습니다.
                                    남들이 개발한 이론에 숟가락 얹기 혹은 짜깁기나 겉만 번지르르한 그런 내용이 아닌 세상을 구성하는 3요소라는 저만의 <strong>철학적 기반</strong>을 마련하였습니다. <br/>
                                  그것은 어느분야든 적용이 가능합니다. 단지 관계성에 국한 되는 것이 아니라 사회, 정치, 경제, 예술 등 모든 분야에 적용이 가능한 명쾌하고도 <strong>직관적인 원리</strong>입니다.<br/><br/>
                                저는 이론에 있어서 가장 중요한 것은 <strong>직관성</strong>이라고 생각합니다. <br/>
                              진정한 전문가라면 자신이 생각하는 것들을 단순하고 명쾌하게 정리해낼수 있어야 합니다.
                              누구나 그럴듯한 이론을 만들어낼수 있습니다. 하지만 중요한것은 <strong>현실에서 통하느냐</strong>가 가장 <strong>중요</strong>하지요. 그 핵심은 직관성입니다. <br/>
                            실전은 마치 <strong>변칙적인 전쟁터</strong>와 같아서 빠른 판단을 필요로 합니다. 직관적으로 적용이 가능해야만이 전장에서 사용할 수 있는 진짜 무기입니다.<br/>
                          이론이 이론에서 끝난다면 그것은 이미 생명력을 잃은 이론입니다. <br/><br/>
                         아마 이글을 읽고 있는 많은 분들 중에도 공감하는 분들이 많으시리라 생각합니다.
                        제가 발견하고 구축한 진리를 사람들에게 전파하고 그들이 진정으로 변화를 얻고 제게 고마워할때 말로 설명할수없는 뿌듯함과 행복감을 느낍니다. <br/><br/>
                      지금까지 저의 주 고객층은 이 업계에서 10년가까이 몸담은 원로들이 대부분이었습니다.
                    그렇기에 그들로부터의 인정이 제게는 더 큰 행복으로 다가왔습니다.
                  백지상태의 고객에겐 작은 것을 보여줘도 놀라는 경우가 많기에 내공이 떨어지는 강사들도 자신이 보여준것 이상의 피드백을 얻을수 있지만
                  10년 가까운 경력의 고객들은 강사가 빈틈을 보이면 언제든지 날카로운 반론으로 강사들을 당황시킬수 있는 역량의 소유자들입니다.
                그렇기에 제게는 그것이 더욱 큰 의미가 있었습니다. <br/><br/>
              이제는 좀 더 많은 분들에게 저의 <strong>철학</strong>을 <strong>전파</strong>하고 그들이 실질적으로 많은 것을 얻어가는 기회가 많아지길 소망해봅니다.<br/>
                                        </p>
                </div>

                <div className="empty-container">
                </div>
            </div>
        );
    }
}
Review0.propTypes = propTypes;
Review0.defaultProps = defaultProps;
export default Review0;
