import Card from "../shared/Card"
import PropType from 'prop-types'

function FeedbackItem({item}) {
    return (
        <Card>
            <div className="num-display">{item.rating}</div>

            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.prototype = {
    item: PropType.object.isRequired,
}

export default FeedbackItem
