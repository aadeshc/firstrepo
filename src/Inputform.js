import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GetAge, GetName, GetUsers } from './Redux/actions';

class Inputform extends Component {
    render() {
        return (
            <div>
                {this.props.propsName} Name  : <input type="text" onChange={this.props.propsGetName}></input>
                {this.props.propsAge} Age : <input type="text" onChange={this.props.propsGetAge}></input>
                <input type="Button" value="Click" onClick={this.props.propsGetUsers}></input>
            </div>
        )
    }
}

const mapStateToProps = (state) => { //reading from the store

    debugger;
    return {
        propsName: state.Name,
        propsAge: state.Age
    }

} //reading from the store

const mapDispatchToProps = (dispatch) => { // writing in the store
    return {
        propsGetName: (e) => { dispatch(GetName(e.target.value)) },
        propsGetAge: (e) => { dispatch(GetAge(e.target.value)) },
        propsGetUsers: (e) => { dispatch(GetUsers()) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Inputform)