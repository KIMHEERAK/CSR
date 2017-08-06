import React, { Component, PropTypes } from 'react';
import './review.css'

import testImage0 from  '../../../public/src/image/publishing/c_intro.png';
import SignImage from '../../../public/src/image/publishing/sign.JPG'
import player_image from '../../../public/src/image/publishing/player.jpg'
const propTypes = {
};
const defaultProps = {
};

class Review1 extends Component {
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
                  <h1 className="review-text-title">3ELEMENTZ - PLAYER</h1>
                </div>

                <div className="review-image-container">
                  <img className="review-image" key={player_image} src={player_image}/>
                </div>
                <div className="review-text-container">
                  <b className="review-body-title"> REAL GAME</b>
                  <p className="review-body-desc">
                                            저는 <strong>PUA 1세대</strong>로 미스터리 메서드와 더 게임을 보며 환상을 갖고 있던 사람이었습니다.
                                            <br/>
                                             하지만, 제가 막상 접한 픽업은 그런 환상을 와장창 깨부쉈고 그야말로 <strong>현실</strong>이었습니다.
                                             뭔가 해외에서 말하는 그런 환상과는 괴리감을 느끼고 있었는데 마스터는 제가 가졌던 그런 <strong>환상</strong>을 <strong>실현</strong>시켜 주었습니다.
                                             <br/><br/>
                                           그렇다고 마스터가 허무맹랑한 거짓말이나 과장된 것을 이야기하진 않습니다. 마스터는 짜깁기나 환상 혹은 과장된 것을 이야기하는 것이 아니라 확실한 <strong>자신의 세계관</strong>을 구축하고 있습니다.
                                           다른 업체와는 교육방식이 좀 다른 것이, 세계관에 대해 먼저 익히고 무엇을 해야 하는지 알려줍니다.
                                           <br/><br/>
                                           그 내용은 굉장히 단순하고 명쾌하지만 그 효과는 이 분야 구력이 좀 있던 제게도 충격적이었습니다. 단순한 원리지만 왜 그래야 하는지 개념원리 교육을 통해 알려줍니다.
                                           배우고 나면 완전히 납득을 하게 되고 실전에서도 실행할 수 있는 자신감을 얻을 수 있습니다.
                                           <br/><br/>
                                            특히나 그룹에서 <strong>3개의 스위치</strong>로 어트랙션을 켜는 것은 예전에 미스터리 메서드를 보며 가졌던 환상보다도 신박하달까.. 저는 <strong>3ELEMENTZ</strong>를 수료하였지만 앞으로도 계속해서 수련할 예정입니다. 배움엔 끝이 없고 이것이 얼마나 효과적인 방식인지 잘 알고 있기 때문입니다.
                                           <br/><br/>
                                            마스터에게 항상 고마울 따름입니다. 이상입니다.


                                        </p>
                </div>



                <div className="empty-container">
                </div>
            </div>
        );
    }
}
Review1.propTypes = propTypes;
Review1.defaultProps = defaultProps;
export default Review1;
