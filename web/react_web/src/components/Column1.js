import React, { Component, PropTypes } from 'react';
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
            <div>Column1</div>
        );
    }
}
Column1.propTypes = propTypes;
Column1.defaultProps = defaultProps;
export default Column1;
