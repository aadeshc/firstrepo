// react.component
// class abc extends React.Component
// class component this keyword , very confusing ,
import React from 'react'
import { useState, useEffect } from 'react'

export const MyFunctionalComp = (props) => {

    // we dont have any lifecycle methods
    //react hooks

    const [count, setCount] = useState(0) //this.state={count : 0}


    const [details, setDetails] = useState({ FirstName: "", LastName: "" })

    const handleClick = () => {
        setCount(count + 1)
    }


    useEffect(() => {
        console.log("UseEffect is called")
    })

    useEffect(() => {

    }, [])

    useEffect(() => {
        console.log("Value is changed")
    }, [details]) //componentdidupdate

    useEffect(() => {

        return () => {
            // cleanup logic --> component umount ---> componentwillunmount
            // delte objects
            // remove event listenetrs
        }
    }, [])

    return (
        <div>
            Welcome {props.Name}
            My First React Functional Component
            Count : {count}
            <input type="Button" value="Click" onClick={handleClick}></input>


            {details.FirstName} Name : <input type="text" onChange={(e) => { setDetails({ ...details, FirstName: e.target.value }) }}></input>
            {details.LastName} Last Name : <input type="text" onChange={(e) => { setDetails({ ...details, LastName: e.target.value }) }}></input>
        </div>
    )

}


