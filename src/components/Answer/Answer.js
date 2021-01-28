import React from 'react'
import './styles.css'

const Answer = ({countries}) => {
    return (
        <ol className="answear">
            <li className="answear__item selected"><span className="answear__letter">A</span>{countries}</li>
            <li className="answear__item"><span className="answear__letter">B</span>Malasysia</li>
            <li className="answear__item"><span className="answear__letter">C</span>Sweden</li>
            <li className="answear__item"><span className="answear__letter">D</span>Austria</li>
        </ol>
    )
}

export default Answer
