import React, { Component } from 'react'
import WithCounter from './withCounter'
class HoverCounter extends Component {
    render() {
        return (
            <div onMouseOver={this.props.handleClick}>
                {this.props.Count}
                Please <br></br>
                Hover <br></br>
                Over <br></br>
                Me <br></br>

            </div>
        )
    }
}


export default WithCounter(HoverCounter)