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
                  <p>서비스 안내</p>
                  <button onClick={this.props.handleModalClose}>+</button>
              </div>
              <div>
                <Collapsible
                  open ={this.props.open_number==1 ? true : false}
                  trigger="HUMAN BRANDING">
                  <p><strong>HUMAN BRANDING</strong>은 손상된 자아 복구를 위해 3요소 이론 수강 및 실습, 스타일링을 진행하여 내적, 외적의 자신을 개선하고 패배의 늪에서 성공의 길로 안내 받는 서비스입니다.</p>
                  <p> 해당 서비스를 통해 클라이언트는 이론 수강, 이론 실습, 스타일링, 관계회복 등의 서비스를 <strong>1개월</strong> 동안, 주 2회, 총 8회에 걸쳐 매회 3시간 동안 제공받습니다.</p>

                  <div className="info">
                    <p>진행비용 : <strong>\3,500,000</strong></p>

                  </div>
                </Collapsible>

                <Collapsible
                  open ={this.props.open_number==2 ? true : false}
                  trigger="RELATIONSHIP RECOVERY">
                  <p>RELATIONSHIP RECOVERY는 헤어진 여자친구, 남자친구, 가족, 직장, 가족 간에 손상된 관계를 회복시켜 건강한 인간관계를 구축하는 서비스입니다.</p>
                  <p>해당 서비스는 <strong>1회의 견적 상담 비용</strong>과 <strong>관계회복 진행 비용</strong>이 부과되며, 클라이언트의 손상된 관계를 분석하여 자세한 계획을 수립합니다. </p>

                  <div className="info">
                    <p>상담비용 : <strong>\100,000</strong></p>
                    <p>진행비용 : <strong>\500,000</strong></p>
                    <p style={{"font-size":"13px"}}>※ 진행비용은 내담자의 상담결과에 따라 달라질 수 있으니 유의하시기 바랍니다.</p>


                  </div>

                </Collapsible>

                <Collapsible
                  open ={this.props.open_number==3 ? true : false}
                  trigger="MALE STYLING">
                  <p>MALE STYLING은 21세기에 소멸돼가는 남성성을 되찾기 위한 스타일링 컨텐츠이며, 클라이언트의 머리부터 발끝까지 전반에 수컷의 모습을 새겨드립니다.</p>
                  <p>해당 서비스는 <u>단독으로 진행 하실 수 없으며</u>, <strong>HUMAN BRANDING</strong> 또는 <strong>RELATIONSHIP RECOVERY</strong> 진행 시 무료로 진행되는 서비스입니다.</p>
                </Collapsible>

                <Collapsible open ={false}
                  trigger="기타 문의">
                  <p><strong>HUMAN BRANDING</strong>, <strong>RELATIONSHIP RECOVERY</strong> 외에 기타 문의 및 요구 사항이 있으신 클라이언트는 구체적인 상담을 통해 해결방안을 제시해드리겠습니다.</p>
                  <div className="info">
                    <p>진행비용 : <strong>추후협의</strong></p>

                  </div>

                </Collapsible>

                <div className="call-box">
                  <p>상담문의 : <strong>010-2470-7427</strong></p>
                  <p>대표전화 : <strong>010-8361-4003</strong></p>
                </div>
              </div>

            </div>
        );
    }
}

Product.propTypes = propTypes;
Product.defaultProps = defaultProps;
export default Product;
