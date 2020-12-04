import React from 'react'

const Title = (props) => {
    console.log("Title is clicked")
    console.log(props)
    return (
        <div>
            Title
        </div>
    )
}

export default React.memo(Title)
