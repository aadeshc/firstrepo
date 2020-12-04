import React, { Component } from 'react'

export default class ChangeUserName extends React.Component {
    constructor(props) {
        console.log("i am construcotr of change")
        super(props)

    }

    componentDidMount() {
        console.log("i am in cdm")
    }

    render() {
        console.log("I am in render of Change User Name")

        return (
            <div>
                I am {this.props.Name}
                <input type="text" onChange={this.props.handleChange} />
            </div>
        )
    }
}




var abc = 12








