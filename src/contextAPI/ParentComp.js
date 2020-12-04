import React, { Component } from 'react'
import Child1 from './Child1'
import { Provider } from './UserContext'
export default class ParentComp extends Component {
    render() {
        return (
            <div>
                <Provider value="Aadesh">
                    <Child1></Child1>
                </Provider>
            </div>
        )
    }
}
