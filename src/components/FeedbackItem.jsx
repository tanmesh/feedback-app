import { FaTimes } from "react-icons/fa"
import Card from "../shared/Card"
import PropType from 'prop-types'

function FeedbackItem({ item, handleDelete }) {
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => handleDelete(item.id)} className="close">
                <FaTimes color="purple"></FaTimes>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    ) 
}

FeedbackItem.prototype = {
    item: PropType.object.isRequired,
}

export default FeedbackItem
