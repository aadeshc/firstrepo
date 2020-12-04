import React from 'react'

class Helloworld extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: "Aadesh",
            Age: "",
        }

        this.handleChange1 = this.handleChange1.bind(this)
    }



    handleChange1(e) {

        // this!!!!!!!!!!!!! --> current context --> setState--> error
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            window.alert(this.state.Name)
            this.anotherFunc()
        }) //asynchronous
        //asynchronous
    }

    anotherFunc() {
        alert("I am in another function")
    }
    handleChange = (e) => {

        //doesnt have local this
        // global this
        debugger;
        this.setState({
            [e.target.name]: e.target.value
        })


    }

    render() {
        console.log(this.props)
        return (
            <div>

                {this.state.Name} <input type="text" name="Name" onChange={this.handleChange1} />
                {this.state.Age} <input type="text" name="Age" onChange={this.handleChange} />

            </div>
        )
    }
}




export default Helloworld