import React from 'react'

const withCounter = (OldComponent) => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                Count: 0
            }
        }

        handleClick = () => {
            this.setState({
                Count: this.state.Count + 1
            })
        }
        render() {
            return (<OldComponent Count={this.state.Count} Count={this.state.Count} handleClick={this.handleClick}></OldComponent>)
        }
    }
    return (NewComponent)
}


export default withCounter
