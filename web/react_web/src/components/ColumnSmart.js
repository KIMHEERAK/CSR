import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, IndexRoute } from 'react-router-dom'
import './ColumnSmart.css'
import Column1 from './column/Column1'
import Column2 from './column/Column2'
import Column3 from './column/Column3'
import Column0 from './column/Column0'

const propTypes = {
};
const defaultProps = {
};


const ColumnSmart = () => (
  <div>
    <Router>
      <div className="column-container">
        <div className="column-nav-list">
          <b className="column-chapters">CHAPTERS</b>
          <b> <Link className="column-nav" to="/column/intro">1.INTRO</Link> </b>
          <b> <Link className="column-nav" to="/column/1">2.CENTER</Link> </b>
          <b> <Link className="column-nav" to="/column/2">3.STIMULATE</Link> </b>
          <b> <Link className="column-nav" to="/column/3">4.REASON</Link> </b>
        </div>
          <Route exact path="/column/" component={Column0}/>
          <Route path="/column/intro" component={Column0}/>
          <Route path="/column/1" component={Column1}/>
          <Route path="/column/2" component={Column2}/>
          <Route path="/column/3" component={Column3}/>
      </div>
    </Router>
  </div>
)

ColumnSmart.propTypes = propTypes;
ColumnSmart.defaultProps = defaultProps;

export default ColumnSmart;
