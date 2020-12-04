import React from 'react'
import AadeshHelloWorld from './AadeshHelloWorld'


//mounting
//mounted/loaded
//unmounting

export default class HelloWorldRiyaz extends React.Component {
    constructor(props) {
        //first method
        // only once
        // initialization
        console.log("Constructor is loaded")
        super(props)
        // super method calls base class constructor
        this.state = {
            UserName: "Aadesh"
        }

    }

    static getDerivedStateFromProps(state, props) {

        console.log("I am in Derived State From Props")
        return props
    }

    shouldComponentUpdate(state, props) {
        return true
    }

    componentDidUpdate() {
        //second best method to make API call
        console.log("I am in component did update")
    }

    componentWillUnmount() {
        // cleanup logic
    }





    componentDidMount() {
        //get called only once
        //api call -> 
        console.log("I am in comoonent did mount")
        this.setState({
            Name: "Riyaz"
        }) // render method again--> Mounted
    }


    handleChange = (e) => {
        this.setState({
            UserName: e.target.value
        })
    }

    render() {
        console.log("Inside render")
        var obj = {
            Name: "Aadesh",
            Age: "31",
            City: "Pune"
        }
        return (
            <div>

                hi
            </div>
        )

    }
}