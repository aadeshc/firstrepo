import React, { useState, useCallback } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'
import Alert from 'react-bootstrap/Alert'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

export const Parent = () => {


    const [age, setAge] = useState(25)
    const [sal, ssetSal] = useState(100000)




    // var increameantSal = useCallback(
    //     () => {

    //         ssetSal(sal + 1000)


    //     },
    //     [sal],
    // )


    var increameantSal = () => {
        ssetSal(sal + 1000)
    }


    var increamentAge = () => {
        setAge(age + 1)
    }

    // var increamentAge = useCallback(
    //     () => {

    //         setAge(age + 1)

    //     },
    //     [age],
    // )


    // functions are of reference types -->
    // 
    return (

        //PureComponent--> render only once
        // React.memo

        <div>
            <Title />
            <Count text="age" cnt={age} />
            <Button handleClick={increamentAge} value="">Increament Age</Button>
            <Count text="Salary" cnt={sal} />
            <Button handleClick={increameantSal}>Increament Sal</Button>
        </div>
    )
}
