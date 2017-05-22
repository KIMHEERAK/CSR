import React, { Component, PropTypes } from 'react';
import './Column.css'

import testImage0 from  '../../../public/src/image/column_intro/research.jpg';
import SignImage from '../../../public/src/image/publishing/sign.JPG'

const propTypes = {
};
const defaultProps = {
};

class Column1 extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div>
                <div className="column-title-container">
                  <h1 className="column-text-title">CENTER</h1>
                  <h3 className="column-text-subtitle"> COMMING SOON</h3>
                </div>

                <div className="column-image-container">
                  <img className="column-image" key={testImage0} src={testImage0}/>
                </div>
                <div className="column-text-container">
                  <b className="column-body-title"> COMMING SOON</b>
                  <p className="column-body-desc">  COMMING SOON</p>
                </div>



                <div className="empty-container">
                </div>
                <div>
                  <img className="column-bottom-sign" src={SignImage}/>
                </div>
            </div>
        );
    }
}
Column1.propTypes = propTypes;
Column1.defaultProps = defaultProps;
export default Column1;
