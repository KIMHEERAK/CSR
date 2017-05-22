import React, { Component, PropTypes } from 'react';
import './DoorSlider.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testImage0 from  '../public/src/image/chanel.png';
import testImage1 from  '../public/src/image/3_2.png';
import testImage2 from  '../public/src/image/3_3.png';
import testImage3 from  '../public/src/image/3_4.png';
import testImage4 from  '../public/src/image/3_5.jpg';
import testImage9 from  '../public/src/image/3_9.jpg';

import doorImage from '../public/src/image/publishing/door.png';

const propTypes = {

};
const defaultProps = {
};

class DoorSlider extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [ { id:0, src:doorImage} ]};
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
        nextArrow : false,
        prevArrow : false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        speed: 300,
        swipeToSlide : false,
        draggable : false,
        centerMode : false,


      };

      const items = this.state.items.map((item) => (
        <div> <img key={item.src} src={item.src} onClick={ () => this.handleSliderImgclick(item.id)}/> </div>
      ));

        return(
            <div className ="slider-container">
              <Slider className="slider-content" {...settings}>
                  {items}
              </Slider>
            </div>
        );
    }
}
DoorSlider.propTypes = propTypes;
DoorSlider.defaultProps = defaultProps;
export default DoorSlider;
