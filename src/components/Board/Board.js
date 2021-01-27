import React, { useState } from 'react'
import Question from '../Question/Question'
import Answer from '../Answer/Answer'
import './styles.css'
import getRandom from '../../helpers/getRandom'


const Board = ({data}) => {
    const [country, setCountry] = useState(data[getRandom(data.length)])

    return (        
        <section className="board">
           <Question  
                capital={country.capital}
           />
           <Answer />        
        </section>        
    )
}

export default Board
