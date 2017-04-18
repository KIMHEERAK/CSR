import React, { Component, PropTypes } from 'react';
import './HomeValue.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testImage0 from  '../../public/src/image/x-image2.png';
import testImage1 from  '../../public/src/image/winner2.jpg';
import testImage2 from  '../../public/src/image/winner.jpg';

const propTypes = {

};
const defaultProps = {
};

class HomeValue extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [{ id:0, src:testImage0},{ id:1, src:testImage1},{id:2, src:testImage2} ]};
        this.handleSliderImgclick = this.handleSliderImgclick.bind(this);
    }


    handleSliderImgclick(id) {
      console.log('id is',id)

    }



    shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
    return true;
    }




    render() {

      const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        speed: 2000,
      };

      const items = this.state.items.map((item) => (
        <div className="slider-content"> <img key={item.src} src={item.src} onClick={ () => this.handleSliderImgclick(item.id)}/> </div>
      ));

        return(
          <div>
            <div className ="slider-container">
              <Slider {...settings}>
                  {items}
              </Slider>
            </div>
          </div>
        );
    }
}
HomeValue.propTypes = propTypes;
HomeValue.defaultProps = defaultProps;
export default HomeValue;
