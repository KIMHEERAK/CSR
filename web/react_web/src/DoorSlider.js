import React, { Component, PropTypes } from 'react';
import ReactDOM  from 'react-dom';
import './DoorSlider.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
var Carousel = require('react-responsive-carousel').Carousel;
import "react-responsive-carousel/lib/styles/carousel.css"

import img_service_ppc from  '../public/src/image/publishing/thumb_ppc.png';
import img_service_rr from  '../public/src/image/publishing/thumb_rr.jpg';
import img_service_style from  '../public/src/image/publishing/thumb_style.jpg';
import img_column from  '../public/src/image/publishing/thumb_column.png';
// import img_media from  '../public/src/image/3_5.jpg';


const propTypes = {

};
const defaultProps = {
};

class DoorSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items: [ { id:0, src:img_service_ppc, url:'/service/branding'},
                   { id:1, src:img_service_rr, url : '/service/rr'} ,
                   { id:2, src:img_service_style, url: '/service/styling'},
                   { id:3, src:img_column, url:'/column'} ],
          current_slide_index : 0,
        };
        this.handleImgclick = this.handleImgclick.bind(this)
    }

    handleImgclick(idx) {
      if(idx==0) {

      }else if(idx==1) {

      }else if(idx==2) {


      }else if(idx==3) {
      }

    }
    componentWillMount() {

    }

    shouldComponentUpdate(nextProps, nextState){
      // console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
      return true;
    }


    render() {

      const settings = {
        dots: true,
        nextArrow : false,
        prevArrow : false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        speed: 500,
        swipeToSlide : false,
        swipe: false,
        draggable : false,
        centerMode : false,
        pauseOnHover: true,
        touchMove : false,
        focusOnSelect : false,
      };
      // var cm = this;
      // var items = this.state.items.map(function (item,idx) {
      //       return (<div key={item.src+"_"+idx}> <img src={item.src} onClick={ cm.handleSliderImgclick.bind(cm)}/> </div>);
      //   });
      const items = this.state.items.map((item,idx) => (
        <div key={item.src+"_"+idx}> <img src={item.src} /> </div>
      ));
      // <div className ="slider-container">
      //   <Slider ref='slider' className="slider-content" {...settings}>
      //     {items}
      //   </Slider>
      // </div>
      // <Carousel
      //     axis="horizontal"
      //     showThumbs={false}
      //     showArrows={false}
      //     onClickItem={ (index) => this.handleImgclick(index)}
      //     width={window.innerWidth}
      //     dynamicHeight={false}
      //     interval={2000}
      //     autoPlay={true}
      //     infiniteLoop={true}
      //     showStatus={false}
      //     emulateTouch>
      //
      //       <div>
      //           <img src={img_service_ppc} />
      //       </div>
      //       <div>
      //           <img src={img_service_rr} />
      //       </div>
      //       <div>
      //           <img src={img_service_style} />
      //       </div>
      //       <div>
      //           <img src={img_column} />
      //       </div>
      //   </Carousel>

        return(
          <div className ="slider-container">
            <Slider ref='slider' className="slider-content" {...settings}>
              {items}
            </Slider>
          </div>
        );
    }
}
DoorSlider.propTypes = propTypes;
DoorSlider.defaultProps = defaultProps;
export default DoorSlider;
