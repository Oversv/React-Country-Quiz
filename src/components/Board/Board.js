import React, { useState, useEffect } from 'react'
import Question from '../Question/Question'
import Answer from '../Answer/Answer'
import './styles.css'

const Board = () => {
    const [countries, setCountries] = useState([])
    const [capitals, setCapitals] = useState([])
    const [flags, setFlags] = useState([])
    const [loading, setLoading] =useState(true)

    useEffect(() => {
        const url = 'https://restcountries.eu/rest/v2/all'
        setLoading(true)

        fetch(url)
            .then(res => res.json())
            .then(res=>{
                setCountries(res.map(country => country.name))
                setCapitals(res.map(country => country.capital))
                setFlags(res.map(country => country.flags))
                setLoading(false)
            })
    },[])

    return (        
 
        <section className="board">
            {
                loading
                    ? <h3>Loading</h3>
                    : <>
                        <Question 
                            capitals={capitals}
                        />
                        <Answer  />                        
                      </>         
            }    
        </section>        
    )
}

export default Board
