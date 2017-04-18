import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link, IndexRoute } from 'react-router-dom'
import ServiceHome from './ServiceHome'
import ServicePPC from './ServicePPC'
import ServiceRR from './ServiceRR'
import ServiceStyle from './ServiceStyle'
import './ServiceSmart.css'

import userIcon from  '../../public/src/icon/user.png';

const propTypes = {
};
const defaultProps = {
};

class ServiceSmart extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
              <div>
              <Router>
                <div>
                  <div className="Nav-service">
                    <b > <Link className="Nav-Text" to="/service/Branding">H-Branding</Link> </b>
                    <b > <Link className="Nav-Text" to="/service/RR">R-Recovery</Link> </b>
                    <b > <Link className="Nav-Text" to="/service/styling">M-Styling</Link> </b>
                  </div>
                    <Route exact path="/service" component={ServiceHome}/>
                    <Route path="/service/Branding" component={ServicePPC}/>
                    <Route path="/service/RR" component={ServiceRR}/>
                    <Route path="/service/styling" component={ServiceStyle}/>
                </div>
              </Router>
            </div>

            </div>
        );
    }
}

ServiceSmart.propTypes = propTypes;
ServiceSmart.defaultProps = defaultProps;
export default ServiceSmart;
