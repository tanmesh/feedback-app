import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropType from "prop-types"

function FeedbackList({ feedback, handleDelete }) {
    if (!feedback || feedback.length == 0) {
        return <p> No Feedback Yet</p>
    }

    return (
        <div className="feedback-list">
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
            ))}
        </div>
    )
}

FeedbackList.prototype = {
    feedback: PropType.shape({
        id: PropType.number.isRequired,
        rating: PropType.number.isRequired,
        text: PropType.string.isRequired,
    }),
}

export default FeedbackList
