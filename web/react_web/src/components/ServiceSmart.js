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

        this.state = {
          header_value : "SERVICE"
        }

        this.set_header = this.set_header.bind(this);
    }

    set_header(value) {
      this.setState({header_value:value})
    }
    render() {
        return(
            <div>
              <div>
              <Router>
                <div>
                  <div className="Nav-service">
                    <ul className="Nav-ul">
                      <li className="Nav-list-li"> <Link className="Nav-Text" to="/service/branding">H-BRANDING</Link> </li>
                      <li className="Nav-list-li"> <Link className="Nav-Text" to="/service/rr">R-RECOVERY</Link> </li>
                      <li className="Nav-list-li"> <Link className="Nav-Text" to="/service/styling">M-STYLING</Link> </li>
                    </ul>
                  </div>
                    <Route exact path="/service" component={ServiceHome}/>
                    <Route exact path="/service/branding" component={ServicePPC}/>
                    <Route path="/service/rr" component={ServiceRR}/>
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
