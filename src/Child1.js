import React, { Component } from 'react'

export default class Child1 extends Component {
    render() {
        return (
            <div>
                Welcome {this.props.Obj.UserName}
                <input type="text" onChange={this.props.HandleCount} />
            </div>
        )
    }
}



// i want to share state between comp
// parent to child --> props
// child to parent --> callback function , callback function as props from parent to child
// two unrelated components ---> one component parent , parent will have state --> lifting the state




// Username  
// Change Password 



// Password - {}
// Change UserName
