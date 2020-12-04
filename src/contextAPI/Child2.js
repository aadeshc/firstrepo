import React, { Component } from 'react'
import Child3 from './Child3'
export default class Child2 extends Component {
    render() {
        return (
            <div>
                i am child 2
                <Child3 />
            </div>
        )
    }
}
