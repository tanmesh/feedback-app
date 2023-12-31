import { FaTimes, FaEdit } from "react-icons/fa"
import { useContext } from 'react'
import Card from "./shared/Card"
import PropType from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ item }) {
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} className="close">
                <FaTimes color="purple"></FaTimes>
            </button>
            <button onClick={() => editFeedback(item)} className="edit">
                <FaEdit color="purple"></FaEdit>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.prototype = {
    item: PropType.object.isRequired,
}

export default FeedbackItem
