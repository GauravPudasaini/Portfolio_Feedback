import { useState } from "react"
import "./FeedbackMessage.css"

const FeedbackMessage = ({ }) => {

  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState('false')
  const [feedbackMsg, setFeedbackMsg] = useState(false)
  const [hideButton, setHidebutton] = useState(false)

  const SendData = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),

    });
    if (res.ok) {
      setSubmitted(true);
      setMessage('');
    }
  }

  const showfeedbackMessage = () => {
    setFeedbackMsg(prev => !prev);
    setHidebutton(true)
  }
  return (
    <>
      <div className="Feedback-container">
        <div className="center-button">
          <button onClick={showfeedbackMessage} className="Leave-fee">
            Leave a Feedback </button>
        </div>
        {feedbackMsg && (
          <div className='feeback-message'>
            <form className="questions-container" onSubmit={SendData}>
              <fieldset>
                <h1>Rate the CV</h1>
                <label>Excellent <input type="radio" name="group" /></label>
                <label>Good<input type="radio" name="group" /></label>
                <label>Moderate<input type="radio" name="group" /></label>
                <label>Need For Improvement<input type="radio" name="group" /></label>
                <label>Bad<input type="radio" name="group" /></label>
              </fieldset>
              <div className="open-ended-questions">
                <h1>Open Ended Question</h1>
                <label for="likes">What do you like most about this CV?</label><br />
                <textarea id="likes" name="likes" rows="4" cols="50"></textarea><br />
                <label for="dislikes">What aspects of this CV could be improved?</label><br />
                <textarea id="dislikes" name="dislikes" rows="4" cols="50"></textarea><br />
                <label for="suggestions">What are your suggestions for improvement?</label><br />
                <textarea id="suggestions" name="suggestions" rows="4" cols="50"></textarea><br />
                <label for="other">Any other comments or feedback?</label><br />
                <textarea id="other" name="other" rows="4" cols="50"></textarea><br />
              </div>
              <button className="form-footer">
                Submit
              </button>
            </form>
          </div>
        )}
      </div >
    </>
  )

}

export default FeedbackMessage