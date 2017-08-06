import React, { Component, PropTypes } from 'react';
import Collapsible from 'react-collapsible'
import './Product.css'

const propTypes = {
};
const defaultProps = {
};

class Product extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return(
            <div className="product-container">
              <div className="product-header">
                  <p className="intro">서비스 안내</p>
                  <button onClick={this.props.handleModalClose}>+</button>
                  <p className="intro-text">3ELEMENTZ LAB은 마스터 에릭 화이트가 개발한 인간관계의 3요소를 기반으로 대한민국의 건강한 인간관계를 추구하고 있으며, 관련 서비스로는 3ELEMENTZ, HUMAN BRANDING, RELATIONSHIP RECOVERY, STYLING이 있습니다.</p>
              </div>
              <div>
                <Collapsible classParentString='Collapsible-product'
                  open ={false}
                  trigger="3ELEMENTZ">
                  <p><strong>3ELEMENTZ</strong>는 3ELEMENTZ의 프리미엄 서비스 모델로써 <strong>6개월</strong> 동안 1:1 맨투맨으로 HUMAN BRANDING을 수강하면서, <strong>마스터 에릭 화이트</strong>가 주 1회 동행하는 서비스입니다.  </p>

                  <div className="info">
                    <p>진행비용 : <strong>\30,000,000</strong></p>

                  </div>
                </Collapsible>
                <Collapsible classParentString='Collapsible-product'
                  open ={false}
                  trigger="HUMAN BRANDING - MASTER">
                  <p><strong>HUMAN BRANDING - MASTER</strong>는 3ELEMENTZ의 플래그쉽 모델로써 <strong>6개월 동안</strong> HUMAN BRANDING을 수강하는 서비스입니다.  </p>

                  <div className="info">
                    <p>진행비용 : <strong>\12,000,000</strong></p>

                  </div>
                </Collapsible>

                <Collapsible classParentString='Collapsible-product'
                  open ={this.props.open_number==1 ? true : false}
                  trigger="HUMAN BRANDING">
                  <p><strong>HUMAN BRANDING</strong>은 손상된 자아 복구를 위해 3요소 이론 수강 및 실습, 스타일링을 진행하여 내적, 외적의 자신을 개선하고 패배의 늪에서 성공의 길로 안내 받는 서비스입니다.</p>
                  <p> 해당 서비스를 통해 클라이언트는 이론 수강, 이론 실습, 스타일링, 관계회복 등의 서비스를 <strong>1개월</strong> 동안, 주 2회, 총 8회에 걸쳐 제공받습니다.</p>
                  <br/>
                  <div>
                    <p><strong>1주차</strong> : 현실 객관화, 3ELEMENTZ - 개론 강의(단계적 접근, 사회적 항상성, 마인드, 자유 존중), 목표 설정 및 솔루션 제시</p>
                    <p><strong>2주차</strong> : 스타일링, 중간점검, 3ELEMENTZ(Ⅰ) </p>
                    <p><strong>3주차</strong> : 피드백, 연상대화 훈련, 3ELEMENTZ(Ⅱ) </p>
                    <p><strong>4주차</strong> : 3ELEMENTZ(Ⅲ), 감성대화 훈련, 최종점검 및 분석</p>
                  </div>
                  <div className="info">
                    <p>진행비용 : <strong>\3,500,000</strong></p>
                  </div>
                </Collapsible>

                <Collapsible classParentString='Collapsible-product'
                  open ={this.props.open_number==1 ? true : false}
                  trigger="HUMAN BRANDING - 1회">
                  <p><strong>HUMAN BRANDING 1회</strong>는 HUMAN BRANDING 서비스를 수강하기 전, HUMAN BRANDING을 체험할 수 있는 서비스로 클라이언트는 1회에 한하여 본 서비스를 체험할 수 있습니다.</p>
                  <br/>
                  <div>
                    <p><strong>체험 내용</strong> : 3ELEMENTZ 소개, 문제점 인식, 현실 객관화</p>
                  </div>
                  <div className="info">
                    <p>진행비용 : <strong>\200,000</strong></p>
                  </div>
                </Collapsible>

                <Collapsible classParentString='Collapsible-product'
                  open ={this.props.open_number==2 ? true : false}
                  trigger="RELATIONSHIP RECOVERY">
                  <p>RELATIONSHIP RECOVERY는 헤어진 여자친구, 남자친구, 가족, 직장, 가족 간에 손상된 관계를 회복시켜 건강한 인간관계를 구축하는 서비스입니다.</p>
                  <p>해당 서비스는 <strong>무료 상담</strong>을 통해 관계회복 가능성 및 계획을 수립합니다. </p>

                  <div className="info">
                    <p>진행비용 : <strong>\1,200,000</strong></p>
                    <br/>
                    <p style={{"fontSize":"11px"}}>※상담 예치금 : \50,000</p>
                    <p style={{"fontSize":"11px"}}>※진행비용은 내담자의 상담결과에 따라 변경 될 수 있습니다.</p>

                  </div>

                </Collapsible>

                <Collapsible classParentString='Collapsible-product'
                  open ={this.props.open_number==3 ? true : false}
                  trigger="MALE STYLING">
                  <p>MALE STYLING은 21세기에 소멸돼가는 남성성을 되찾기 위한 스타일링 컨텐츠이며, 클라이언트의 머리부터 발끝까지 전반에 수컷의 모습을 새겨드립니다.</p>
                  <p>해당 서비스는 <u>단독으로 진행 하실 수 없으며</u>, <strong>HUMAN BRANDING</strong> 또는 <strong>RELATIONSHIP RECOVERY</strong> 진행 시 무료로 진행되는 서비스입니다.</p>
                </Collapsible>

                <Collapsible classParentString='Collapsible-product'
                  open ={false}
                  trigger="기타 문의">
                  <p><strong>HUMAN BRANDING</strong>, <strong>RELATIONSHIP RECOVERY</strong> 외에 기타 문의 및 요구 사항이 있으신 클라이언트는 구체적인 상담을 통해 해결방안을 제시해드리겠습니다.</p>
                  <div className="info">
                    <p>진행비용 : <strong>추후협의</strong></p>

                  </div>

                </Collapsible>

                <div className="call-box">
                  <p className="m-call-text"> 상담문의 : <a href="tel:010-2470-7427">010-2470-7427</a></p>
                  <p className="m-call-text"> 대표전화 : <a href="tel:010-8361-4003">010-8361-4003</a></p>
                  <p className="w-call-text">상담문의 : <strong>010-2470-7427</strong></p>
                  <p className="w-call-text">대표전화 : <strong>010-8361-4003</strong></p>
                </div>
              </div>

            </div>
        );
    }
}

Product.propTypes = propTypes;
Product.defaultProps = defaultProps;
export default Product;
