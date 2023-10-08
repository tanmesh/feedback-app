import { useContext } from 'react'
import React from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
    const { feedback } = useContext(FeedbackContext)

    let average = feedback.reduce((accumulator, curr) => {
        return accumulator + curr.rating
    }, 0) / feedback.length
    average = isNaN(average) ? 0 : average
    average = average.toFixed(1).replace(/[.,]0$/, '')

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {average}</h4>
        </div>
    )
}

export default FeedbackStats
