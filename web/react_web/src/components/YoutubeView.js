import React, { Component, PropTypes } from 'react';
import './YoutubeView.css'
import YouTube from 'react-youtube';
import YoutubePlayer from 'react-youtube-player';
import getYouTubeID from 'get-youtube-id';
import { Button } from 'react-bootstrap';
import 'react-image-slider/lib/image-slider.css'
import Coverflow from 'react-coverflow';

import testImage0 from '../../public/src/image/consulting_image3.jpg';
import testImage1 from '../../public/src/image/looser_image3.jpg';
import testImage2 from '../../public/src/image/styling_image.jpg';
import testImage3 from '../../public/src/image/sick_image.jpg';

const propTypes = {
};
const defaultProps = {
};


function YT_image(url) {

  var result = "http://img.youtube.com/vi/"+url+"/0.jpg"

   //console.log('image',result)

  return result

}


class YoutubeView extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [{ id:0, src:testImage0},{ id:1, src:testImage1},{id:2, src:testImage2},{id:3, src:testImage3}]};
        this.handleImgclick=this.handleImgclick.bind(this)
    }

    componentWillReceiveProps(nextProps) {
       //console.log('view update',nextProps)
    }

    shouldComponentUpdate(nextProps, nextState){
     //console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
    return true;
    }

    componentWillUpdate(nextProps, nextState){
     //console.log("componentWillUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
    }

    handleImgclick(key) {
       //console.log('work',key)

    }

    _onReady(event) {
        // access to player in all event handlers via event.target
         //console.log('ready',event)
        event.target.pauseVideo();
        // event.target.playVideo();
    }
    _onPlay(event){
         //console.log('Play',event)
    }
    _onStateChange(event){
         //console.log('StateChange',event)
    }

    render() {

      // 2160p: 3840x2160
      // 1440p: 2560x1440
      // 1080p: 1920x1080
      // 720p: 1280x720
      // 480p: 854x480
      // 360p: 640x360
      // 240p: 426x240
        const opts = {
          height: '350',
          width: '620',
          playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
            color : 'red',
            listType: 'search',
            playlist : '58Px_KGmfVk,wjXkhP_Kohg,q8Q9fa5R32g'
          }
        };

        const items = this.state.items.map((item) => (
          <img key={item.src} src={item.src} data-action={ () => this.handleImgclick(item.id)} />
        ));

        return(
            <div>
              <div className="YT-container">
                <b className="media-text"> 3.ELEMENTZ LAB Media</b>
                <br/>
                <YouTube className="YT-content"
                  videoId={this.props.YTData}
                  opts={opts}
                  onReady={this._onReady.bind(this)}
                  onPlay={this._onPlay.bind(this)}
                  onStateChange={this._onStateChange.bind(this)}>
                </YouTube>
                <br/>
                <b className="media-description-text"> 3.ELEMENTZ LAB 창립자인 ERIC은 인간관계의 3요소를 정립하여 휴먼 브랜딩, 관계 회복, 스타일링을 서비스하고 있습니다. </b>
              </div>
              <div className="cover-container">
                <Coverflow
                  width="100%"
                  height="100"
                  displayQuantityOfSide={2}
                  navigation={false}
                  enableScroll={false}
                  clickable={true}
                  enableHeading={true}
                  active={2} >

                </Coverflow>
              </div>

            </div>
        );
    }
}
YoutubeView.propTypes = propTypes;
YoutubeView.defaultProps = defaultProps;
export default YoutubeView;
