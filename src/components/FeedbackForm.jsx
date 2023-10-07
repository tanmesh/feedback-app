import React from 'react'
import Card from "../shared/Card"
import { useState } from "react"
import Button from '../shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({ handleAdd }) {
    const [text, setText] = useState("")
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState("")

    const currTextLength = text.trim().length

    const handleTextChange = (e) => {
        if (text === "") {
            setBtnDisabled(true)
            setMessage("")
        } else if (currTextLength < 10) {
            setBtnDisabled(true)
            setMessage("Text must be atleast " + (10 - currTextLength) + " characters")
        } else {
            setBtnDisabled(false)
            setMessage("")
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating,
            }

            handleAdd(newFeedback)
        }

    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>

                <RatingSelect select={setRating} selected={rating} />

                <div className="input-group">
                    <input
                        onChange={handleTextChange}
                        type="text"
                        name=""
                        placeholder="Write a review"
                        value={text} />
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>

                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
