import React from 'react'
import ChangeUserName from './ChangeUserName'


class SharingState extends React.PureComponent {
    constructor(props) {
        console.log("I am in constructor")
        super(props)
        this.state = {
            Name: "Ashutosh",
            Age: "32"
        }
        this.handleChangeNew = this.handleChangeNew.bind(this)
    }



    handleChangeNew(e) {
        this.setState({
            Name: e.target.value
        })
    }

    handleChange = (e) => {

        this.setState({
            Name: e.target.value
        })




    }


    componentDidMount() {
        console.log("i am in did mount")
        setInterval(() => {
            this.setState({

            })
        }, 3000)
    }

    render() {
        console.log("render method")



        return (
            <React.Fragment>
                <ChangeUserName Name={this.state.Name} handleChange={this.handleChangeNew} />
            </React.Fragment>
        )
    }
}


export default SharingState