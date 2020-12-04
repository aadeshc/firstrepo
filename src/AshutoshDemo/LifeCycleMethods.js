import React, { Component } from 'react'

export default class LifeCycleMethods extends React.PureComponent {
    constructor(props) {
        console.log("I am in Constructor") //called once 
        super(props)
        this.state = {

        }
    }

    componentDidMount() {


        alert("Welcome")


    }

    static getDerivedStateFromProps(props) {
        console.log("I am get derived state from props")
        console.log(props)
    }

    shouldComponentUpdate(props, state) {
        console.log("I am in component should update")
        return false
    }

    componentWillUnmount() {
        // object delete
        // event listener remove
    }

    componentDidUpdate() {
        console.log("I am component did update")
    }


    showMessage = (e) => {
        this.setState({
            char: e.target.value
        }, () => {
            //
            //
            //

        })


    }



    render() {
        console.log("I am in render")
        return (
            <div>

                <input type="text" onChange={this.showMessage}></input>
            </div>
        )
    }
}
