import React, { Component } from 'react'
import { UserContext } from './UserContext'
export default class Child3 extends Component {

    static contextType = UserContext
    componentDidMount() {

        var obj = this.context
        console.log(obj)

    }


    render() {
        var obj = this.context
        return (
            <div>
                Welcome {obj}
            </div>
        )
    }
}
