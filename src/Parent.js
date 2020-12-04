import React, { Component } from 'react'
import LifeCycleMethods from './LifeCycleMethods'
import Child1 from './Child1'
export default class Parent extends React.PureComponent {


    constructor(props) {
        super(props)
        this.state = {
            UserName: "Aadesh",
            Password: "Chhajed"
        }


    }

    handleChange = (e) => {
        this.setState({
            UserName: e.target.value
        })
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Child1 Obj={this.state} HandleCount={this.handleChange} />
            </div>
        )
    }
}
