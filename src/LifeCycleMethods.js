import React, { Component, PureComponent } from 'react'

export default class LifeCycleMethods extends PureComponent {

    //1 Mounting
    // Mounted
    // Unmounting


    constructor(props) { //life cycle methods //first method to get called // state init
        console.log("I am in constructor")
        super(props)    //only once 
        //super class constructor
        this.state = {
            Name: ""
        }

    }

    static getDerivedStateFromProps(props, state) { //when your props depends upon state
        //rarely used method
        //this.setState cant be used here
        state.Name = props.Name
        console.log("I am in get Derived State")

        return state
    }

    componentDidMount() {
        //most important life cycle method //

        // only once in component life cycle
        // call your API calls 

        console.log("i am in component did mount")
        this.setState({

        })

    }


    componentWillUnmount() {
        // UnMounted
        // cleaning logic, removing event listeners , deleting unused objects
    }

    shouldComponentUpdate(state, props) {
        // returns boolean value
        // true--> component will re render
        //false--> component will not re render
        console.log("I am in component should update")
        return true   // return false --> render method doesnt get called again
    }


    componentDidUpdate() {
        console.log("Component did update")   //API Call
        // Side Effects     
    }


    componentWillUnmount() {
        // last phase
        // delete objects, return clean up logic

    }

    render() {

        console.log("I am in render")
        return (
            <div>

            </div>
        )
    }
}
