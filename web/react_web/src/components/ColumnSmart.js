import React, { Component, PropTypes } from 'react';
import ColumnIntro from './ColumnIntro'
import Column1 from './Column1'
import Column2 from './Column2'
import ServiceSmart from './ServiceSmart'
import { BrowserRouter as Router, Route, Link, IndexRoute } from 'react-router-dom'

const propTypes = {
};
const defaultProps = {
};

class ColumnSmart extends Component {
    constructor(props) {
        super(props);

        this.handLink = this.handLink.bind(this);
    }
    handLink() {
      console.log('work')
      Router.push('./column/intro')
    }
    render() {
        return(
            <div>
              <Router>
                <div>
                  <div>
                    <b > <Link className="Nav-Text" to="/column/intro">Intro</Link> </b>
                    <b > <Link className="Nav-Text" to="/column/1">1</Link> </b>
                    <b > <Link className="Nav-Text" to="/column/2">2</Link> </b>
                  </div>
                    <Route exact path="/column/intro" component={ColumnIntro}/>
                    <Route path="/column/1" component={Column1}/>
                    <Route path="/column/2" component={Column2}/>
                </div>
              </Router>
            </div>
        );
    }
}

ColumnSmart.propTypes = propTypes;
ColumnSmart.defaultProps = defaultProps;

export default ColumnSmart;
