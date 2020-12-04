import React, { Component } from 'react'
import WithCounter from './withCounter'
class ClickCounter extends Component {

    render() {
        return (
            <div>
                {this.props.Count} increamented by {this.props.name}
                <input type="Button" value="Click" onClick={this.props.handleClick}></input>
            </div>
        )
    }
}

export default WithCounter(ClickCounter)