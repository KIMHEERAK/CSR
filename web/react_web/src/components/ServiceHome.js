import React, { Component, PropTypes } from 'react'
import { BrowserRouter as Router, Route, Link, IndexRoute } from 'react-router-dom'
import ServicePPC from './ServicePPC'
import ServiceRR from './ServiceRR'
import ServiceStyle from './ServiceStyle'
import './ServiceHome.css'

const propTypes = {
};
const defaultProps = {
};

class ServiceHome extends Component {
    constructor(props) {
        super(props);

        this.handLink=this.handLink.bind(this);
    }

    handLink() {
      console.log('work');
      Router.push();
    }
    render() {
        return(
            <div>
              <div>
              <Router>
                <div>
                    <div className="Branding-container">
                      <div>
                        <b className="Branding-text-container"> Human Branding</b>
                        <br></br>
                        <b className="Branding-text-container"> 안될놈을 될놈으로.</b>
                        <br></br>
                        <br></br>
                        <b> <Link className="Branding-link-text-container" to="/service/Branding" onClick={this.handLink}> 자세히 보기 ></Link> </b>
                      </div>
                    </div>
                    <br></br>
                      <div className="Branding-container">
                        <div>
                          <b className="Branding-text-container"> Relastionship Recovery</b>
                          <br></br>
                          <b className="Branding-text-container"> 안될 상황을 될 상황으로.</b>
                          <br></br>
                          <br></br>
                          <b> <Link className="Branding-link-text-container" to="/service/RR" onClick={this.handLink}>  자세히 보기 ></Link> </b>
                        </div>
                      </div>
                    <br></br>
                      <div className="Branding-container">
                        <div>
                          <b className="Branding-text-container"> Nominate Styling</b>
                          <br></br>
                          <b className="Branding-text-container"> 안될놈아 옷좀 사입어.</b>
                          <br></br>
                          <br></br>
                          <br></br>
                          <b> <Link className="Branding-link-text-container" to="/service/styling" onClick={this.handLink}>  더 알아보기 ></Link> </b>
                        </div>
                      </div>
                </div>
              </Router>
            </div>

            </div>
        );
    }
}

ServiceHome.propTypes = propTypes;
ServiceHome.defaultProps = defaultProps;

export default ServiceHome;
