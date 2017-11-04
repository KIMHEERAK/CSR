import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, IndexRoute } from 'react-router-dom'
import './ColumnSmart.css'
import Column1 from './column/Column1'
import Column2 from './column/Column2'
import Column3 from './column/Column3'
import Column0 from './column/Column0'
import Column4 from './column/Column4'
import Column5 from './column/Column5'
import Column6 from './column/Column6'
import Column7 from './column/Column7'
import Column8 from './column/Column8'
import Column9 from './column/Column9'

var scrollIntoView = require('scroll-into-view');
import ReactDOM from 'react-dom';
import circlr_image from '../../public/src/image/publishing/thumb_circle2.jpg'
import map_image from  '../../public/src/image/publishing/thumb_looking_for.jpg';
import beach_image from  '../../public/src/image/publishing/thumb_beach.jpg';
import ring_image from '../../public/src/image/publishing/thumb_ring2.jpg'
import sea_image from '../../public/src/image/publishing/thumb_sea3.jpg'
import swamp_image from '../../public/src/image/publishing/thumb_swamp.jpg'
import fear_image from '../../public/src/image/publishing/thumb_octagon.jpg'
import point_image from '../../public/src/image/publishing/thumb_point.png'
import vans_image from '../../public/src/image/publishing/thumb_vans.jpg'
import freedom_image from '../../public/src/image/publishing/thumb_liberty.jpg'

const propTypes = {
};
const defaultProps = {
};

class ColumnSmart extends Component {
  constructor(props) {
      super(props);
      this.state = {
        items: [ { id:0, src:circlr_image, title: '3ELEMENTZ'},
                 { id:1, src:map_image, title: 'ERIC STORY'} ,
                 { id:2, src:beach_image, title: 'CENTER'},
                 { id:3, src:ring_image,title: 'MIND' },
                 { id:4, src:sea_image, title: 'SAFE'},
                 { id:5, src:swamp_image, title: 'SWAMP'},
                 { id:6, src:fear_image, title: 'ANXIETY'},
                 { id:7, src:point_image, title: 'YOU'},
                 { id:8, src:vans_image, title: 'FASHION'},
                 { id:9, src:freedom_image, title: 'FREEDOM'}  ],
        column_no : null,
      };
  }

  componentWillMount() {
    console.log('path',this.props.location.pathname)
    this.setState(

      // ex) pathname is /column/Number /column/ length is 8
      {column_no : this.props.location.pathname.slice(8)}
    )
  }

  componentDidMount() {
    // let current_column_node = ReactDOM.findDOMNode(this.refs.active_column);
    // scrollIntoView(current_column_node);
  }

  render () {
    return(
      <div>
        <Router>
          <div className="column-container">
            <div className="column-nav-list">
              <b className="column-chapters">CHAPTERS</b>
              <b> <Link className="column-nav" to="/column/0">1. 3ELEMENTZ</Link> </b>
              <b> <Link className="column-nav" to="/column/1">2. ERIC STORY</Link> </b>
              <b> <Link className="column-nav" to="/column/2">3. CENTER</Link> </b>
              <b> <Link className="column-nav" to="/column/3">4. MIND</Link> </b>
              <b> <Link className="column-nav" to="/column/4">5. SAFE</Link> </b>
              <b> <Link className="column-nav" to="/column/5">6. SWAMP</Link> </b>
              <b> <Link className="column-nav" to="/column/6">7. ANXIETY</Link> </b>
              <b> <Link className="column-nav" to="/column/7">8. YOU</Link> </b>
              <b> <Link className="column-nav" to="/column/8">9. FASHION</Link> </b>
                <b> <Link className="column-nav" to="/column/9">10. FREEDOM</Link> </b>
            </div>
              <Route exact path="/column/" component={Column0}/>
              <Route path="/column/0" component={Column0}/>
              <Route path="/column/1" component={Column1}/>
              <Route path="/column/2" component={Column2}/>
              <Route path="/column/3" component={Column3}/>
              <Route path="/column/4" component={Column4}/>
              <Route path="/column/5" component={Column5}/>
              <Route path="/column/6" component={Column6}/>
              <Route path="/column/7" component={Column7}/>
              <Route path="/column/8" component={Column8}/>
              <Route path="/column/9" component={Column9}/>
          </div>
        </Router>
        <div className="mobile-nav-list-box">
            <ul className="thumb-slide" style={{width: this.state.items.length*213+'px',height: '150px'}}>
              {this.state.items.map( (obj, idx) => {
                return (
                  <li key={'column_'+obj.id} className="thumb-slide-content" ref={this.state.column_no == obj.id ? ('active_column') : (null)}>
                    <a href={'/column/'+obj.id}>
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
