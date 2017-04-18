import React, { Component, PropTypes } from 'react';
import YoutubeView from './YoutubeView'
import { Button,DropdownButton,MenuItem} from 'react-bootstrap';

const propTypes = {
};
const defaultProps = {
};


class YoutubeSmart extends Component {
    constructor(props) {
        super(props);
        this.state = {current_YT_id : 'taJW8C_kxuM'};
        this.handleDropDwonBtnLimitChange = this.handleDropDwonBtnLimitChange.bind(this);
    }

    handleDropDwonBtnLimitChange(eventKey) {
        console.log(eventKey)
        this.setState({current_YT_id: eventKey});
    }


    render() {
        return(
            <div>
              <YoutubeView YTData={this.state.current_YT_id}/>
            </div>
        );
    }
}

YoutubeSmart.propTypes = propTypes;
YoutubeSmart.defaultProps = defaultProps;

export default YoutubeSmart;
