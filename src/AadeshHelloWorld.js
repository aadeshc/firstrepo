import React, { Component } from 'react'

//state
// how do i share the state between components / how can i pass data between two components
//  parent comp --> child ---> props
// child-> parent
// child--> child

export default class AadeshHelloWorld extends Component {


    constructor(props) {
        super(props)
        this.state = {
            Name: "",
            Age: "",
            Dept: ""
        }
    }




    render() {
        console.log(this.props)

        return (
            <div>
                {this.props.UserName}  <input type="text" onChange={this.props.ChangeFunction}></input>


            </div>
        )
    }
}
