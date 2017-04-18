import React, { Component, PropTypes } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'react-bootstrap';
import HomeValue from './HomeValue';

const propTypes = {
};
const defaultProps = {
};

class HomeSmart extends Component {
    constructor(props) {
        super(props);

    }

    shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
    return true;
    }


    render() {
        return(
            <div>
              <div>
                <HomeValue/>
              </div>
              <hr></hr>
            </div>
        );
    }
}

HomeSmart.propTypes = propTypes;
HomeSmart.defaultProps = defaultProps;

function mapStateToProps(state) {
  return {
    testData: state.test.testResult
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...actions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeSmart);
