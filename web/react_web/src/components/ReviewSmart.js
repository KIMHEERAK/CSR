import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, IndexRoute } from 'react-router-dom'

import Review0 from './review/review0'
import Review1 from './review/review1'
import Review2 from './review/review2'
import Review3 from './review/review3'
import Review4 from './review/review4'
import Review5 from './review/review5'
import Review6 from './review/review6'

import hood_image from '../../public/src/image/publishing/thumb_hood.jpg'
import gardener_image from  '../../public/src/image/publishing/thumb_flower.jpg';
import driver_image from  '../../public/src/image/publishing/thumb_driver.jpg';
import calibe_image from '../../public/src/image/publishing/thumb_CALIBE.jpg'
import player_image from '../../public/src/image/publishing/thumb_player.jpg'
import runner_image from '../../public/src/image/publishing/thumb_runner.jpg'
import spinner_image from '../../public/src/image/publishing/thumb_spinner.jpg'

const propTypes = {
};
const defaultProps = {
};

class ColumnSmart extends Component {
  constructor(props) {
      super(props);
      this.state = {
        items: [ { id:0, src:hood_image, title: 'MASTER'},
                 { id:1, src:player_image, title: 'PLAYER'} ,
                 { id:2, src:driver_image, title: 'DRIVER'},
                 { id:3, src:calibe_image,title: 'CALIBE' },
                 { id:4, src:gardener_image, title: 'GARDENER'},
                 { id:5, src:runner_image, title: 'RUNNER'},
                 { id:6, src:spinner_image, title: 'SPINNER'}, ],
        column_no : null,
      };
  }

  componentWillMount() {
    // console.log(this.props.location.pathname)
  }

  render () {
    return(
      <div>
        <Router>
          <div className="column-container">
            <div className="column-nav-list">
              <b className="column-chapters">CHAPTERS</b>
              <b> <Link className="column-nav" to="/review/0">1. MASTER</Link> </b>
              <b> <Link className="column-nav" to="/review/1">2. PLAYER</Link> </b>
              <b> <Link className="column-nav" to="/review/2">3. DRIVER</Link> </b>
              <b> <Link className="column-nav" to="/review/3">4. CALIBE</Link> </b>
              <b> <Link className="column-nav" to="/review/4">5. GARDENER</Link> </b>
              <b> <Link className="column-nav" to="/review/5">6. RUNNER</Link> </b>
              <b> <Link className="column-nav" to="/review/6">7. SPINNER</Link> </b>
            </div>
              <Route exact path="/review/" component={Review0}/>
              <Route path="/review/0" component={Review0}/>
              <Route path="/review/1" component={Review1}/>
              <Route path="/review/2" component={Review2}/>
              <Route path="/review/3" component={Review3}/>
              <Route path="/review/4" component={Review4}/>
              <Route path="/review/5" component={Review5}/>
              <Route path="/review/6" component={Review6}/>
          </div>
        </Router>
        <div className="mobile-nav-list-box">
            <ul className="thumb-slide" style={{width: this.state.items.length*213+'px',height: '150px'}}>
              {this.state.items.map( (obj, idx) => {
                return (
                  <li key={'column_'+obj.id} className="thumb-slide-content" ref={this.state.column_no == obj.id ? ('active_column') : (null)}>
                    <a href={'/review/'+obj.id}>
                      <img src={obj.src}></img>
                    </a>
                    <div className="caption">
                      <strong>{obj.title}</strong>
                    </div>
                  </li>
                  )
              })}
            </ul>
        </div>
      </div>
    );
  }
}

// const ColumnSmart = () => (
//   <div>
//     <Router>
//       <div className="column-container">
//         <div className="column-nav-list">
//           <b className="column-chapters">CHAPTERS</b>
//           <b> <Link className="column-nav"+{this.state.current_column==1? "-on" : null} to="/column/intro">1.INTRO</Link> </b>
//           <b> <Link className="column-nav" to="/column/1">2.CENTER</Link> </b>
//           <b> <Link className="column-nav" to="/column/2">3.STIMULATE</Link> </b>
//           <b> <Link className="column-nav" to="/column/3">4.REASON</Link> </b>
//         </div>
//           <Route exact path="/column/" component={Column0}/>
//           <Route path="/column/intro" component={Column0}/>
//           <Route path="/column/1" component={Column1}/>
//           <Route path="/column/2" component={Column2}/>
//           <Route path="/column/3" component={Column3}/>
//       </div>
//     </Router>
//   </div>
// )

ColumnSmart.propTypes = propTypes;
ColumnSmart.defaultProps = defaultProps;

export default ColumnSmart;
