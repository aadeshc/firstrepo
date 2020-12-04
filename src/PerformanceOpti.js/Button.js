import React from 'react'

const Button = (props) => {
    console.log(props.children)
    return (
        <div>
            <input type="Button" onClick={props.handleClick} value="Click" />
            {props.children}
        </div>
    )
}

export default React.memo(Button)
