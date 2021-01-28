import React from 'react'
import getCapital from '../../helpers/getCapital'
import './styles.css'

const Question = ({capitals}) => {

     const capital = getCapital(capitals)
    //  console.log(capital)

    return (
        <> 
            <h2 className="question">{capital} is the capital of</h2>            
        </>    
    )
}

export default Question
