import React from 'react'
import PropType from "prop-types"

function FeedbackStats({ feedback }) {

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

FeedbackStats.prototype = {
    feedback: PropType.shape({
        id: PropType.number.isRequired,
        rating: PropType.number.isRequired,
        text: PropType.string.isRequired,
    }),
}

export default FeedbackStats
