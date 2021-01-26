import React from 'react'
import Question from '../Question'
import Answer from '../Answer'
import './styles.css'

const Board = () => {
    return (        
        <section className="board">
           <Question />
           <Answer />        
        </section>        
    )
}

export default Board
