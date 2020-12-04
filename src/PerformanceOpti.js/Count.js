import React from 'react'

var Count = (props) => {
    console.log("Count is clicked")
    return (
        <div>
            {props.text} - {props.cnt}
        </div>
    )
}

export default React.memo(Count)
