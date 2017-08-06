import React, { Component, PropTypes } from 'react';
import './review.css'

import testImage0 from  '../../../public/src/image/publishing/c_intro.png';
import SignImage from '../../../public/src/image/publishing/sign.JPG'
import driver_image from '../../../public/src/image/publishing/driver.jpg'
const propTypes = {
};
const defaultProps = {
};

class Review2 extends Component {
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
                  <h1 className="review-text-title">HUMAN BRANDING - DRIVER</h1>
                </div>

                <div className="review-image-container">
                  <img className="review-image" key={driver_image} src={driver_image}/>
                </div>
                <div className="review-text-container">
                  <b className="review-body-title"> DRIVER</b>
                  <p className="review-body-desc">
                                            안녕하세요. 저는 현재 휴먼 브랜딩 마스터 과정을 수강하고 있는 수강생입니다. <br/><br/>
                                          마스터선생님께서 저에게 후기를 부탁하셨을때 무슨 내용을 담는 것이 가장 좋을까 고민하였습니다.
                                          고민 결과 후기를 보시는 분들이 수강 전과 후의 제 모습 즉, 휴먼 브랜딩으로 인한 <strong>변화</strong>와 <strong>효과</strong>에 대해 가장 궁금해하실 것 같아 제가 느낀점을 후기에 남깁니다. <br/><br/>
                                         저는 이성을 만나는 데 학벌이 큰 요소로 작용한다는 말 때문에 공부하여 S대에 진학할 정도로 이성에 대한 관심이 많았습니다.
                                          이성을 만날 기회만 있다면 미팅, 소개팅, 술자리 등에 가리지 않고 참석하였으며 패션, 피부관리 뿐만아니라
                                          픽업이라고 하는 여성을 유혹하는 기술을 가르쳐준다는 분야를 공부하며 <strong>이성</strong>을 만나기 위한 여러 <strong>노력</strong>을 해왔습니다. <br/><br/>
                                       이런 노력을 통해 운좋게 이성을 만날 여러 기회를 얻긴 했지만 쌓이는 것이 없었습니다. 어떤 때는 되고 어떤 때는 안되는 이유를 파악할 수 없었고 단순히 운에 의해 결정되었던 것 입니다.
                                       근본적인 원인과 이유를 알 수 없어 답답해하던 중 운좋게 마스터 선생님을 만나게 되었고 관계에 대한 <strong>근본적인 철학</strong>과 <strong>원리</strong>를 알게되면서 <strong>이해</strong>가 되고 <strong>분석</strong>이 되기 시작하였습니다. <br/><br/>
                                     제가 이성에게 좋은 반응과 관심을 이끌어 내었을때 혹은 그 반대의 경우 <strong>이론</strong>을 <strong>기반</strong>으로 한 분석을 통해 <strong>성공과 실패의 이유</strong>를 정확하게 이해할 수 있었고 개선할 수 있었습니다.
                                     항상 이성을 보며 어떻게 저 사람을 얻기 위해 무엇을 해야할까 생각했다면 이제는 여유있게 그들이 다가오게 하는 방법을 배웠고
                                     이성의 관심을 끌기 위해 고가의 명품 가방을 선물하던 과거에서 오히려 고가의 명품가방을 선물받는 모습으로 거듭나게 되었습니다.<br/><br/>
                                    휴먼 브랜딩을 통해 제가 원하는 이성에게 넘치는 사랑과 관심을 받으며 사랑을 하고 있으며 실제로 최근에도 고가의 g* 가방과 b* 시계 등의 과분한 선물을 받았고
                                    이런 이쁘고 착한 여자친구에게 정성과 사랑을 통해 보답하고 있습니다. <br/><br/>
                                  자랑같은 후기였지만 저뿐만아니라 휴먼 브랜딩을 통해 여러분들에게도 충분히 일어날 수 있는 일들이며 여러분이 <strong>꿈꾸던 모습</strong>을 이루실 수 있을 것 입니다.
                                  이 후기를 빌어 다시 한번 저의 인생과 <strong>라이프 스타일</strong>을 찾아주신 마스터 선생님께 감사드립니다!


                                        </p>
                </div>



                <div className="empty-container">
                </div>
            </div>
        );
    }
}
Review2.propTypes = propTypes;
Review2.defaultProps = defaultProps;
export default Review2;
