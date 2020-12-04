import React, { Component } from 'react'
import Child2 from './Child2'
export default class Child1 extends Component {
    render() {
        return (
            <div>
                I  am child 1
                <Child2 />
            </div>
        )
    }
}
