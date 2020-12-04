import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class About extends Component {

    constructor(props) {
        super(props)

    }
    componentDidMount() {

    }


    render() {

        console.log(this.props)
        return (
            <div>
                Welcome {this.props.match.params.UserName}
            </div>
        )
    }
}
