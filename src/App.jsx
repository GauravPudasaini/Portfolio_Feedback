  import { useState } from 'react';
  import './App.css'
  import FeedbackForm from './components/feedbackForm';
  import FeedbackMessage from './components/FeedBackMessage';
  import BrowseButton from './components/BrowseButton';

  function App() {
      const [pdfUrl, setPdfUrl] = useState(null);
      const [isButton, showButton] = useState(true);
    return (
      <>
      <div className='main-container' >
        {isButton && (
        <div className= 'form-container'>
          <div className='hero'>
            <BrowseButton
              setPdfUrl={setPdfUrl}
              setHideBrowseButton={showButton}
            />
          </div>
          </div>
        )}
        <div className='after-selecting'> 
          <div className='CV-styling'>
        <FeedbackForm pdfUrl={pdfUrl}  />
        </div>
        <div className='Feedback-styling'>
        {!isButton && (
          <FeedbackMessage onChange = {() => {showButton(true)}}  />
        )}
        </div>
        </div>
        
      </div>
      </>
    ) 
  }

  export default App
